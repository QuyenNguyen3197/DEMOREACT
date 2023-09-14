import './style.css';
import {useState} from "react";

function Sum(){
    const [soA, setSoA] = useState(0)
    const [soB, setSoB] = useState(0)
    const [total, setTotal] = useState(0)

    function handleAChange(e){
        setSoA(e.target.value)
    }

    function handleBChange(e){
        setSoB(e.target.value)
    }

    function Total(e){
        setTotal(Number(soA) + Number(soB))
    }

    return(
        <div>
            <form>
                <input type='number' onChange={handleAChange}/>
                <input type='number' onChange={handleBChange}/>
                <button onClick={Total}>Tinh Tong</button>
                <p>{soA} + {soB} = {total}</p>
            </form>
        </div>
    )
}

export default Sum;