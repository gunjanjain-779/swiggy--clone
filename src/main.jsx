import react from 'react'
import { createRoot } from 'react-dom/client'
import "./index.css"
import Header from './components/header'
import Hero from './components/hero'
import Body from './components/body.jsx'
import Menu from './components/menu.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from './components/Cart.jsx'
import Appstore from './components/appstore.jsx'
import {Provider} from "react-redux"

const Applayout = () => {
  return (<>
    <Header />
    <Hero />
    <Body />

  </>)
}
const root = createRoot(document.getElementById('root'))
root.render(
<Provider store={Appstore}>
<BrowserRouter>
  <Routes>
    <Route path="/" element= <Applayout/> />
    <Route path="/restaurants/:id" element=<Menu/> />
    <Route path='/cart' element= <Cart/> />
  </Routes>
</BrowserRouter>
</Provider>
);

