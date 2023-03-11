import { Configuration, OpenAIApi } from "openai"
import { useEffect } from "react";
import { fetchData } from "../utils";

const WelcomeModal = () => {

    useEffect( () => {
        fetchData("Math", "7");
    }, [])
    
    return (
        <div>
            
        </div>
    )
}

export default WelcomeModal