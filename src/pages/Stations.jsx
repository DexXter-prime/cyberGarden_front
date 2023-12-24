import React, {useEffect, useState} from 'react';
import axios from "axios";
import {buttonClasses} from "@mui/material";
import {Link} from "react-router-dom";

const Stations = () => {
    const [stations, setStations] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/api/station/list/').then(data => setStations(data.data))
    }, [] )

    return (
        <div>
            {stations.map((station) => <Link key={station.id} to={`http://localhost:3001/station/${station.id}`}> Station {station.id}</Link> )}
        </div>
    );
};

export default Stations;