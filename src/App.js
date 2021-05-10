import React from 'react'
import './App.css'
import Chart from './Chart'

const App = () => {

  const datas = [
    { id: '1', region: 'China', value: 14 },
    { id: '2', region: 'India', value: 10 },
    { id: '3', region: 'USA', value: 16 },
    { id: '4', region: 'Ghana', value: 8 },
    { id: '5', region: 'Phillipines', value: 11 },
    { id: '6', region: 'Germany', value: 12 },
  ]

  return (
    <div>
      <Chart datas={datas} />
    </div>
  )
}

export default App

