import { makeStyles } from "tss-react/mui";

export const getButtonStyles = makeStyles()((theme, customStyles) => ({
    getCommonButtonStyles: {
        transition:"0.25s ease-in",
        border:"none",
        fontFamily: "Poppins, sans-serif",
        fontSize: theme.typography.fontSize,
        padding:"0.25rem 0.75rem",
        textTransform:"none",
        ...customStyles,
    },
}));