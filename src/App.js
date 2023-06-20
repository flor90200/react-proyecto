import  './style.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contacto from './components/Contacto';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Footer from './components/footer';


function App (){
    return(
        <div>
          <CartProvider>

            <BrowserRouter>
           <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer itemId={2}/>} />
                <Route path='/productos' element={<ItemListContainer/>}/>
                  <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
                <Route path='/contacto' element={<Contacto/>} />
                <Route path='/carrito' element={<Carrito/>} />
                
          
            </Routes>
        <Footer />
          
      
        </BrowserRouter>
        </CartProvider>  
      

        </div>
    );
}

export default App;