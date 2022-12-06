import { useState } from "react";
import "./ItemCount.scss";

const ItemCount = ({ stock=10, initial=1, onAdd}) => {

    const [count, setCount] = useState(initial);

    const add = () => (count < stock) ? setCount(count + 1) : null;
    const subtract = () => (count > initial) ? setCount(count - 1) : null;

    const handleOnAdd = () => onAdd(count);

  return (
    <div>
        <div className="header">
            <label htmlFor="">{count}</label>
        </div>
        <div className="body">
            <button onClick={add}> + </button>
            <button onClick={subtract}> - </button>
        </div>
        <div className="footer">
            <button onClick={ handleOnAdd }>Agregar al Carrito</button>
        </div>
    </div>
  )
}

export default ItemCount