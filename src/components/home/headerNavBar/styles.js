import { withTheme } from "@emotion/react";
import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
    logo: {
        maxWidth: "100%",
        height: "auto",
    },
    appBar: {
        backgroundColor: "#ffffff",
    },
    pages: {
        color: "#233dff",
        boxShadow: '0px 8px 10px #8080806b',
    },
    pagesColor: {
        color: "#233dff"
    },
    highLightBorder: {
        border: "2px solid"
    }
}))