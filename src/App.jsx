import { cardsData } from './components/cardsData';
import './App.css';
import { useState, useEffect } from 'react';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {

  const [cards, setCards] = useState(cardsData);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(() => {
    const saved = localStorage.getItem('bestScore');
    return saved !== null ? JSON.parse(saved) : 0;
  });
 
  useEffect(() => {
    localStorage.setItem('bestScore', JSON.stringify(bestScore));
  }, [bestScore])

  function handleClick(id) {

    const clickedCard = cards.find((card) => card.id === id)
      if (clickedCard?.isClicked) {
          alert("Game finished, you selected a card twice")
          resetGame();
          return;

      } 
      const newScore = score + 1;
      const updatedCards = cards.map((card)=>
        card.id === id? {...card, isClicked: true } : card)

      if (newScore > bestScore) {
        setBestScore(newScore);
      }

      if (newScore === cards.length){
        alert("Congratulations, you got all cards and the max score")
        resetGame();

      } else {
        setScore(newScore);
        setCards(shuffleArray(updatedCards));
    }
  }
  
  function resetGame() {
          const resetCards = cards.map((card) => ({...card, isClicked: false}));
          setCards(shuffleArray(resetCards));
          setScore(0);
  }

  return (
    <>
      <div id='header'>
        <div id='header-left-section'>
          <h1>Kodamara Memory Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
        <div id='header-right-section'>
          <span>
            Score: {score}
          </span>
          <span>
            Best score: {bestScore}
          </span>
        </div>
      </div>



      <div className='cards-container'>
      {cards.map((card) => (
        <div 
          className='card' 
          key={card.id}
          onClick={() => handleClick(card.id)}>
          <img src={card.image} alt={card.name} ></img>
          <p>{card.name}</p>
        </div>
      ))}

    </div>
    </>

    
    );

}
export default App
