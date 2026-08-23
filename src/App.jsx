import { cardsData } from './components/cardsData';
import './App.css';

const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

function App() {

  const cards = shuffleArray(cardsData)
 
  return (
    <>
      <div id='header'>
        <div id='header-left-section'>
          <h1>Kodamara Memory Game</h1>
          <p>Get points by clicking on an image but don't click on any more than once!</p>
        </div>
        <div id='header-right-section'>
          <span>
            Score: 
          </span>
          <span>
            Best score: 
          </span>
        </div>
      </div>



      <div className='cards-container'>
      {cards.map((card) => (
        <div className='card' key={card.id}>
          <img src={card.image} alt={card.name}></img>
          <p>{card.name}</p>
        </div>
      ))}

    </div>
    </>

    
    );

}
export default App
