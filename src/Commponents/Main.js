import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'
import PhotoContaxt from "../page/PhotoCont"


export default function Main() {
    const b = useContext(PhotoContaxt);


   useEffect(() => {
    b.getphotos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
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
        
      
    </Wrapper>
  )
}

const Wrapper = styled.div`
width: 100vw;
height: auto;
/* background-color: black; */

display: flex;
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
    height: 200px;
    display: flex;
    align-items: center;
    /* background-color: aquamarine; */
   
    /* padding: 5px; */
    /* overflow: hidden; */
  


   

    img{
      width: 300px;
      height: 200px;
      border-radius: 10px;

    }

  }

}



@media  screen and (max-width:650px){
  .item{
    
    img{
      width: 100px;
    }
  }
  
}


`