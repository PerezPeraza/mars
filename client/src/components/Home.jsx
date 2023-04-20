import React, { useState, useEffect } from 'react';
import { createPath, useLoaderData } from 'react-router-dom';
import axios from "axios";

// // Call APIS and Load Data
// export async function getMarsWeather({ params }) {
//     try {
//       const response = await axios.get('https://api.nasa.gov/insight_weather/?api_key=DEMO_KEY&feedtype=json&ver=1.0');
//       return response.data
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   getMarsWeather();
// // Rover has been out for over 400 Days :/ Too late to go back now!
//   const marsData = getMarsWeather();
//   console.log(marsData);



export default function Home() {
  const [imageUrl, setImageUrl] = useState('');


  useEffect(() => {
      const getMarsPictures = async () => {
          try {
             const random1000 = Math.floor(Math.random() * 200) + 1000;
             const random7 = Math.floor(Math.random() * 7) + 1;
              const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=${random1000}&page=2&api_key=t0SgG8ojdp7DVWw4ISvDCegqhmJ3zgbo6ju0NAXJ`);
              console.log(response.data)
              const imageData = response["data"]["photos"][random7]["img_src"]; // Get the first image from the response
              setImageUrl(imageData);
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
          <img className='iotd' src={imageUrl} alt="Mars Picture" />
          </div>
      </div>
  );
};