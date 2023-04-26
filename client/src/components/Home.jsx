import React, { useState, useEffect } from 'react';
import { createPath, useLoaderData } from 'react-router-dom';
import axios from "axios";

const apiKey = "t0SgG8ojdp7DVWw4ISvDCegqhmJ3zgbo6ju0NAXJ";
export default function Home() {
  const [imageUrl, setImageUrl] = useState('');
  const [imageEx, setImageEx] = useState('');
  const [imageTitle, setImageTitle] = useState('');

  useEffect(() => {
      const getMarsPictures = async () => {
          try {
              const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
              console.log(response.data)
              setImageUrl(response["data"]["hdurl"]);
              setImageEx(response["data"]["explanation"])
              setImageTitle(response["data"]["title"])
          } catch (error) {
              console.log(error);
          }
      };
      getMarsPictures();
  }, []);
  return (
      <div className="center">
          <h1 className="title">Home</h1>
          <div className='title'>
            <h3>Image of the Day</h3>
            <h4>{imageTitle}</h4>
          <img className='iotd' src={imageUrl} alt="Mars Picture" />
          <footer>{imageEx}</footer>
          </div>
      </div>
  );
};