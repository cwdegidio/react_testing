import React, {useEffect, useState} from 'react';
import './Wrapper.css';
import AdviceBox from "./AdviceBox";
import RefreshAdvice from "./RefreshAdvice";
import useForm from "./useForm";

function Wrapper(props) {
    const [advice, setAdvice] = useState("");

    const {render, displayName, nameHidden} = useForm();

    const fetchData = async () => {
        const url = "https://api.adviceslip.com/advice";

        try {
            const response = await fetch(url);
            const json = await response.json();
            setAdvice(json.slip.advice);

        } catch(e) {
            console.log(`Error: ${e}`)
        }
    }

    const handleClick = () => {
        fetchData();
    }

    useEffect( () => {
        fetchData();
    }, []);


    return (
        <div className="wrapper">
            <p style={nameHidden ? {display: "none"} : {display: "block"}}>
                {displayName}'s Moment of Zen
            </p>
            {!nameHidden &&
                <AdviceBox advice={advice}/>
            }

            {!nameHidden &&
                <RefreshAdvice onClick={handleClick}/>
            }

            {render}
        </div>
    );
}

export default Wrapper;