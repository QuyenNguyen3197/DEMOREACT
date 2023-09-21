import "./style.css";
import React, {useState, useEffect} from "react";
import TextField from '@mui/material/TextField';

function SimpleRandom(){
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(0);
    const [random, setRandom] = useState();

    function handleMinChange (event){
        const value = event.target.value
        setMin(Number(value))
        };
    
    const handleMaxChange = (event) => { 
        setMax(Number(event.target.value))
    
        };

    function handleRandomChange(){
        setRandom(Math.floor(Math.random() * (max - min + 1) + min));
        };

    useEffect(() => {
        handleRandomChange();
    }, []);


    return(
        <div className='wrapper-random-number'>
            <div className='wrapper-first-row'>
                <p className='random-result'>
                    {random}
                </p>
                <div className='wrapper-min-max'>
                    <TextField className='wrapper-min' label="Min" variant="standard"  onChange={handleMinChange} />
                    <TextField className='wrapper-max' label="Max" variant="standard"  onChange={handleMaxChange} />
                </div>
            </div>
            <button className='random-button' onClick={handleRandomChange}>GENERATE</button>
        </div>
    )
}

export default SimpleRandom;