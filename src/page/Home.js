import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  // const[page,setPage] = useState("1")
  const[fview,setFview] = useState(false)
  const[fimg,setFimg] = useState({})

  const getphotos = async () => {
    let url = `https://api.pexels.com/v1/search?query=${query === ""?"all":query}&per_page=100`;
    setLoading(true)
   
   

    await axios({
      method: "GET",
      url: url,
      headers: {
        Authorization:
          "563492ad6f91700001000001d8aad22deede4dfcbeb93172325eee27",
      },
    })
      .then((res) => {
        console.log(res.data.photos);
        // setLoading(false)
        setPhotos(res.data.photos);
        setLoading(false)
        
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };
  const search = () => {
    getphotos();
  };
  // const prevp = () => {
  //   setPage()
    
  // };
  // const nextp = () => {
  //   setPage(page + 1 )
    
  // };

  const fullView = (id) => {
    const view = photos.find((elem)=>{
      return JSON.stringify(elem.id) === id;
    })
   
console.log(view)
setFview(true)
setFimg(view.src)

};
  const close = () => {
    setFview(false)
    setFimg({})


    
  };


  const keyPress = (e) => {
    if (e.keyCode === 13) {
      getphotos();
    }
  };

  useEffect(() => {
    getphotos()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <>
      <Search style={{opacity:fview? "10%":"100%"}}>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          value={query}
          onKeyDown={keyPress}
          placeholder="Search Images Here"
        />
        <button onClick={search}>Search</button>
      </Search>
      <Hom style={{opacity:fview? "10%":"100%"}}>
        {loading? <p> Loading...</p>:photos.map((e,ind) => {
          return (
            <Images key={ind} >
              <p>
                <b>Shot By:-</b>
                {e.photographer.toUpperCase()}
              </p>
             
                <img
                  src={e.src.portrait}
                  alt={e.alt}
                  style={{
                    minWidth: "300px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                  onClick ={()=>fullView(JSON.stringify(e.id))}  />
             
              
            </Images>
          );
        })}
        
      </Hom>
      <Fiv style={{display: fview ? "flex":"none"}}>
        <div><img src={fimg.large} alt="" /> <button onClick={close}>Close</button></div></Fiv>

      {/* <Buttons>
        <button onClick={getphotos("prev")}>prev</button>
        <button onClick={getphotos("next")}>next</button>
        
      </Buttons> */}

      </>
)}


const Hom = styled.div`
position: relative;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 50px;
`;

const Search = styled.div`
  width: 100vw;
  text-align: center;
  margin-top: 30px;

  input {
    width: 40%;
    margin: 5px;
    padding: 10px;
    outline: none;
    border-radius: 5px;
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  button {
    /* width: 40%; */
    cursor: pointer;
    margin: 5px;
    padding: 10px;
    /* outline: none; */
    border: none;
    border-radius: 5px;
  }
`;
const Images = styled.div`
  margin: 20px;
  transition: transform 0.5s ease;
  cursor: pointer;

  &&:hover {
    transform: scale(1.1);
  }
`;
// const Buttons = styled.div`
// text-align: center;
// width: 100%;
// margin: 20px;
// display: flex;
// align-items: center;
// justify-content: center;


// button{
//   padding: 5px;
//   margin: 10px;
//   cursor: pointer;
// }

// `;
const Fiv = styled.div`
width: 100vw;
  height: 100vh;


position: fixed;
top:0;


justify-content: center;
align-items: center;

/* width: 100%; */
margin: auto; 
z-index: 99;


img{
 max-width: 90vw;
 max-height: 70vh;

}
button{
  position: absolute;
  transform: translateX(-50px);
  padding: 5px;
  /* bottom: 20px; */
  


}

`

