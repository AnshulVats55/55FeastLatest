import { makeStyles } from "tss-react/mui";

export const getInviteMemberCardStyles = makeStyles()((theme)=>({
    getMemberCardStyles: {
        minWidth:"100%",
        border:"none",
        borderRadius:"5px",
        margin:"0.5rem 0rem",
        cursor:"pointer",
        "&:hover": {
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
            transform: "scale(1.015)",
        },
        // background:"pink",
    },

    getGridContStyles: {
        width:"100%",
        // background:"orange",
        padding:"0.6rem 0rem",
    },


    getMemberNumberContStyles: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // background:"green",
        "@media screen and (max-width: 599px)": {
            display:"none",
        },
    },

    getMemberNumberStyles: {
        fontSize:"0.9rem",
        fontFamily: theme.typography.fontFamily,
        "@media screen and (max-width: 615px)": {
            fontSize:"0.8rem",
        },
    },

    getMemberNameContStyles: {
        // background:"red",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
    },

    getMemberNameStyles: {
        fontSize: "0.9rem",
        fontFamily: theme.typography.fontFamily,
        color: "#232229",
        marginLeft:"0.5rem",
        "@media screen and (max-width: 615px)": {
            fontSize:"0.9rem",
        },
    },

    getMemberEmailContStyles: {
        // background:"brown",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
        "@media screen and (max-width: 599px)": {
            display:"none",
        },
    },

    getMemberEmailStyles: {
        fontSize: "0.9rem",
        fontFamily: theme.typography.fontFamily,
        color: "#232229",
        marginLeft:"0.5rem",
        "@media screen and (max-width: 615px)": {
            fontSize:"0.8rem",
        },
    },

    getInviteButtonContStyles: {
        // background:"cyan",
        // width:"15%",
    },
}));