import axios from "axios";
import React, {  useState } from "react";
import PhotoContaxt from "./PhotoCont";




const PhotosData =(props)=> {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);
  const[page,setPage] = useState(1)
 


  const getphotos = async () => {
    let url = `https://api.pexels.com/v1/search?query=${
      query === "" ? "all" : query
    }&page=${page}&per_page=30`;
    setLoading(true);

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
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error.toJSON());
      });
  };
  const search = () => {
    getphotos();
  };
  

  // const fullView = (id) => {

  //   const view = photos.find((elem) => {
  //     return elem.id === id;
  //   });

  //   console.log(view);
  //   setFview(true);

  //   setFimg(view.src);
  // };
  // const close = () => {
  //   setFview(false);
  //   setFimg({});
  // };

  const keyPress = (e) => {
    if (e.keyCode === 13) {
      getphotos();
    }
  };
  const next = () => {
    setPage((prev)=> prev + 1 )
 
  };
  const back = () => {
    setPage((prev)=> prev - 1 )
   
  };

  


  return (
<PhotoContaxt.Provider value={{loading,back,next,keyPress,search,photos,setQuery,getphotos,query}}>
    {props.children}
</PhotoContaxt.Provider>
 
  )
}

export default PhotosData;
