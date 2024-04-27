import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseState from './UseState.jsx';
import UseRef from './UseRef';
import UseEffect from './UseEffect.jsx';
import UseMemo from './UseMemo.jsx';

function App() {
  return <>
  <h1> Example for Hooks in React</h1>
  <BrowserRouter>
  <Routes>

    <Route path='/useState' element={<UseState />}/>
    <Route path='/useEffect' element={<UseEffect />}/>
    <Route path='/useRef' element={<UseRef />}/>
    <Route path='/useMemo' element={<UseMemo />}/>
  
  </Routes>
  </BrowserRouter>
  </>
}

export default App