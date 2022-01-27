import { makeStyles,createStyles } from "@material-ui/core";
export const useStyles=makeStyles(theme=>createStyles({
    box:{
        borderRadius:"10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
    },
    pTitle:{
        color:'brown'
    },
    pPrice:{
        color:"#233dff"
    }
}))