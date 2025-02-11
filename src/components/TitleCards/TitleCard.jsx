import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data'
import {Link} from 'react-router-dom'


const TitleCard = ({title,category}) => {
  const [apiData,setApiData]=useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWY1MzAxNTIzYjM2ZDFjOWUxMzYwNTA4NzhhNmE3NiIsIm5iZiI6MTczOTE2NzA4OC40NTIsInN1YiI6IjY3YTk5NTcwMmZiYWM0MGI5MDkzNzBhYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vpLIrjaFfbFw7hodB8_F2kjAhzbqulzSQAt-bFFK2wo'
    }
  };
  
  
    
  
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => { 
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(res => res.json())
    .then(res => setApiData(res.results))
    .catch(err => console.error(err));
    
    cardsRef.current.addEventListener('wheel', handleWheel) }, [])

  return (
    <div className='TitleCards'>
      <h2>{title?title:"New Movies"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return <Link to={`player/${card.id}`}className='card' key={index}>
            <img src={'https://image.tmdb.org/t/p/w500'+ card.backdrop_path} alt="" />
            <p>{card.original_title}</p> 
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard
