import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import MainPage from './components/MainPage'
import Notes from './components/Notes'
import { AppContext } from './context/AppContext'

function App() {

  const {selectedGroupId, showGroups} = useContext(AppContext);
  const [isMobileView, setMobileView] = useState();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(()=>{
     setMobileView(window.innerWidth<450);
     
  },[]);

  return (
    <div className="container">
      <div className={isMobileView ? (showGroups ? 'leftFull' : 'hide') :'left'}>
        <Header/>
      </div>
      <div className={isMobileView ? (showGroups ? 'hide' : 'rightFull') :'right'}>
        {(!selectedGroupId) ? <MainPage/> : <Notes/>}
      </div>
    </div>
  )
}

export default App
