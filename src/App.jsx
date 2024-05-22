import React, { useState } from 'react'
import questions from './data'
import "./style.css"

const App = () => {
  const [data,setData] = useState(questions)
// const [selected,setSelected] = useState(null)
// const [multipleSelection,setMultitpleSelection] = useState(false)
// const [mulitArray,setMultiArray] = useState([])
// const handleSingleSelection =(id)=>{
//   setSelected(id === selected ? null : id)
// }

// const handleMulitple = (id)=>{
// let copyMultiple = [...mulitArray]
// const findIndexOfCurrentId = copyMultiple.indexOf(id)

// if (findIndexOfCurrentId === -1) {
//   copyMultiple.push(id)
// }
// else{
//   copyMultiple.splice(findIndexOfCurrentId,1)
// }
// setMultiArray(copyMultiple)

// }
const [enableMultiple,setEnableMultiple] = useState(false)
const [selected,setSelected] = useState(null)
const [multipleArray,setMultipleArray] = useState([])

const handleShowClick = (id)=>{

if (enableMultiple) {
  let copyMultipleArray = [...multipleArray]
  const findIndexOfCurrentId = copyMultipleArray.indexOf(id)

  if (findIndexOfCurrentId === -1) {
    copyMultipleArray.push(id)
  }
  else{
    copyMultipleArray.splice(findIndexOfCurrentId,1)
  }
  setMultipleArray(copyMultipleArray)

}
else{

  setSelected(id === selected ? null : id)
}

}



  return (
    <div>
      <div className='multi-btn' onClick={()=> setEnableMultiple(!enableMultiple)}>Enable multi selection</div>
{data && data.map((item,index)=>{
return (

  <main className='main' key={index} >
    <div className='first-section' onClick={()=> handleShowClick(item.id)}>
  <p>{item.title}</p>
  <button>+</button>
    </div>
{enableMultiple ? multipleArray.indexOf(item.id) !== -1 &&   <div>
{item.info}
</div> : selected === item.id &&  <div>
{item.info}
</div>}
  </main>
)
})}

    </div>
  )
}

export default App
