import { makeStyles } from "tss-react/mui";

export const getInvitationDialogStyles = makeStyles()((theme)=>({
    getDialogBoxStyles: {
        // background:"grey",
    },

    getDialogTitleStyles: {
        textAlign:"center",
        // background:"orange",
        fontSize: "1.25rem",
        fontFamily: theme.typography.fontFamily,
        "@media screen and (max-width: 532px)": {
            fontSize:"1.10rem",
        },
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

    getMemberCardStyles: {
        minWidth:"100%",
        display:"flex",
        justifyContent:"space-around",
        alignItems:"center",
        // background:"cyan",
        border:"none",
        borderRadius:"5px",
        margin:"0.5rem 0rem",
        padding:"0.25rem 0rem",
        cursor:"pointer",
        transition:"0.20s ease-in-out",
        "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            transform: "scale(1.015)",
        }
    },

    getDialogActionStyles: {
        // background:"wheat",
    },

    getMemberNameStyles: {
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        color: "#232229",
    },

    getMemberEmailStyles: {
        fontSize: theme.typography.fontSize,
        fontFamily: theme.typography.fontFamily,
        color: "#232229",
    },

    root: {
        width:"100%",
        marginTop:"1rem",
        "& .MuiInputBase-root": {
            fontSize:"0.9rem",
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
}));