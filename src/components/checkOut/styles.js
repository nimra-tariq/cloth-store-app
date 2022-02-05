import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
    selectCountry:{
        fontSize:'0.6em',
        padding:'10px'
    },
    errorColor:{
        color:'red'
    }
}))