import { makeStyles } from "tss-react/mui";

export const getHomePageStyles = makeStyles()((theme)=>({
    getGridContStyles: {
        // background:"green",
        width:"100%",
        height:"100%",
        display:"flex",
    },

    getGridItemOneStyles: {
        // background:"orange",
        height:"90vh",
        "@media screen and (max-width: 544px)": {
            height:"65vh",
        },
        "@media screen and (max-width: 399px)": {
            height:"50vh",
        },
    },

    getHomeTextContStyles: {
        width:"100%",
        // background:"cyan",
        display:"flex",
        flexDirection:"column",
        justifyContent:"flex-start",
        "@media screen and (max-width:899px)": {
            justifyContent:"center",
            alignItems:"center",
            padding:"4rem 0rem",
        },
        "@media screen and (max-width:599px)": {
            padding:"4.5rem 0rem",
        },
        "@media screen and (max-width:399px)": {
            padding:"0rem",
            height:"100%",
        },
    },

    getHomeTextOneStyles: {
        fontSize:"4rem",
        fontFamily: theme.typography.fontFamily,
        marginLeft:"5rem",
        marginTop:"9.50rem",
        "@media screen and (max-width: 1287px)": {
            fontSize:"3.75rem",
        },
        "@media screen and (max-width: 1180px)": {
            fontSize:"3.25rem",
        },
        "@media screen and (max-width: 1072px)": {
            fontSize:"3rem",
        },
        "@media screen and (max-width: 964px)": {
            fontSize:"2.75rem",
        },
        "@media screen and (max-width:899px)": {
            marginLeft:"0px",
            fontSize:"3.5rem",
            marginTop:"0rem",
        },
        "@media screen and (max-width:544px)": {
            fontSize:"2.75rem",
        },
        "@media screen and (max-width:463px)": {
            fontSize:"2.25rem",
        },
        "@media screen and (max-width:409px)": {
            fontSize:"1.75rem",
        },
    },

    getHomeTextTwoStyles: {
        fontSize:"5rem",
        fontFamily: theme.typography.fontFamily,
        marginLeft:"5rem",
        "@media screen and (max-width: 1287px)": {
            fontSize:"4.5rem",
        },
        "@media screen and (max-width: 1180px)": {
            fontSize:"4rem",
        },
        "@media screen and (max-width: 1072px)": {
            fontSize:"3.5rem",
        },
        "@media screen and (max-width: 964px)": {
            fontSize:"3rem",
        },
        "@media screen and (max-width:899px)": {
            marginLeft:"0px",
            fontSize:"4.75rem",
        },
        "@media screen and (max-width:544px)": {
            fontSize:"4rem",
        },
        "@media screen and (max-width:463px)": {
            fontSize:"3.5rem",
        },
        "@media screen and (max-width:409px)": {
            fontSize:"2.75rem",
        },
    },

    getHomeTextThreeStyles: {
        fontSize:"1rem",
        fontFamily: theme.typography.fontFamily,
        marginLeft:"5rem",
        maxWidth:"500px",
        "@media screen and (max-width:899px)": {
            marginLeft:"0px",
            textAlign:"center",
        },
        "@media screen and (max-width:409px)": {
            fontSize:"0.90rem",
        },
    },

    getGridItemTwoStyles: {
        // background:"lightgreen",
        height:"90vh",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        "@media screen and (max-width:899px)": {
            height:"100vh",
        },
        "@media screen and (max-width:544px)": {
            height:"85vh",
        },
        "@media screen and (max-width:409px)": {
            alignItems:"flex-start",
            height:"auto",
        },
    },

    getHomeImageContStyles: {
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // background:"blue",
    },

    getHomeImageStyles: {
        width:"70%",
        "@media screen and (max-width: 899px)": {
            width:"60%",
            marginTop:"25px",
        },
        "@media screen and (max-width: 599px)": {
            width:"75%",
        },
        "@media screen and (max-width:409px)": {
            width:"85%",
        },
    },

    getGridItemThreeStyles: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        // background:"pink",
        padding:"2rem 0rem",
    },

    getSwiperContStyles: {
        width:"100%",
        background:"whitesmoke",
        padding:"1rem 0rem",
        borderRadius:"10px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px",
    },

    getBookYourMealButtonStyles:{
        minWidth:"25% !important",
        height:"40px",
        borderRadius:"4px",
        border:"1px solid #ef5d36",
        color:"#ef5d36",
        margin:"1.5rem 0rem 0rem 5rem",
        transition:"0.25s ease-in",
        fontFamily: "Poppins, sans-serif",
        fontSize: theme.typography.fontSize,
        padding:"0.25rem 0.75rem",
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
        "@media screen and (max-width: 544px)": {
            fontSize:"0.9rem",
        },
        "@media screen and (max-width:409px)": {
            fontSize:"0.85rem",
            padding:"0.20rem 0.60rem",
        },
        "@media screen and (max-width:360px)": {
            padding:"0.15rem 0.50rem",
            height:"35px",
        },
    },

    getInviteButtonStyles: {
        minWidth:"25% !important",
        height:"40px",
        borderRadius:"4px",
        border:"none",
        color:"#FFF",
        background:"#ef5d36",
        margin:"1.5rem 0rem 0rem 1.5rem",
        transition:"0.25s ease-in",
        fontFamily: "Poppins, sans-serif",
        fontSize: theme.typography.fontSize,
        padding:"0.25rem 0.75rem",
        textTransform:"capitalize",
        "&:hover": {
            background:"transparent",
            border:"1px solid #ef5d36",
            color:"#ef5d36",
        },
        "&:focus": {
            outline:"none",
        },
        "@media screen and (max-width: 899px)": {
            marginLeft:"1.5rem",
        },
        "@media screen and (max-width: 544px)": {
            fontSize:"0.9rem",
        },
        "@media screen and (max-width:409px)": {
            fontSize:"0.85rem",
            padding:"0.20rem 0.60rem",
        },
        "@media screen and (max-width:360px)": {
            padding:"0.15rem 0.50rem",
            height:"35px",
        },
    },
}));