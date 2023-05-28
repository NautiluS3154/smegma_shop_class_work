import React from 'react';
import Cart from './components/Cart/Cart';
import './App.css';
// import Button from './components/Button/Btn';
import image1 from './assets/cart/img1.jpg'
import image2 from './assets/cart/img 2.jpg'
import image3 from './assets/cart/img 3.jpg'
import image4 from './assets/cart/img 4.jpg'
import image5 from './assets/cart/img 5.jpg'
import image6 from './assets/cart/img 6.jpg'
import image7 from './assets/cart/img7.jpg'
import image8 from './assets/cart/img8.jpg'
import Header from './components/Header/Header';

const products = [
  {
    id: 1,
    img: image1,
    title: 'Пиджак для черных',
    desc: 'Стильный и крутой пиджак для настоящей смегмы',
    price: '50',
    
  },
  {
    id: 2,
    img: image2,
    title: 'Серобуромаиновый пиджак',
    desc: 'хз кто его носит но на нем пыль не видно',
    price: '30',
    
  },
  {
    id: 3,
    img: image3,
    title: 'Не знаю что за цвет Пиджак',
    desc: 'Его носят только деды стань дедом',
    price: '35',
    
  },
  {
    id: 4,
    img: image4,
    title: 'Темно синий пиджак',
    desc: 'Для важных херов бумажных',
    price: '50',
    
  },
  {
    id: 5,
    img: image5,
    title: 'Лазуритовый Пиджак',
    desc: 'Пиджак для настоящего тамады у которого конкурсы интересные',
    price: '50',
    
  },
  {
    id: 6,
    img: image6,
    title: 'Пиджак для черных',
    desc: 'Стильный и крутой пиджак для настоящей смегмы',
    price: '50',
    
  },
  {
    id: 7,
    img: image7,
    title: 'Пиджак для черных',
    desc: 'Стильный и крутой пиджак для настоящей смегмы',
    price: '50',
    
  },
  {
    id: 8,
    img: image8,
    title: 'Пиджак для черных',
    desc: 'Стильный и крутой пиджак для настоящей смегмы',
    price: '50',
    
  }
]

function App() {
  return (
   <div className='app'>
    <Header />
    <main className='main'>
     {products.map(product => (
      <Cart
       key={product.id}
       image={product.img}
       title={product.title}
       desc={product.desc}
       price={product.price}
      />
     ))}
    </main>
   </div>
  )
 }

export default App;
