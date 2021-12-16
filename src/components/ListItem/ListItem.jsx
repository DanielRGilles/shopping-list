import React from 'react'

export default function ListItem({items, onChangeItem, onDeleteItem}) {
    return (
        <ul>
            {items.map((item) =>  <li key={item.id}>{item.text}</li> ) }
        </ul>
    )
}
