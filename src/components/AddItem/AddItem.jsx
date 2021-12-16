import React, { useState } from 'react'

export default function AddItem({ onAddItem }) {
    const [ text, setText ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setText('')
        onAddItem(text)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='new item' value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit"> add Item</button>
            
        </form>
    )
}
