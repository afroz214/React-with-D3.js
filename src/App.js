import React from 'react'
import './App.css'
import Chart from './Chart'

const App = () => {

  const datas = [12,36,55,25,35,10,40,30,45, 22]
  const w = 700
  const h = 500

  return (
    <div>
      <Chart datas={datas} w={w} h={h} />
    </div>
  )
}

export default App

