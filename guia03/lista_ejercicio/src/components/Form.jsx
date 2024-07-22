"use client"
import React, { useState } from 'react'
import Todo from './Todo'
import styles from "../app/page.module.css";

const Form = () => {
    const [item, setItem] = useState({ name: '', brand: '', quantity: '', price: '' })
    const [items, setItems] = useState([])

    const handleChange = (e) => {
        setItem({
            ...item,
            [e.target.name]: e.target.value
        })
    }

    const handleClick = (e) => {
        e.preventDefault();
        if(Object.values(item).some(value => value.trim() === '')) {
            console.log('Todos los campos son obligatorios')
            return
        }
        setItems([...items, item])
        setItem({ name: '', brand: '', quantity: '', price: '' }) // Clear the input fields
    }

    const deleteItem = (index) => {
        const newItems = [...items]
        newItems.splice(index, 1)
        setItems(newItems)
    }

    return (
        <>
            <form onSubmit={handleClick}>
                <label>Agregar artículo</label><br/>
                <input className={styles.form_input} type="text" name="name" placeholder="Nombre" value={item.name} onChange={handleChange} />
                <input className={styles.form_input} type="text" name="brand" placeholder="Marca" value={item.brand} onChange={handleChange} />
                <input className={styles.form_input} type="number" name="quantity" placeholder="Cantidad" value={item.quantity} onChange={handleChange} />
                <input className={styles.form_input} type="number" name="price" placeholder="Precio" value={item.price} onChange={handleChange} />
                <button className={styles.form_button} type="submit">Agregar</button>
            </form>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Marca</th>
                        <th>Cantidad</th>
                        <th>Precio</th>
                        <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        items.map((item, index) => (
                            <Todo 
                                key={index} 
                                index={index} 
                                name={item.name} 
                                brand={item.brand} 
                                quantity={item.quantity} 
                                price={item.price} 
                                deleteItem={deleteItem} 
                            />
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
export default Form
