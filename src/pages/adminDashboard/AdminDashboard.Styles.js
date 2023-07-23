import { makeStyles } from "tss-react/mui";

export const getAdminDashboardStyles = makeStyles()((theme)=>({
    getGridContStyles: {
        width:"100%",
        height:"95vh",
        border:"none",
        borderRadius:"10px",
        "@media screen and (max-width: 599px)": {
            height:"auto",
        },
    },

    getGridItemOneStyles: {
        background:"#f2f3f9",
        border:"none",
        borderRadius:"10px",
        height:"100%",
        "@media screen and (max-width: 599px)": {
            paddingBottom:"1rem",
        },
    },

    getGridItemOnePointOneStyles: {
        display:"flex",
        justifyContent:"center",
        height:"50%",
    },

    getGridItemOnePointTwoStyles: {
        display:"flex",
        justifyContent:"center",
        height:"50%",
    },

    getGridItemOnePointThreeStyles: {
        display:"flex",
        justifyContent:"center",
        height:"50%",
    },

    getGridItemOnePointFourStyles: {
        display:"flex",
        justifyContent:"center",
        height:"50%",
    },

    getBoxOneStyles: {
        display:"flex",
        background:"#FFF",
        justifyContent:"space-around",
        alignItems:"center",
        width:"90%",
        height:"75%",
        border:"none",
        borderRadius:"10px",
        margin:"1rem 0rem 0rem",
        "@media screen and (max-width: 599px)": {
            padding:"0.5rem 0rem",
        },
    },

    getStackOneStyles: {
        padding:"0.5rem 0rem",
    },

    getTextOneStyles: {
        fontSize:"0.9rem",
        fontFamily: theme.typography.fontFamily,
        fontWeight:"normal",
    },

    getTextTwoStyles: {
        fontSize:"3rem",
        fontFamily: theme.typography.fontFamily,
        fontWeight:500,
        color:theme.palette.action.active,
        "@media screen and (max-width: 599px)": {
            fontSize:"2.5rem",
        },
    },

    getTextThreeStyles: {
        fontSize:"0.9rem",
        fontFamily: theme.typography.fontFamily,
        fontWeight:400,
        textAlign:"center",
        margin:"0.5rem 0.3rem",
    },

    getTextFourStyles: {
        fontSize:"0.9rem",
        fontFamily: theme.typography.fontFamily,
        fontWeight:400,
        textAlign:"center",
        margin:"0.5rem 0.3rem",
    },

    getIconOneStyles: {
        fontSize:"3rem",
        color:"#FFF",
        background:theme.palette.action.active,
        padding:"0.5rem",
        border:"none",
        borderRadius:"35px",
        boxShadow: "rgba(0, 0, 0, 0.25) 0px 5px 15px",
        "@media screen and (max-width: 599px)": {
            fontSize:"2.5rem",
        },
    },

    getBoxTwoStyles: {
        display:"flex",
        background:"#FFF",
        justifyContent:"center",
        width:"90%",
        height:"75%",
        textAlign:"center",
        border:"none",
        borderRadius:"10px",
        margin:"1rem 0rem 0rem",
    },

    getBoxThreeStyles: {
        display:"flex",
        background:"#FFF",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        height:"75%",
        textAlign:"center",
        border:"none",
        borderRadius:"10px",
        margin:"1rem 0rem 0rem",
        "@media screen and (max-width: 899px)": {
            alignItems:"center",
        },
        "@media screen and (max-width: 599px)": {
            padding:"0.5rem 0rem",
        },
    },

    getBoxFourStyles: {
        display:"flex",
        background:"#FFF",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        height:"75%",
        textAlign:"center",
        border:"none",
        borderRadius:"10px",
        margin:"1rem 0rem 0rem",
        "@media screen and (max-width: 899px)": {
            alignItems:"center",
        },
        "@media screen and (max-width: 599px)": {
            padding:"0.5rem 0rem",
        },
    },

    getDownloadButtonsContStyles: {
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        padding:"0.5rem 0rem",
    },

    getGridItemTwoStyles: {
        background:"#f2f3f9",
        border:"none",
        borderRadius:"10px",
        height:"100%",
        "@media screen and (max-width: 899px)": {
            background:"#f2f3f9",
            marginBottom:"1rem",
        },
        "@media screen and (max-width: 599px)": {
            height:"95vh",
        },
    },

    getGridItemTwoPointOneStyles:{
        height:"45%",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        "@media screen and (max-width: 599px)": {
            height:"50%",
        },
    },

    getGridItemTwoPointTwoStyles: {
        height:"55%",
        display:"flex",
        justifyContent:"center",
        padding:"0.75rem 0rem 1rem",
        "@media screen and (max-width: 599px)": {
            height:"50%",
            padding:"2rem 0rem 1rem",
        },
    },

    getStackStyles: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        width:"100%",
        height:"100%",
        overflowX:"hidden",
        overflowY:"scroll",
        "::-webkit-scrollbar": {
            background:"transparent",
            width: "0.65rem",
            "@media screen and (max-width: 899px)": {
                width: "0.6rem",
            },
        },
        "::-webkit-scrollbar-thumb": {
            background:"#ef5d36",
            height:"3rem",
            borderRadius:"0.4rem",
            display:"none",
        },
    },

    getErrorMessageOneStyles: {
        fontSize:"0.9rem",
        fontFamily:theme.typography.fontFamily,
        textAlign:"center !important",
        color:"grey",
        margin:"5rem auto 0rem",
    },

    root: {
        width:"95%",
        margin:"1rem auto 0rem",
        "& .MuiInputBase-root": {
            fontSize:"0.9rem",
            background:"#FFF",
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
        "& .MuiFormLabel-root": {
            fontSize:"1rem",
            "&.MuiFormLabel-root.Mui-focused": {
                color: '#ef5d36',
            },
        },
        "@media screen and (max-width: 899px)": {
            margin:"1rem auto 1rem",
        },
    },
    
    input: {
        "& .MuiInputBase-input": {
            color:"#232229 !important",
        },
    },

    getAddMemberButtonStyles: {
        width:"75% !important",
        height:"40px",
        borderRadius:"4px",
        border:"1px solid #ef5d36",
        color:"#ef5d36",
        transition:"0.25s ease-in",
        fontFamily: "Poppins, sans-serif",
        fontSize:"0.9rem",
        padding:"0.25rem 0.75rem",
        textTransform:"capitalize",
        textDecoration:"none",
        margin:"0.25rem 0rem",
        "&:hover": {
            background:"#ef5d36",
            border:"none",
            color:"#FFF",
        },
        "&:focus": {
            outline:"none",
        },
        "@media screen and (max-width: 399px)": {
            fontSize:"0.8rem",
        },
    },
}));