import React, { useContext } from 'react'
import styled from 'styled-components'
import PhotoContaxt from "../page/PhotoCont"





export default function Header() {
    const a = useContext(PhotoContaxt)

  return (
    <Wrapper>
      <div className='innerdiv'>
        <div className='subdiv'>
          <input type="text" placeholder='Search Here' value={a.query} onChange={(e)=>a.setQuery(e.target.value.toLowerCase())} onKeyDown={a.keyPress}/>
          <button onClick={a.search}>Search</button>
          
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
width: 100vw;




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
  

background-color: antiquewhite;


  .subdiv{
    width: 90%;
    max-width: 500px;
    height: 100%;
    position: relative;

    input{
      padding:5px;
      width: 100%;
      outline: none;


    
    }
    button{
      position: absolute;
      right: 0;
      padding:5px;

    }
    .placeholder{
      /* height: 100%; */
      font-size: 15px;
      position: absolute;
      left: 0;
      top: 0;
      /* padding:5px 7px; */
    }
    
  }
}

`