import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx';
import CardsData from './assets/Data.js';
import { useState } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';

function App() {
  const cards = CardsData();
  const [activeCard, setActiveCard] = useState('quienSoy'); //Visibilidad por defecto
  const [parent] = useAutoAnimate();

  return (
    <>
    <Header setActiveCard={setActiveCard}/>
    <div ref={parent} className="cards-wrapper">
      {cards.filter((card) => card.id === activeCard).map((card) => (<Card key={card.id} data={card} />))
      }
    </div>
    <Footer/>
    </>
  )
}

export default App;
