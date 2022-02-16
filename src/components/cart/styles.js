import { makeStyles, createStyles } from "@material-ui/core";

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
    title: {
        color: "#233dff",
        margin: '15px 0px'
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
        borderRadius: "6px",
        cursor: 'pointer',
        '&:hover': {
            backgroundColor: '#d4ebff45',
        }
    },
    cartDiv: {
        margin: "20px",
        padding: '10px',
    },
    productImg: {
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
    removeIconDiv: {
        boxShadow: '0px 8px 10px #8080806b',
    },
    removeIcon: {
        '&:hover': {
            cursor: "pointer",
            color: "#233dff"
        }
    },
    sBox: {
        color: '#233dff',
        padding: '4px 10px',
        cursor: 'pointer'
    },
    items: {
        padding: '10px 10px',
    },
    container: {
        margin: '10px',
        marginTop: '30px',
        padding: '10px',
    },
    btnMargin: {
        marginTop: '15px'
    },
    formContainer: {
        margin: '10px',
        borderRadius: "10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
        marginTop: '30px ',
        padding: '15px',
    },
    placeOrder: {
        margin: '10px',
        borderRadius: "10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
        marginTop: '30px',
        padding: '0px',
    },
    topMargin: {
        marginTop: '30px',
    },
    goBack: {
        color: '#d4ebff45',
        cursor: "pointer"
    }
}))