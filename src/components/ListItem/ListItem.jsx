import React from 'react'

export default function ListItem({items, onChangeItem, onDeleteItem}) {
    return (
        <ul>
            {items.map((item) =>  <li key={item.id}>{item.text}<button type='button'
            className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-blue-700 rounded-lg focus:shadow-outline hover:bg-red-800"  onClick={onChangeItem}>Edit</button>
            
            <button type='button'
            className="h-10 px-5 m-2 text-red-100 transition-colors duration-150 bg-red-700 rounded-lg focus:shadow-outline hover:bg-red-800" 
             onClick={() => onDeleteItem(item.id)}>Delete</button></li> ) }
        </ul>
    )
}
