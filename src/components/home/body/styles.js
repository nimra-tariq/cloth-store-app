import { withTheme } from "@emotion/react";
import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
    bodyImg: {
        maxWidth: "100%",
        height: "auto",
    },
    tagLine:{
        color:"#233dff"
    }
}))