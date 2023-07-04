import { makeStyles } from "tss-react/mui";

export const getMealBookingStyles = makeStyles()((theme)=>({
    getGridContStyles: {
        // background:"green",
        width:"100%",
    },

    getGridItemStyles: {
        // background:"orange",
        display:"flex",
        justifyContent:"center",
    },
}));