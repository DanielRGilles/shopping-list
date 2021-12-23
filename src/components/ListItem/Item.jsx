import React, { useState } from 'react'

export default function Item({ item, onChangeItem, onDeleteItem}) {
    const [editing, setEditing ] = useState(false)
    let itemText;
  if (editing) {
    itemText = (
      <>
        <input
          value={item.text}
          onChange={(e) => {
            onChangeItem({
              ...item,
              text: e.target.value,
            })
          }}
        />

        <button
          type="button"
          className="h-10 px-5 m-2 text-green-100 transition-colors duration-150 bg-green-500 rounded-lg focus:shadow-outline hover:bg-green-800"
          onClick={() => setEditing(false)}
        >
          Save
        </button>
      </>
    )
  } else {
    itemText = (
      <>
        <p data-testid="input-tag" className="text-3xl" style={{ textDecoration: item.completed ? 'line-through' : null }}>
          {item.text}
        </p>
        <button
          type="button"
          className="h-10 px-5 m-2 text-purple-100 transition-colors duration-150 bg-slate-500 rounded-lg focus:shadow-outline hover:bg-yellow-500"
          onClick={() => setEditing(true)}
        >
          Edit
        </button>
      </>
    )
    }
    return (
        <div>
            <li>
            <input
        type="checkbox"
        
        checked={item.completed}
        onChange={(e) => {
          onChangeItem({
            ...item,
            completed: e.target.checked,
          })
        }}
      /> 
            {itemText}     
            <button type='button'
            className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-red-800" 
             onClick={() => onDeleteItem(item.id)}>Delete</button>
             </li> 
        </div>
    )}
