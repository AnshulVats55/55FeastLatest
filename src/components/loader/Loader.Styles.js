import { makeStyles } from "tss-react/mui";

export const getCircularProgressStyles = makeStyles()((theme)=>({
    getLoaderContStyles: {
        backgroundColor:"#000 !important",
        color:"#ef5d36 !important",
        width:"100%",
        height:"100%",
        position:"absolute",
        top:"0",
        left:"0",
        zIndex:"1",
        opacity:"0.8",
    },

    getLoaderStyles: {
        color:"#ef5d36",
        height:"4px",
    },
}));