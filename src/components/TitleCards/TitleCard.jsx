import React from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
function TitleCard() {
  return (
    <div className='TitleCards'>
      <h2>Popular on netFlix</h2>
      <div className="card-list">
        {cards_data.map((card, index) => {
          return <div className='card' key={index}>
            <img src={card.image} alt="" />
            <p>{card.name}</p>
          </div>
        })}
      </div>
    </div>
  )
}

export default TitleCard
