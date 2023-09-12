import './style.css';
import {useState} from "react";

function Sum(){
    const [soA, setSoA] = useStage(0)

    function handleChange(e){
        setSoA(e.target.value)
    }
    
    return(
        <div>
            <form>
                <input type='number' id='num1'></input>
                <input type='number' id='num2'></input>
                <button type='button' id='sum' onclick='TinhTong()'>Tinh Tong</button>
            </form>
        </div>
    )
}

export default Sum;