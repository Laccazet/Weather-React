import React, { useEffect } from 'react'
import { useState } from 'react';

export default function App() {


    var [data, setData] = useState({});
    var [loading, setLoading] = useState(false);
    var [input, setInput] = useState("");

    const getData = async ( city ) => {
        setLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=984ae7ac3cc18ec1f9ae54fa66a170c2`);

        if (response.status === 200) {
            const mainData = await response.json();
            setData(mainData);
            setLoading(false);
        }else {
            console.log(response.status);
            setLoading(false);
        }

        
    }

    const handleClick = () => {
        getData(input);
    }

    const handleChange = (event) => {
        let inpt = event.target.value;
        setInput(inpt);
    }

    const handleKeypress = (e) => {
        if (e.keyCode === 13) handleClick();
    }

    useEffect(() => {
        getData("Kadıköy");
    }, [])


    if (!loading) {
        return (
            <div className='bg-slate-600 w-full h-full flex justify-center items-center'>
                <div className='bg-sky-600 w-[500px] h-[400px]'>
    
                    <h1>City: {data.name}</h1>
                    <h1>Country: {data.sys?.country}</h1>
                    <h1>Temp: {data.main?.temp}</h1>
                    <h1>Weather: {data.weather?.[0].main}</h1>
                    <h1>Description: {data.weather?.[0].description}</h1>

                    <input onChange={handleChange} onKeyDown={handleKeypress} value={input} />
                    <button onClick={handleClick} disabled={input.length > 0 ? false : true} >Search</button>
                </div>
            </div>
        )
    }else {
        return <h1>Loading</h1>
    }
}