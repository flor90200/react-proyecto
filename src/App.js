import  './style.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import Nosotros from './components/Nosotros'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App (){

    return(
        <div>
            <BrowserRouter>
           <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer itemId={2}/>} />
                <Route path='/productos' element={<ItemListContainer/>}/>
                  <Route path='/productos/:categoria' element={<ItemListContainer/>}/>
                <Route path='/nosotros' element={<Nosotros/>} />
              
            </Routes>

      
        </BrowserRouter>
        </div>
    );
}

export default App;