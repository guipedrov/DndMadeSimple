import React, { useState } from 'react'
import { PicturesList as PicturesList } from './PicturesList.tsx'
import Substance from './Substance'
import { useDrop } from 'react-dnd'

function DrapDrop() {

  const [board, setBoard] = useState([])

  //const for the Hook | is takes an function that takes an anonymous function 
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "substance",
    drop: (item) => addImageToBoard(item.id),
  }))

  const addImageToBoard = (id) => {}

  return (
    <div>
        <div className="Pictures">
            {PicturesList.map((fishtape) => {
              return <Substance url={fishtape.url} id={fishtape.id} name={fishtape.name} />
            })}
        </div>
        <div className="Board" ref={drop}>
            {board.map((fishtape) => {
              return <Substance url={fishtape.url} id={fishtape.id} name={fishtape.name} />
            })}
        </div>

    </div>
  )
}

export default DrapDrop