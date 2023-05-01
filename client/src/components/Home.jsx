import React, { useState, useEffect } from 'react';
import { createPath, useLoaderData } from 'react-router-dom';
import axios from "axios";
import {getToken} from "./CsrfToken"
import Button from 'react-bootstrap/Button';
import { currUser } from '../utilities';
  
const apiKey = 't0SgG8ojdp7DVWw4ISvDCegqhmJ3zgbo6ju0NAXJ'

export default function Home() {

  const [imageUrl, setImageUrl] = useState('');
  const [imageEx, setImageEx] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [date, setDate] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
      const getMarsPictures = async () => {
          try {
              const response = await axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`);
              console.log(response)
              setImageUrl(response["data"]["hdurl"]);
              setImageEx(response["data"]["explanation"])
              setImageTitle(response["data"]["title"])
              setDate(response["data"]["date"])
          } catch (error) {
              console.log(error);
          }
      };
      getMarsPictures();
  }, []);



  getToken()
  useEffect(() => {
    const getCurrUser = async () => {
      setUser(await currUser());
    };
    getCurrUser();
  }, []);
console.log(user)



const addToFavorites = async () => {
    if (typeof user === 'object' && user.user === null) {
      return alert("Please sign in to add to favorites.")
    } else {
        try{
        const response = await axios.post('user/add/', {
           "user" : user.email,
            'title' : imageTitle,
            'date': date,
            'url' : imageUrl,
         });
        console.log(response.data.success);
        alert("Success")
        }
        catch( error){
        console.log(error)
    }}
  }

  return (
      <div className="center">
          <h1 className="title">Home</h1>
          <div className='title'>
            <h3>Image of the Day</h3>
            <h4>{imageTitle}</h4>
          <img className='iotd' src={imageUrl} alt="Mars Picture" />
          <footer>{imageEx}</footer>
          <Button variant='danger' onClick={addToFavorites}>Add to Favorites</Button>
          <footer><a href="https://apod.nasa.gov/apod/archivepix.html" target='_blank'>Find More Images Here</a></footer>
          </div>

      </div>
  );
};