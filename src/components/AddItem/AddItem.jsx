import React, { useState } from 'react'

export default function AddItem({ onAddItem }) {
    const [ text, setText ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddItem(text)
        setText('')
        
    }
    return (
        <form onSubmit={handleSubmit}>
            <input placeholder='new item' value={text} onChange={(e) => setText(e.target.value)}/>
            <button type="submit"
            className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-slate-700 rounded-lg focus:shadow-outline hover:bg-red-800"
            > add Item</button>
        </form>
    )
}
