import './nav.css'
import gamepad from '../assets/gamepad.svg'
import React from 'react'

export default function Navbar() {
  return (
    <header className="nav-bar">
      <div id="logo-container">
        <img src={gamepad} width={32} alt="Game pad icon" />
        <h2 id="logo-name">Dev Dream Park</h2>
      </div>
      <nav id="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  )
}
