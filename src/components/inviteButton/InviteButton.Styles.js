import { makeStyles } from "tss-react/mui";

export const getInviteButtonStyles = makeStyles()((theme, styles)=>({
    getButtonStyles: {
        width:"100%",
        borderRadius:"4px",
        border:"1px solid #ef5d36",
        color:"#ef5d36",
        transition:"0.25s ease-in",
        fontFamily: "Poppins, sans-serif",
        fontSize: "0.9rem",
        padding:"0.2rem 0rem",
        textTransform:"capitalize",
        textDecoration:"none",
        textAlign:"center",
        "&:hover": {
            background:"#ef5d36",
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
        ...styles,
    },
}));