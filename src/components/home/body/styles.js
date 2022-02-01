import { withTheme } from "@emotion/react";
import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
   
    tagLine:{
        color:"white"
    },
    bodyBgImg:{
        backgroundImage: 'linear-gradient(rgb(1 3 20 / 40%),rgb(0 0 0 / 21%))'+','+`url(${"bodyImg.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        color:'#233dff',
        maxWidth: "100%",
        height: "80vh",
        position:"relative"
        
    },
    paragraph:{
        color:"white"
    },
    textContainer:{
        position:"absolute",
        top:"0",
        right:"0",
        margin:"auto",
        bottom:"0",
        left:"0",
        width:"fit-content",
        height:"fit-content"
    }
}))
// rgb(60 83 253 / 37%),rgb(0 0 0 / 21%))