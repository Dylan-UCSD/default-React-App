import React from 'react'
import ReactDOM from 'react-dom'

const Mainpage =()=>{ 
  return (<div class = "flex flex-row"><h1 class = "text-blue">Potato</h1></div>)
}

const root  = ReactDOM.createRoot(document.querySelector('.root'))

root.render(<Mainpage/>)