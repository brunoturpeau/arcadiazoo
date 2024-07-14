'use client'
import React, { useState, useEffect } from "react";
function Jokes() {
    const [services, setServices] = useState([]);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        fetch("https://127.0.0.1:8000/api/services", {
            method: "GET",
        })
            .then((response) =>  response.json())
            .then((data) => {
                setTotalItems(data['hydra:totalItems'])
                setServices(data['hydra:member'])
                console.log(data[0].name)
                //console.log(data['hydra:member'][0])
            })
            .catch((error) => console.log(error));
    }, []);
    return (
        <div>
            <h2>Joke of the day:</h2>


            {`Total items : ${totalItems}`}
            <br />
            {`test ${services[0].name}`}

        </div>
    );
}
export default Jokes;