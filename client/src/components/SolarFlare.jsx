import React, { useState, useEffect } from 'react';
import { createPath, useLoaderData } from 'react-router-dom';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const apiKey = "t0SgG8ojdp7DVWw4ISvDCegqhmJ3zgbo6ju0NAXJ";

export default function SolarFlare() {
    const [flareData, SetFlareData] = useState([]);

    useEffect(() => {
        const loadFlare = async () => {
            try {
                const response = await axios.get(`https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`);
                SetFlareData(response.data)
            } catch (error) {
                console.log(error);
            }
        };
        loadFlare();
    }, []);
    console.log(flareData)

    return (
        <div className="title">
            <h1 className="title">Solar Flares Found</h1>
            <div className="favorites-container" style={{ display: 'flex', justifyContent: 'center', padding: "50px" }}>
            {flareData.map((item) => (
         <Card style={{ width: '18rem' }}>
         <Card.Body>
           <Card.Title>Began {item.beginTime}</Card.Title>
           <Card.Title>Ended {item.endTime}</Card.Title>
           <Card.Text>
              Peak Time - {item.peakTime}
           </Card.Text>
         </Card.Body>
       </Card>
        ))}
        </div>
        <footer>What is a solar flare?</footer>
        <footer>A solar flare is an intense burst of radiation coming from the release of magnetic energy associated with sunspots. Flares are our solar system’s largest explosive events. They are seen as bright areas on the sun and they can last from minutes to hours. We typically see a solar flare by the photons (or light) it releases, at most every wavelength of the spectrum. The primary ways we monitor flares are in x-rays and optical light. Flares are also sites where particles (electrons, protons, and heavier particles) are accelerated.</footer>
        </div>
    )}