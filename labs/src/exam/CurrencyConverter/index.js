import './style.css';
import {useState} from "react";

import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';


function CurrentConvert(){
    const [from, setFrom] = useState();
    const [to, setTo] = useState();
    const [soLuong, setSoLuong] = useState();
    const [ketQua, setKetQua] = useState(0);



    const handleFromChange = (event) => {
        setFrom(event.target.value);
        };
    
    const handleToChange = (event) => {
        setTo(event.target.value);
        };

    const handleSoLuongChange = (event) => {
        setSoLuong(event.target.value);
        };

    const handleQuyDoiClick = () => {
        setKetQua((soLuong*from)/to);
        };


    console.log({soLuong,from,to});

    return(
        <div>
            <form>


      <TextField id="soluong" label="So luong" onChange={handleSoLuongChange} />

                    <Select
                         labelId="demo-simple-select-label"
                         id="from"
                         value={from}
                         label="From"
                         onChange={handleFromChange}
                    >
                    <MenuItem value={1}>Viet Nam Dong</MenuItem>
                    <MenuItem value={24}>USD</MenuItem>
                    <MenuItem value={25}>Euro</MenuItem>
        </Select>
    
        <Select
                         labelId="demo-simple-select-label"
                         id="to"
                         value={to}
                         label="To"
                         onChange={handleToChange}
                    >
                    <MenuItem value={1}>Viet Nam Dong</MenuItem>
                    <MenuItem value={24}>USD</MenuItem>
                    <MenuItem value={25}>Euro</MenuItem>
        </Select>

        <Button id='ketqua' variant="contained" onClick={handleQuyDoiClick}>Quy đổi</Button>
        <p>
            {ketQua}
        </p>

            </form>
        </div>
    )
}

export default CurrentConvert;