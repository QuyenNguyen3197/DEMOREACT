import {useState} from "react";

function CurrentConvert(){
    const [soTien, setSoTien] = useState(0);

    function handleSoTienChange(e){
        setSoTien(e.target.value)
    }

    return(
        <div>
            <form>
                <input type='number' onChange={handleSoTienChange}></input>
                <span>VND - Vietnamese Dong</span>
                <input></input>
                <button ></button>
            </form>
        </div>
    )
}