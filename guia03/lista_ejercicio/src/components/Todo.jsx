import React from 'react'
import styles from "../app/page.module.css";

const Todo = ({ name, brand, quantity, price, index, deleteItem }) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{brand}</td>
            <td>{quantity}</td>
            <td>${price}</td>
            <td><button className={styles.btn_delete} onClick={() => deleteItem(index)}>X</button></td>
        </tr>
    )
}
export default Todo
