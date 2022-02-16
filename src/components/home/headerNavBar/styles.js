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
        padding: '9px 15px',
        borderRadius:'6px',
        "&:hover": {
            backgroundColor: '#d4ebff45'
          }
    },
    pagesColor: {
        color: "#233dff"
    },
    highLightBorder: {
        border: "2px solid",
        color:'black'
    },
    title:{
        color:'#233dff'
    }
}))