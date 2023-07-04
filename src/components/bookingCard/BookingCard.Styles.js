import { makeStyles } from "tss-react/mui";

export const getBookingCardStyles = makeStyles()((theme)=>({
    getCardStyles: {
        width:"80%",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        border:"none",
        borderRadius:"10px",
        margin:"2rem 0rem",
        cursor:"pointer",
        "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
            borderBottom:"2px solid #ef5d36",
        },
        "@media screen and (max-width: 1099px)": {
            width:"90%",
        },
        "@media screen and (max-width: 899px)": {
            width:"70%",
        },
        "@media screen and (max-width: 599px)": {
            width:"80%",
            margin:"2rem 0rem 1rem 0rem",
        },
        "@media screen and (max-width: 399px)": {
            width:"85%",
        },
    },

    getImageSkeletonStyles: {
        width:"100%",
        borderRadius:"0px"
    },

    getMemberPictureStyles: {
        width:"100%",
        borderTopLeftRadius:"10px",
        borderTopRightRadius:"10px",
    },

    getHeadingStyles: {
        fontSize:"1.5rem",
        fontFamily: theme.typography.fontFamily,
        marginTop:"1rem",
        textAlign:"center",
        "@media screen and (max-width: 346px)": {
            fontSize:"1.35rem",
        },
    },

    getCaptionStyles: {
        fontSize:"0.9rem",
        textAlign:"center",
        marginTop:"0.25rem",
        textAlign:"center",
        "@media screen and (max-width: 1275px)": {
            fontSize:"0.85rem",
        },
        "@media screen and (max-width: 346px)": {
            fontSize:"0.80rem",
        },
    },

    getActionButtonStyles: {

    },
}));