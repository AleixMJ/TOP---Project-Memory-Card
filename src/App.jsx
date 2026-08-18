import { cardsData } from './components/cardsData'
import './App.css';

function App() {


  return (
    <>
      <div id='header'>
        <div id='header-left-section'>
          <h1>Kodamara Memory Game</h1>
          <p>get points by clicking on an image but don't click on any more than once!</p>
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
      {cardsData.map((card) => (
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
