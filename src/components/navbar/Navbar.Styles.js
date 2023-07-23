import { makeStyles } from "tss-react/mui";

export const getNavbarStyles = makeStyles()((theme)=>({
    getAppbarStyles: {
        width:"100%",
        boxShadow:"none",
        position:"fixed",
        top:"0px",
        left:"0px",
        background:"none",
        height:"10vh",
        "@media screen and (max-width: 399px)": {
            height:"8vh"
        },
    },

    getToolbarContStyles: {
        width:"100%",
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
    },

    getToolbarStyles: {
        display:"flex",
        justifyContent:"space-between",
        alignItems:"center",
        width:"100%",
        height:"10vh",
        background:"#232229",
        borderBottomLeftRadius:"1.2rem",
        borderBottomRightRadius:"1.2rem",
        "@media screen and (max-width: 600px)": {
            borderBottomLeftRadius:"1rem",
            borderBottomRightRadius:"1rem",
        },
        "@media screen and (max-width: 399px)": {
            height:"8vh"
        },
    },

    getHamburgerIconContStyles: {
        "&:focus": {
            outline:"none",
        },
    },

    getHamburgerIconStyles: {
        "@media screen and (max-width: 599px)": {
            fontSize:"1.25rem !important",
        },
    },

    getBrandLogoStyles: {
        fontFamily: theme.typography.fontFamily,
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: '#FFF',
        textDecoration: 'none',
        fontSize:"1.5rem",
        "&:hover": {
            color:"#FFF",
        },
        "@media screen and (max-width: 399px)": {
            maxWidth:"150px",
        },
        // background:"pink",
    },

    getNavLinksContStylesOne: {
        width: 225,
        background:"#232229",
        height:"100%",
        color:"#FFF",
        "@media screen and (max-width: 600px)": {
            width: 200,
        },
        "@media screen and (max-width: 360px)": {
            width: 175,
        },
    },

    getNavLinksStylesOne: {
        position: "relative",
        textDecoration:"none",
        fontFamily: theme.typography.fontFamily,
        color:"#FFF",
        fontSize:theme.typography.fontSize,
        letterSpacing:"1px",
        padding:"0.25rem 0.75rem",
        transition:"0.2s ease-in-out",
        borderRadius:"4px",
        "&::before": {
            content: '""',
            position: "absolute",
            bottom: "-2px",
            left: 0,
            width: "100%",
            height: "2px",
            backgroundColor: "#ef5d36",
            transform: "scaleX(0)",
            transition: "transform 0.3s ease",
            borderRadius:"1px",
        },
        "&:hover::before": {
            transform: "scaleX(1)",
        },
    },

    getNavLinksContStylesTwo: {
        justifyContent:"space-between",
        alignItems:"center",
        width:"30%",
        flexGrow: 0.1,
        "@media screen and (max-width: 1069px)": {
            flexGrow:"0.20",
        },
        "@media screen and (max-width: 1020px)": {
            flexGrow:"0.25",
        },
        "@media screen and (max-width: 978px)": {
            flexGrow:"0.35",
        },
    },

    getNavLinksStylesTwo: {
        width:"100%",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        "@media screen and (max-width: 899px)": {
            display:"none",
        },
    },

    getListItemStylesOne: {
        marginTop:"2rem",
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
    },

    getListItemStylesTwo: {
        display:"flex",
        justifyContent:"flex-start",
        alignItems:"center",
    },

    getCloseIconStylesOne: {
        position:"absolute",
        top:"0.5rem",
        right:"0.5rem",
        cursor:"pointer",
    },

    getCloseIconStylesTwo: {
        position:"absolute",
        top:"0.5rem",
        left:"0.5rem",
        cursor:"pointer",
    },

    getListItemIconStyles: {
        fontSize:"1.5rem",
        color:"#FFF",
        "@media screen and (max-width: 360px)": {
            fontSize:"1rem",
        },
    },

    getListItemTextStylesOne: {
        fontSize:"1rem",
        color:"#FFF",
        margin:"0rem 0.5rem",
        "@media screen and (max-width: 360px)": {
            fontSize:"0.85rem",
        },
    },

    getListItemTextStylesTwo: {
        fontSize:"1rem",
        color:"#FFF",
        margin:"0rem 0.5rem",
        "@media screen and (max-width: 360px)": {
            fontSize:"0.85rem",
        },
    },

    getCurrentUserNameStyles: {
        fontFamily: theme.typography.fontFamily,
        color:"#FFF",
        fontSize:"1rem",
    },
}));