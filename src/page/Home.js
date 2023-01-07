import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";

export default function Home() {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(false);

  const getphotos = async () => {
    let url = `https://api.pexels.com/v1/search?query=all&per_page=50`;
    setLoading(true)
    if (query === "") {
      url = `https://api.pexels.com/v1/search?query=all&per_page=50`;
    } else {

      setPhotos([])
      url = `https://api.pexels.com/v1/search?query=${query}&per_page=50`;
    }

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
      <Search>
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value.toLowerCase())}
          value={query}
          onKeyDown={keyPress}
          placeholder="Search Images Here"
        />
        <button onClick={search}>Search</button>
      </Search>
      <Hom>
        {loading? <p> Loading...</p>: photos.map((e, id) => {
          return (
            <Images key={id}>
              <p>
                <b>Shot By:-</b>
                {e.photographer.toUpperCase()}
              </p>
              <a href={e.url}>
                <img
                  src={e.src.portrait}
                  alt={e.alt}
                  style={{
                    minWidth: "300px",
                    height: "300px",
                    borderRadius: "10px",
                  }}
                />
              </a>
            </Images>
          );
        })}
        
      </Hom>
    </>
  );
}

const Hom = styled.div`
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

  &&:hover {
    transform: scale(1.1);
  }
`;
