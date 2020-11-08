import React from 'react';
import './Input.css';
import './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementtype) {
        case ( 'input' ) :
            inputElement = <input className="inputElement" {...props.elementconfig} 
            value={props.value} onChange={props.changed}/>;
            break;
        case ( 'textarea' ) :
            inputElement = <textarea className="inputElement" {...props.elementconfig} 
            value={props.value} onChange={props.changed}/>;
            break;
            case ( 'select' ) :
            (inputElement = <select className="inputElement" 
             value={props.value} onChange={props.changed}>{props.elementconfig.options.map(option => 
             <option key={option.value} value={option.value}>{option.displayValue}</option>)}
             </select>);
            break;
        default:
            inputElement =  <input className="inputElement" {...props.elementconfig} />;       
    }

    return (
        <div className="Input">
            {inputElement}
        </div>
    )
}

export default Input
