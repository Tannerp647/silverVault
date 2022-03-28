import './main.css'
import ase from './images/ase.jpeg'
import React, { useState } from 'react';


export const SilverCoin = () => {


    const [total, setTotal] = useState(0);
    const [addNum, setAddNum] = useState('');
    const [price, setPrice] = useState(0);

    const handleTotalDecrease = () => {
        setTotal(total - 1)
        setPrice()
    }
    const handleTotalIncrease = () => {
        setTotal(total + 1)
    }

    const handleAddNum = (event) => {
        setAddNum(Number(event.target.value));
    }

    const handleInputIncrease = () => {
        setTotal(total + addNum);
        setAddNum('');


    }
    const handleInpuDecrease = () => {
        setTotal(total - addNum);
        setAddNum('');
    }



    return (
        <div className='input_box'>
            American Silver Eagle

            <div>
                <div>
                    <img src={ase} width='190'></img>
                </div>
                <button onClick={handleInpuDecrease}>-</button> <input placeholder='type in amount' type='number' onChange={handleAddNum} value={addNum}></input> <button onClick={handleInputIncrease}>+</button>
            </div>
            <br></br>
            <div>
                total amount: {total}
            </div>
            <div>
                total price
            </div>
            <div>
                Average cost
            </div>

            <div>
                <button onClick={handleTotalDecrease}>-</button> <button onClick={handleTotalIncrease}>+</button>
            </div>
        </div>

    )
};
