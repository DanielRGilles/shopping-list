import React from 'react'
import AddItem from '../../components/AddItem/AddItem'
import { useReducer } from 'react'
import ListItem from '../../components/ListItem/ListItem';

const nextId = 3;

const initialItems = [ 
    {id:1, text:'Pringles', completed: false},
    {id:2, text:'Avocados', completed: false},
    {id:3, text:'Drinking Oil', completed: false}
]

function itemsReducer(items, action) {
    switch (action.type) {
        case 'added' : {
            return [
                ...items,
                { id: action.id,
                text: action.text,
                completed: false },
            ]
        }
        case 'changed': {
            return items.map((item) => {
              if (item.id === action.task.id) {
                return action.task
              }
              return item
            })
          }
          case 'deleted': {
            return items.filter((item) => item.id !== action.id)
          } 
        default: { throw Error(`Unknown action: ${action.type}`)}
    }
}

export default function Shopping() {
    const [ items, dispatch ] = useReducer(itemsReducer, initialItems)

    const handleAddItem = (text) => {
        dispatch({
            type: 'added',
            id: nextId + 1,
            text,
        })
    }
    const handleChangeItem = (task) => {
        dispatch({
            type: 'changed',
            task
        })
    }
    const handleDeleteItem = (taskId) => {
        dispatch({
            type: 'deleted',
            id: taskId,
        })
    }


    return (
        <div>
            <AddItem onAddItem={handleAddItem}/>
            <ListItem items={items} onChangeItem={handleChangeItem} onDeleteItem={handleDeleteItem} />
        </div>
    )
}
