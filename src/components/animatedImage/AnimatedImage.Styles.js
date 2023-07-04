import { makeStyles } from "tss-react/mui";

export const getAnimatedImageStyles = makeStyles()(()=>({
    getAnimatedImageContStyles: {
        width:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    getAnimatedImageStyles: {
        width:"90%",
    },
}))