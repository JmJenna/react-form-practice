import React  from 'react';

const Item = ({ name , qty})=>{

    return (
        <ul>
            <li>Product name : {name}</li>
            <li>Qty : {qty} </li>
        </ul>
    )
}

export default Item;