import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { getLoginFormStyles } from './LoginForm.Styles';
import { Box, Grid, Stack, TextField, Typography, OutlinedInput, IconButton, InputAdornment, } from '@mui/material';
import CommonButton from '../button/CommonButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { motion } from 'framer-motion';
import handleMemberLogin from '../../api/login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { setMemberData } from '../../store/slices/MemberDataSlice';
import { setCustomSnackbar } from '../../store/slices/SnackbarSlice';
import { setIsLoading } from '../../store/slices/LoaderSlice';
import Loader from '../loader/Loader';
import snackbarMessages from '../../Constants';
const LoginForm = () => {

    const { classes } = getLoginFormStyles();

    const isLoading = useSelector((state)=>{
        return state.loaderReducer.isLoading;
    });

    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {register, handleSubmit, formState: { errors }, } = useForm();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

      const handlePasswordVisibility = () => {//to toggle visibility of password
        setIsPasswordVisible(!isPasswordVisible);
      };
    
      const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

      const memberData = {
        email: email,
        password: password
      };

      const handleFormSubmit = async () => {
        dispatch(setIsLoading(true));
        const response = await handleMemberLogin(memberData);
        console.log(response);
        if(response?.data?.status === "success"){
            dispatch(setIsLoading(false));
            dispatch(
                setCustomSnackbar({
                  snackbarOpen: true,
                  snackbarType: snackbarMessages.SUCCESS,
                  snackbarMessage: snackbarMessages.LOGIN_SUCCESSFULL,
                })
            );
            localStorage.setItem("memberToken", response.data.data.token);
            dispatch(setMemberData(response.data.data.user));
            setTimeout(() => {
                window.location.reload();
            }, 1500);
        }
      };

    return (
        <Box className={classes.getMainContStyles}>
            <Stack className={classes.getTextContStyles}>
                <Typography className={classes.getTextOneStyles}>Welcome back !</Typography>
                <Typography className={classes.getTextTwoStyles}>Please enter your details</Typography>
            </Stack>
            <form onSubmit={handleSubmit(handleFormSubmit)} className={classes.getSignupFormStyles}>
                <Grid container rowSpacing={2} columnSpacing={1}>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Stack>
                            <TextField
                                placeholder="Enter your email"
                                variant="outlined"
                                type="email"
                                value={email}
                                required
                                {...register("email", { required: true })}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                className={classes.root}
                                InputProps={{ className: classes.input }}
                            >
                            </TextField>
                        </Stack>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <Stack>
                            <OutlinedInput
                                placeholder="Create password"
                                variant="outlined"
                                type={isPasswordVisible ? "text" : "password"}
                                value={password}
                                required
                                {...register("password", {
                                    required: true,
                                    minLength: 8,
                                    maxLength: 20,
                                })}
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                }}
                                endAdornment={
                                    <InputAdornment position="end">
                                      <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handlePasswordVisibility}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                      >
                                        {isPasswordVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                      </IconButton>
                                    </InputAdornment>
                                }
                                sx={{
                                    "&.MuiOutlinedInput-root": {
                                        background:"#F7F7F7",
                                        fontSize:"1rem",
                                        '& fieldset': {
                                            border:'none',
                                        },
                                        '&:hover fieldset': {
                                            border: 'none',
                                        },
                                        "&.MuiInputBase-root.Mui-focused fieldset": {
                                            border: '1px solid #ef5d36',
                                        },
                                    },
                                    "&.MuiFormLabel-root": {
                                        color:"green !important",
                                        fontSize:"1rem",
                                        "&.MuiFormLabel-root.Mui-focused": {
                                            color: '#ef5d36',
                                        },
                                    },
                                    "& .MuiOutlinedInput-input": {
                                        color:"#232229 !important",
                                    },
                                }}
                            />
                        </Stack>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <motion.div
                            initial={{ scale: 1 }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration:0.1 }}
                        >
                            <CommonButton
                                children="Login"
                                customStyles={{
                                    width:"100% !important",
                                    height:"40px",
                                    borderRadius:"4px",
                                    border:"1px solid #ef5d36",
                                    color:"#ef5d36",
                                    "&:hover": {
                                        background:"#ef5d36",
                                        border:"none",
                                        color:"#FFF",
                                    },
                                    "&:focus": {
                                        outline:"none",
                                    },
                                }}
                                type="submit"
                            />
                        </motion.div>
                    </Grid>
                </Grid>
            </form>
            <Box className={classes.getLinkContStyles}>
                <Typography className={classes.getActionTextOneStyles}>Don't have an account?</Typography>
                <Link
                    to="/signup"
                    className={classes.getLinkStyles}
                >
                    &nbsp;Signup
                </Link>
            </Box>
            {
                isLoading
                ?
                <Loader />
                :
                <></>
            }
        </Box>
    );
}

export default LoginForm;