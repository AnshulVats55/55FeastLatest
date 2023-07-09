import { makeStyles } from "tss-react/mui";

export const getCircularProgressStyles = makeStyles()((theme)=>({
    getLoaderContStyles: {
        background:"transparent",
        minWidth:"100% !important",
        minHeight:"100% !important",
        position:"absolute",
        top:"0",
        left:"0",
        zIndex:"1",
    },

    getLoaderStyles: {
        color:"#ef5d36",
        background:"black",
        height:"4px",
    },
}));