import './main.css'
import ase from './images/ase.jpeg'
import React, { useState } from 'react';


export const SilverCoin = () => {


    const [total, setTotal] = useState(0);
    const [addNum, setAddNum] = useState('');
    const [price, setPrice] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);



    const averageCost = totalPrice / total;


    const handleTotalDecrease = () => {
        setTotal(total - 1)
    }
    const handleTotalIncrease = () => {
        setTotal(total + 1)
        setPrice(prompt("enter price per coin"))
        setTotalPrice(Number(price) + totalPrice)
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


    console.log(totalPrice)
    console.log(price)




    return (
        <div className='input_box'>
            American Silver Eagle

            <div>
                <div>
                    <img src={ase} alt="American Silver Eagle Coin" width='190'></img>
                </div>
                <button onClick={handleInpuDecrease}>-</button> <input placeholder='type in amount' type='number' onChange={handleAddNum} value={addNum}></input> <button onClick={handleInputIncrease}>+</button>
            </div>
            <br></br>
            <div>
                total amount: {total}
            </div>
            <div>
                total price: ${totalPrice}
            </div>
            <div>
                Average cost: ${averageCost ? averageCost.toFixed(2) : 0}
            </div>

            <div>
                <button onClick={handleTotalDecrease}>-</button> <button onClick={handleTotalIncrease}>+</button>
            </div>
        </div>

    )
};
