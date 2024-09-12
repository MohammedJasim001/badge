
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Main from './CostomHook/Main';
import Not from './CostomHook/Not';
import { createContext,  useState } from 'react';

export const Datas = createContext()
function App() {
  const [data,setData]=useState([])
  return (
    <div className="App">
      <Datas.Provider value={{data,setData}}>
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/create' element={<Not/>}/>
      </Routes>
      </Datas.Provider>

    </div>
  );
}

export default App;
