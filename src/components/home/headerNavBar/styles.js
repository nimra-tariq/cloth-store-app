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
}))