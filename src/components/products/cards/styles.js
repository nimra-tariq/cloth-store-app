import { makeStyles,createStyles } from "@material-ui/core";
import { Transform } from "@material-ui/icons";
import useHistory from 'react-router-dom'
export const useStyles=makeStyles(theme=>createStyles({
    box:{
        borderRadius:"10px",
        boxShadow: "0px 8px 10px #8080806b, 0px 8px 10px #5c5b5b6b",
        '&:hover': {
            border:"2px solid #233dff",
            transform: 'scale(1.1)',
            transition: 'all .5s ease-in-out',
        }
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
   cartIcon:{
    color:"#233dff",
    border: '2px solid',
    borderRadius: '26px',
    boxShadow: '0px 10px 7px #c5c1c1c9, 0px 0px 7px grey',
    padding: '10px',
    cursor: 'pointer',
   },
   cartDiv:{
       margin:"12px"
   },
   productImg:{
    '&:hover': {
        cursor:"pointer",
    }
   }
}))