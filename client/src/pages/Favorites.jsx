import React, { useState, useEffect } from 'react';
import { createPath, useLoaderData } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export const Favorites = () => {
  const [dataF, setDataF] = useState([]);


  useEffect(() => {
    const getFavorites = async () => {
        try {
            const response = await axios.get(`user/favorites`);
            setDataF(response.data)
        } catch (error) {
            console.log(error);
        }
    };
    getFavorites();

  }, []);
console.log(dataF)

useEffect(() => {
  const deleteFavorite = async (id) => {
      try {
          const response = await axios.delete(`user/delete`);
      } catch (error) {
          console.log(error);
      }
  };
  deleteFavorite();

}, []);

  return (
      <div className="title">
          <h1 className="title">Favories</h1>
          <div className="favorites-container" style={{ display: 'flex', justifyContent: 'center', }}>
          {dataF.map((item) => (
       <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src={item.url} />
       <Card.Body>
         <Card.Title>{item.id} - {item.title}</Card.Title>
         <Card.Text>
            {item.date}
         </Card.Text>
         <Button variant="danger">Delete</Button>
       </Card.Body>
     </Card>
      ))}
      </div>
      </div>
  )}
