import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {

  const [mode, setMode] = useState('moon');
  const darkMode = () => {
    if (mode === 'moon') {
      setMode('sun');
      document.body.style.background = '#222';
    }
    else {
      setMode('moon');
      document.body.style.background = 'white';
    }
  }

  return (
    <>
      <Router>
        <Navbar darkMode={darkMode} mode={mode} />
        <Routes>
          <Route exact path='/' element={<News key={'/'} mode={mode} category='general'/>} />
          <Route exact path='business' element={<News key={'busi'} mode={mode} category='business'/>}/>
          <Route exact path='science' element={<News key={'sc'} mode={mode} category='science'/>}/>
          <Route exact path='entertainment' element={<News key={'ent'} mode={mode} category='entertainment'/>}/>
          <Route exact path='sports' element={<News key={'sp'} mode={mode} category='sports'/>}/>
          <Route exact path='tech' element={<News key={'tech'} mode={mode} category='technology'/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
