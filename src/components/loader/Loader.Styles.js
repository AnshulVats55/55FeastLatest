import { makeStyles } from "tss-react/mui";

export const getCircularProgressStyles = makeStyles()((theme)=>({
    getLoaderContStyles: {
        background:"#000",
        width:"100%",
        height:"100%",
        position:"absolute",
        top:"0",
        left:"0",
        opacity:"0.8",
        zIndex:"1",
    },

    getLoaderStyles: {
        color:"#ef5d36",
        background:"black",
        height:"4px",
    },
}));