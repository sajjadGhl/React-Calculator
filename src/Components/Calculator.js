import React, {useState} from 'react';
import "../Styles/Calculator.css";

const Calculator = () => {
    const [result, setResult] = useState('0');
    const [clear, setClear] = useState(false);
    const clickHandler = event => {
        clear && reset();
        switch (event.target.textContent) {
            case "=":
                setResult(prevState => prevState + '=' + eval(prevState));
                setClear(true);
                break;
            case "CE":
            case "C":
                reset();
                break;
            case "Delete": {
                setResult(prevState => prevState.length > 1 ? prevState.slice(0, -1) : reset());
                break;
            }
            case "1/x":
                setResult(prevState => prevState ** -1);
                break;
            case "x^2":
                setResult(prevState => prevState ** 2);
                break;
            case "x^(1/2)":
                setResult(prevState => prevState ** (1 / 2));
                break;
            case "×":
                setResult(prevState => prevState + '*');
                break;
            case "+/-":
                setResult(prevState => -1 * prevState);
                break;
            default:
                setResult(prevState => (prevState === '0' ? '' : prevState) + event.target.textContent);
        }
    }

    const reset = () => {
        setResult('0');
        setClear(false);
    }

    return (
        <div className="calculator">
            <span className="result">{result}</span>
            <div className="buttons-container">
                <button onClick={clickHandler}>%</button>
                <button onClick={clickHandler}>CE</button>
                <button onClick={clickHandler}>C</button>
                <button onClick={clickHandler}>Delete</button>
                <button onClick={clickHandler}>1/x</button>
                <button onClick={clickHandler}>x^2</button>
                <button onClick={clickHandler}>x^(1/2)</button>
                <button onClick={clickHandler}>/</button>
                <button onClick={clickHandler}>7</button>
                <button onClick={clickHandler}>8</button>
                <button onClick={clickHandler}>9</button>
                <button onClick={clickHandler}>×</button>
                <button onClick={clickHandler}>4</button>
                <button onClick={clickHandler}>5</button>
                <button onClick={clickHandler}>6</button>
                <button onClick={clickHandler}>-</button>
                <button onClick={clickHandler}>1</button>
                <button onClick={clickHandler}>2</button>
                <button onClick={clickHandler}>3</button>
                <button onClick={clickHandler}>+</button>
                <button onClick={clickHandler}>+/-</button>
                <button onClick={clickHandler}>0</button>
                <button onClick={clickHandler}>.</button>
                <button onClick={clickHandler}>=</button>
            </div>
        </div>
    );
};

export default Calculator;