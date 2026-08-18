import { cardsData } from './components/cardsData'
import './App.css';

function App() {


  return (

    <div className='cards-container'>
      {cardsData.map((card) => (
        <div className='card' key={card.id}>
          <img src={card.image} alt={card.name}></img>
          <p>{card.name}</p>
        </div>
      ))}

    </div>
    
    );

}
export default App
