import { makeStyles, createStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

export const useStyles = makeStyles(theme => createStyles({
    box: {
        borderRadius: "10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
    },
    pTitle: {
        color: '#605d5d'
    },
    pPrice: {
        color: "#233dff"
    },
    newArrival: {
        color: "#233dff",
        marginTop: "20px",
        marginBottom: "20px"
    },
    cartIcon: {
        color: "#233dff",
        border: '2px solid',
        boxShadow: '0px 10px 7px #c5c1c1c9, 0px 0px 7px grey',
        padding: '20px',
        borderRadius:"6px",
        cursor: 'pointer',
    },
    cartDiv: {
        margin: "12px"
    },
    productImg: {
    },
    btn: {
        color: "#ffffff",
        backgroundColor: "#233dff",
        boxShadow: '0px 8px 10px #8080806b',
        '&:hover': {
            cursor: "pointer",
            color: "#233dff"
        }
    },
    removeIconDiv:{
        boxShadow: '0px 8px 10px #8080806b',
    },
    removeIcon:{
    //    color:'#233dff'
    '&:hover': {
        cursor: "pointer",
        color: "#233dff"
    }
    }
    
}))