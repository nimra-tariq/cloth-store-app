import { makeStyles,createStyles } from "@material-ui/core";
export const useStyles=makeStyles(theme=>createStyles({
    box:{
        borderRadius:"10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
    },
    pTitle:{
        color:'#605d5d'
    },
    pPrice:{
        color:"#233dff"
    },
    newArrival:{
        color:"#233dff",
        marginTop:"20px",
        marginBottom:"20px"
    },

}))