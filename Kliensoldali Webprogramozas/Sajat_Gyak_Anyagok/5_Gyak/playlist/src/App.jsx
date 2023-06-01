import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       <nav class="ui secondary menu">
      <img src="src\assets\logo.png" />
      <a class="item" href="index.html"><i class="home icon"></i> Home</a>
      <a class="active item" href="playlists.html"><i class="headphones icon"></i> My Playlists</a>
      <a class="item" href="tracks.html"><i class="music icon"></i> Tracks</a>
      <a class="item" href="search.html"><i class="search icon"></i> Search</a>
      <div class="ui right dropdown item">
        John Doe
        <i class="dropdown icon"></i>
        <div class="menu">
          <div class="item"><i class="user icon"></i> Profile</div>
          <div class="item"><i class="settings icon"></i> Settings</div>
          <div class="item"><i class="sign out icon"></i>Log out</div>
        </div>
      </div>
    </nav>
    </div>
  )
}

export default App
