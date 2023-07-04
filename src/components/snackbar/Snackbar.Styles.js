import { makeStyles } from "tss-react/mui";

export const getSnackbarStyles = makeStyles()((theme)=>({
    getSnackbarStyles: {
        width:"30%",
        borderRadius:"5px",
        "@media screen and (max-width: 1289px)": {
            width:"33%",
        },
        "@media screen and (max-width: 1172px)": {
            width:"36%",
        },
        "@media screen and (max-width: 1074px)": {
            width:"40%",
        },
        "@media screen and (max-width: 967px)": {
            width:"43%",
        },
        "@media screen and (max-width: 845px)": {
            width:"45%",
        },
        "@media screen and (max-width: 807px)": {
            width:"50%",
        },
        "@media screen and (max-width: 727px)": {
            width:"55%",
        },
        "@media screen and (max-width: 661px)": {
            width:"62%",
        },
        "@media screen and (max-width: 599px)": {
            width:"100%",
            left:"0",
        },
    },

    getAlertStyles: {
        borderRadius:"5px",
        width:"100%",
    },

    getSnackbarTextStyles: {
        color:'white',
        fontSize:"1rem",
        fontFamily: theme.typography.fontFamily,
        "@media screen and (max-width: 899px)": {
            fontSize:"0.9rem",
        },
        "@media screen and (max-width: 599px)": {
            fontSize:"0.85rem",
        },
        "@media screen and (max-width: 523px)": {
            fontSize:"0.8rem",
        },
        "@media screen and (max-width: 399px)": {
            fontSize:"0.75rem",
        },
    },
}));