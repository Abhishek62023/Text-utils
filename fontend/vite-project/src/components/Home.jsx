import React, { useState } from 'react'
 
import Navbar from './Navbar'
import Footer1 from './Footer1';


function Home() {
  const [text,setText]=useState('')

  const toUppercase =(e)=>{
    let hey=text.toUpperCase();
    setText(hey)
  }
  const tolowercase=(e)=>{
    let low=text.toLocaleLowerCase();
    setText(low)
  }
  const remove=(e)=>{
    let rom= text.replace(/\s+/g, ' ').trim();
    setText(rom)
    
  }
  const reset=(e)=>{
    setText('')
  }
  const handleCopy=()=>{
    navigator.clipboard.writeText(text);
  }
  return (
    <div>
      <Navbar/>
       
<div className="mb-1 mt-5  position-relative ">
  
  <div className='container text-center m-5 '>
  <label htmlFor="exampleFormControlTextarea1" className="form-label" >Write Text here </label>
  <textarea className="form-control pb-5 border border-dark border-3 bg-info-subtle" id="textbox" rows="6" value={text}onChange={(e)=>setText(e.target.value)}></textarea>
</div>

</div>

<div >
  
  <button className='m-1' onClick={toUppercase} >Upper Case</button>
  <button className='m-1' onClick={tolowercase} >Lower Case</button>
  
  <button className='m-1' onClick={remove} >remove Case</button>
  <button className='m-1' onClick={reset} >Reset</button>
  <button className='m-1' onClick={handleCopy} >Copy</button>
  </div>

  <div>


  </div>
  <h4>Text Summery</h4>
  <p>char Length:{text.length>0?text.length:""}</p>
  <p>Words Length:{text.split(' ').filter((element)=>{return element.length!==0}).length}</p>
  <p>Time :{0.008*text.split(' ').filter((element=>{return element.length!==0})).length}</p>
  <p> Sentance Length:{text.split('.').filter((element)=>{return element.length!==0}).length}</p>

  <p>Preview : {text}</p>
  

  <Footer1/>
</div>





      
    
  )
}

export default Home
