import React, {useEffect, useState} from 'react';
import axios from "axios";
import {buttonClasses} from "@mui/material";
import {Link} from "react-router-dom";
import CustomLink from "../components/CustomLink/CustomLink";

const Stations = () => {
    const [stations, setStations] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/station/list/').then(data => setStations(data.data))
    }, [] )

    return (
        <div
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
        }}
        >
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                {stations.map((station) => <CustomLink key={station.id} to={`http://localhost:3001/station/${station.id}`}> Station {station.id}</CustomLink> )}
            </div>
        </div>
    );
};

export default Stations;