
import Background from "./background/background";
import './styles.css'
import CardContainer from "./cards/cardsContainer";

export default function Home() {
   
    return (
        <div className="margin">
            <Background></Background>
            <CardContainer></CardContainer>
        </div>
        );
}