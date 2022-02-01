
import { makeStyles, createStyles } from "@material-ui/core";

export const useStyles = makeStyles(theme => createStyles({
   
    tagLine:{ 
        color:"white",
    },
    bodyBgImg:{
        backgroundImage: 'linear-gradient(rgb(1 3 20 / 40%),rgb(0 0 0 / 21%))'+','+`url(${"bodyAbout.jpg"})`,
        backgroundSize: 'cover',
        backgroundPosition: '50%',
        color:'#233dff',
        maxWidth: "100%",
        height: "80vh",
        position:"relative"
        
    },
    paragraph:{
        color: 'white',
        marginTop:'20px'
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
    },
    aboutDiv:{
        background: 'linear-gradient(45deg, #8b868699, transparent)',
        padding:"10%"
    },
    aboutStatement:{
        color:"#233dff"
    },
    aboutParagraph:{
        color:"#342f2f",
        marginTop: '20px',
        fontSize:"1.1rem"

    },
    removePadding:{
        padding:"0px !important" ,
    },
}))
// rgb(60 83 253 / 37%),rgb(0 0 0 / 21%))