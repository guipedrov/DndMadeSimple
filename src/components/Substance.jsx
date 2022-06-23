import React from 'react'
import { useDrag } from 'react-dnd'

function Substance({id, name, url}) {

  const [{isDragging}, drag] = useDrag(() => ({
    type: "substance",
    item: { id: id }, //sintaxe do hook
    collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
    }),
  }))

  return (
    <div 
        className="substance" 
        key={id} 
        ref={drag}
        style={{
            maxWidth: '120px',
            margin: '0 auto',
            border: isDragging ? '3px solid #ccc' : '2px solid #0f0f0f',
            filter: isDragging ? 'saturate(0) brightness(140%) contrast(40%)' : '',
            borderRadius: '13px',
        }}>
        <div>{name}</div>
        <img
            style={{
                backgroundColor: '#000',
            }}
            width="80rem"
            src={url}
            alt="substance"
        />
    </div>
  )
}

export default Substance