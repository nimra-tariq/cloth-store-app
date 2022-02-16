import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
    selectCountry: {
        fontSize: '0.6em',
        padding: '10px'
    },
    errorColor: {
        color: 'red'
    },
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
    title: {
        color: "#233dff",
        marginTop: "20px",
        marginBottom: "20px"
    },
    cartIcon: {
        color: "#233dff",
        border: '2px solid',
        borderRadius: '26px',
        boxShadow: '0px 10px 7px #c5c1c1c9, 0px 0px 7px grey',
        padding: '10px',
        cursor: 'pointer',
    },
    cartDiv: {
        margin: "12px"
    },
    btnMargin: {
        marginTop: '15px'
    },
    btn: {
        color: "#ffffff",
        backgroundColor: "#233dff",
        boxShadow: '0px 8px 10px #8080806b',
        fontSize: '1.1em',
        '&:hover': {
            cursor: "pointer",
            color: "#233dff",
            backgroundColor: '#d4ebff45'
        }
    },
    list:{
        marginTop: '15px',
        display:'flex',
    }
}))