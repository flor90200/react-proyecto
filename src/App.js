import  './style.css'
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer'
import Nosotros from './components/Nosotros'
import ItemDetailContainer from './components/ItemDetailContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App (){

    return(
        
            <BrowserRouter>
           <Navbar/>
            <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/item/:id' element={<ItemDetailContainer/> } />
                <Route path='/nosotros' element={<Nosotros/>} />
                <Route path='/productos/:categoria' element={<ItemListContainer/>} />
            </Routes>

      
        </BrowserRouter>
    );
}

export default App;