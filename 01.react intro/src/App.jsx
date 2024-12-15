import './App.css'
import 'bootstrap';

import Card from './components/Card'

function App() {


  return (
    <div className='test'>
      <div className='container'>
        <h1 className='rest'><b>Restoran Menyusu</b></h1>
        
        <div className="main">
        <Card
          src="https://www.foodandwine.com/thmb/3kzG4PWOAgZIIfZwMBLKqoTkaGQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/margherita-pizza-with-argula-and-prosciutto-FT-RECIPE0721-04368ec288a84d2e997573aca0001d98.jpg"
          title="Pizza-Margaritta"
          desc="Bol pendirli ləzzətinə doyulmaz klassik ləzzət!"
          price={10}

        />
        <Card
          src="https://s7d1.scene7.com/is/image/mcdonalds/DC_202302_0005-999_BigMac_1564x1564-1:product-header-mobile?wid=1313&hei=1313&dpr=off"
          title="Big-Mac"
          desc="Əfsanəvi ləzzət indi daha da dadlı,hələ də sınamamısan?"
          price={5.5}

        />
        <Card
          src="https://mcdonalds.az/images/eec170dd5bc3cab3f86f9fabf4531f29.png"
          title="Chicken Wings"
          desc="Bol baharatlı əsl nahar atışdırmalığı"
          price={6.5}

        />
        </div>
      </div>
    </div>
  )
}

export default App
