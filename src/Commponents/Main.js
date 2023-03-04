import React, { useContext, useEffect } from 'react'

import styled from 'styled-components'
import PhotoContaxt from "../page/PhotoCont"


export default function Main() {
    const b = useContext(PhotoContaxt);


   useEffect(() => {
    b.getphotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [b.page]);


  return (
    <Container> 
    { b.loading ?<div className='other'> <p> loading...</p></div> :b.photos.length === 0?<div className='other'><p>No Data Found</p></div>:
    <Wrapper>
      <div className="items">
        {b.photos.map((e,ind)=>{
          return(
            <div className='item' key={ind}>
            <img src={e.src.medium}  alt={e.alt} />
            </div>
          )
        })}

      </div>
        <div className="btns">
          <button disabled ={b.page === 1 ?true:false} onClick={b.back}>Back</button>
          <button  onClick={b.next}>Next</button>
        </div>
      
    </Wrapper>}
    
    </Container>
  )
}

const Container = styled.div`

.other{
  width: 100vw;
  /* height: calc(100vh - 70px); */
  display: flex;
  justify-content: center;
  align-items: center;

  p{
    font-size: 20px;
  }
}
`

const Wrapper = styled.div`
width: 100vw;
height: auto;
/* background-color: black; */

display: flex;
flex-direction: column;
justify-content: center;
z-index: 99;

.items{
  width: 100%;
  height: auto;
  /* max-height: fit-content; */
  /* overflow-y: hidden; */
  /* margin: auto; */
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  

  .item{
    /* height: auto; */
    /* flex: 0.2; */
    /* flex-basis: 200px; */
    /* width: 300px; */
    /* max-width: 300px; */
   
   
    display: flex;
    align-items: center;
    /* background-color: aquamarine; */
   
    /* padding: 5px; */
    /* overflow: hidden; */
  


   

    img{
      width: 100%;
      height: 100%;
      border-radius: 10px;

    }

  }

}

.btns{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  padding: 15px;
  gap: 10px;
  
  button{
    padding: 15px;
    border-radius: 5px;
    border: none;
    background-color: #8b72b5;
    color: white;
    cursor: pointer;

    &:hover{
      background-color: #bda2eb;
    }

  }

}



@media  screen and (min-width:650px){
  .item{
   width: 300px;
      height: 300px;
    
  }
  
}
@media  screen and (max-width:650px){
  .item{
   width: 120px;
      height: 120px;
    
  }
  
}


`