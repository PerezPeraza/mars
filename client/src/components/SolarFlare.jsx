import React, { useState, useEffect } from 'react';
import { createPath, useLoaderData } from 'react-router-dom';
import axios from "axios";
const apiKey = "t0SgG8ojdp7DVWw4ISvDCegqhmJ3zgbo6ju0NAXJ";

export default function SolarFlare() {

    const [beginTime, setBeginTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [peakTime, setPeakTime] = useState('');

    useEffect(() => {
        const loadFlare = async () => {
            try {
                const response = await axios.get(`https://api.nasa.gov/DONKI/FLR?startDate=yyyy-MM-dd&endDate=yyyy-MM-dd&api_key=${apiKey}`);
                console.log(response.data[12])
                setBeginTime(response.data[12]["beginTime"]);
                setEndTime(response.data[12]["endTime"]);
                setPeakTime(response.data[12]["peakTime"]);
            } catch (error) {
                console.log(error);
            }
        };
        loadFlare();
    }, []);

    return (
        <>
            <div className="center">
                <h1 className="title">Most Recent Solar Flare</h1>
                <div className='title'>
                    <h5>Format</h5>
                    <h6>YEAR-MONTH-DAY T ZULU TIME</h6>
                    <div>Began : {beginTime}</div>
                    <div>Ended : {endTime}</div>
                    <div>Peak : {peakTime}</div>
                </div>
            </div>
        </>
    )
};