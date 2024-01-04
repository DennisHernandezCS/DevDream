import './App.css'
import React from 'react'
import Navbar from './components/Navbar'
import Map from './components/Map'

export default function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className="App">
          <h1>Pidgey Activate</h1>
          <Map />
        </div>
      </main>
      <footer>
        <p>Footer</p>
      </footer>
    </>
  )
}
