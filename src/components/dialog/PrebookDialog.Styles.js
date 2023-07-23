import { makeStyles } from "tss-react/mui";

export const getPrebookDialogStyles = makeStyles()((theme)=>({
    getDialogBoxStyles: {
        // background:"grey",
    },

    getDialogTitleStyles: {
        textAlign:"center",
        // background:"orange",
        fontSize: "1.25rem",
        fontFamily: theme.typography.fontFamily,
    },

    getDialogContentStyles: {
        // background:'pink',
        border:"none",
    },

    getDialogContentTextStyles: {
        // background:"green",
        border:"none",
        padding:"0.5rem 0rem",
        textAlign:"center",
        "&:focus": {
            outline:"none",
        },
        fontSize: theme.typography.fontSize,
    },

    getGridContStyles: {
        width:"100%",
        margin:"1rem 0rem 0rem",
    },
    
    getGridItemStyles: {
        // background:"pink",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
    },

    root: {
        "& .MuiInputBase-root": {
            fontSize:"1rem",
            background:"#F7F7F7",
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
    },

    input: {
        "& .MuiInputBase-input": {
            color:"#232229 !important",
        },
    },

    getDialogActionStyles: {
        // background:"wheat",
    },

    getCloseButtonStyles: {
        width:"15%",
        height:"35px",
        borderRadius:"4px",
        border:"1px solid #ef5d36",
        color:"#ef5d36",
        margin:"1.5rem 0rem 0rem 5rem",
        transition:"0.25s ease-in",
        fontFamily: "Poppins, sans-serif",
        fontSize: "0.9rem",
        padding:"0.20rem 0.25rem",
        textTransform:"capitalize",
        textDecoration:"none",
        "&:hover": {
            background:"#ef5d36",
            border:"none",
            color:"#FFF",
        },
        "&:focus": {
            outline:"none",
        },
        "@media screen and (max-width: 899px)": {
            marginLeft:"0px",
        },
        "@media screen and (max-width:409px)": {
            fontSize:"0.9rem",
        },
    },

    getDatePickerStyles: {
        // background:"pink",
    },
}));