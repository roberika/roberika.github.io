import { useState } from 'react'
import Grid from './Grid.jsx'

import items from './Data.jsx'

function App() {
  return <div className='app'>
    <div className='header title'>The Rchive</div>
    <div className='header subtitle'>things that I made!</div>
    <Grid items={[items].flat()}/>
    <div className='footer'>Currently learning Godot!</div>
  </div>
}

export default App
