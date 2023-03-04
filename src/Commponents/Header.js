import React, { useContext } from 'react'
import styled from 'styled-components'
import PhotoContaxt from "../page/PhotoCont"





export default function Header() {
    const a = useContext(PhotoContaxt)

  return (
    <Wrapper>
      <div className='innerdiv'>
        <div className='subdiv'>
          <input type="text"  value={a.query} onChange={(e)=>a.setQuery(e.target.value.toLowerCase())} onKeyDown={a.keyPress} placeholder="Search here"/>
          <button onClick={a.search}>Search</button>
         
          
        </div>
      </div>
      
    </Wrapper>
  )
}

const Wrapper = styled.header`
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;



  position: sticky;
top: 0;
z-index: 999;
margin-bottom: 10px;


.innerdiv{
  width: 100%;
  /* height: 100%; */
  min-height: 70px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  

background-color: #8b72b5;


  .subdiv{
    width: 90%;
    max-width: 500px;
    height: 100%;
    position: relative;
   

    input{
      padding:10px;
      width: 100%;
      outline: none;
      border-radius: 10px;
      border: none;
   


    
    }
    button{
      position: absolute;
      right: 0;
      padding:10px;
       border-top-right-radius: 10px;
       border-bottom-right-radius: 10px;
      border: none;

    }
   
    
  }
  

 
}



`