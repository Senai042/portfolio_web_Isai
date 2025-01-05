

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx';
import CardsData from './assets/Data.js';

function App() {
  const cards = CardsData();
  return (
    <>
    <Header/>
    <div 
      className="cards-wrapper">
      {cards.map((card) => (
      <Card key={card.id} data={card} />
          )
        )
      }
    </div>
    <Footer/>
    </>
  )
}

export default App;
