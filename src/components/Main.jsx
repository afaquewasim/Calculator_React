import React from 'react';
import ReactDom from 'react-dom';
import './css/style.css'
import { add, sub, mult, div } from './Calc'

function Main() {
    return (
        <div className="my">
            <ul>
                <li>Sum of two no. is {add(40, 5)}</li>
                <li>Difference of two no. is {sub(40, 5)}</li>
                <li>Product of two no. is {mult(40, 5)}</li>
                <li>Division of two no. is { div(333, 23)}</li>
            </ul>
        </div>
    );
}
export default Main;