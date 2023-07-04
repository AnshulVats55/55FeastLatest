import { makeStyles } from "tss-react/mui";

export const getAuthmodalStyles = makeStyles()(()=>({
    getMainContStyles: {
        // background:"pink",
        width:"100%",
        height:"100vh",
        position:"absolute",
        top:"0vh",
        left:"0vh",
    },

    getGridContStyles: {
        // background:"green",
        height:"100%",
    },

    getGridItemOneStyles: {
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"none",
    },

    getGridItemTwoStyles: {
        background:"#ef5d36",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        border:"none",
        borderTopLeftRadius:"4rem",
        borderBottomLeftRadius:"4rem",
        "@media screen and (max-width: 599px)": {
            display:"none",
        },
    },
}));