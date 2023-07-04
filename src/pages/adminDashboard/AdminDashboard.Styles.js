import { makeStyles } from "tss-react/mui";

export const getAdminDashboardStyles = makeStyles()((theme)=>({
    getGridContStyles: {
        width:"100%",
        height:"90vh",
        // background:"green",
    },

    getGridItemOneStyles: {
        display:"flex",
        justifyConten:"center",
        // flexDirection:"column",
        // alignItems:"center",
        background:"wheat",
        height:"100%",
    },

    getGridItemTwoStyles: {
        display:"flex",
        flexDirection:"column",
        justifyConten:"center",
        // alignItems:"center",
        // background:"pink",
        height:"100%",
    },

    getStackStyles: {
        height:"100%",
        overflowY:"scroll",
        // background:"violet",
    },

    root: {
        width:"100%",
        marginTop:"1rem",
        "& .MuiInputBase-root": {
            fontSize:"0.9rem",
            background:"#F7F7F7",
            '& fieldset': {
                border:'none',
            },
            '&:hover fieldset': {
                border: 'none',
            },
            "&.MuiInputBase-root.Mui-focused fieldset": {
                border: '1px solid #ef5d36',
            },
        },
        "& .MuiFormLabel-root": {
            fontSize:"1rem",
            "&.MuiFormLabel-root.Mui-focused": {
                color: '#ef5d36',
            },
        },
    },
    
    input: {
        "& .MuiInputBase-input": {
            color:"#232229 !important",
        },
    },

    getTotalCountContStyles: {
        background:"#f5f5f5",
        border:"none",
        borderRadius:"10px",
        width:"100%",
        margin:"1rem 1rem 1rem 0rem",
        padding:"1rem",
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
    },

    getTotalMemberStyles: {
        background:"orange",
        minWidth:"175px",
        minHeight:"175px",
        border:"none",
        borderRadius:"90px",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },

    getMemberCountContStyles: {
        // background:"cyan",
        marginTop:"1rem",
    },

    getMemberCountStyles: {
        textAlign:"center",
        fontSize:theme.typography.fontSize,
        fontFamily:theme.typography.fontFamily,
    },

    getRightGridContStyles: {
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
}));