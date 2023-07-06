import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../context/dataContext';
import { BiSearchAlt } from "react-icons/bi"
import {FaWind} from "react-icons/fa"
import {WiHumidity} from "react-icons/wi"


export default function App() {

    var {data, icon, getData, loading, error} = useContext(dataContext)
    var [input, setInput] = useState("");


    const handleClick = () => {
        getData(input);
        setInput("");
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

    const handleRender = () => {
        if (!loading) {
            return (
                <div className='w-full h-full'>

                    {/*SEARCH*/}
                    <div className='bg-sky-800 w-full h-1/6 flex justify-center items-center gap-3'>
                        
                        <div className='w-3/4 h-3/4'>
                            <input onChange={handleChange} onKeyDown={handleKeypress} value={input}
                            className='w-full h-full rounded-lg text-3xl'
                            />
                            <p className='text-red-600 text-[13px]'>{error}</p>
                        </div>

                        <button onClick={handleClick} disabled={input.length > 0 ? false : true} 
                        className='bg-sky-600 rounded-3xl'
                        ><BiSearchAlt size={50} /></button>
                    </div>

                    {/*STATS*/}
                    <div className='w-full h-5/6 flex flex-row justify-evenly items-center'>
                        <div className='w-4/6 h-full flex flex-col justify-center items-center gap-5'>
                            <h1 className='text-[40px] font-bold leading-none'>{data.name}</h1>                            
                            <div className='w-full flex justify-evenly'>
                                <div className='flex flex-row justify-center items-center'>
                                    <FaWind size={25} />
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='text-[25px]'>{Math.floor(data.wind?.speed)}m/s</h1>
                                        <span className='text-[13px]'>Wind Speed</span>
                                    </div>
                                </div>

                                <div className='flex flex-row justify-center items-center'>
                                    <WiHumidity size={40} />
                                    <div className='flex flex-col justify-center items-center'>
                                        <h1 className='text-[25px]'>{data.main?.humidity}%</h1>
                                        <span className='text-[13px]'>Humidity</span>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className='w-2/6 h-full flex flex-col justify-center items-center relative'>
                            <img src={icon} alt='icon' className='w-5/6 ' />
                            <h1 className='text-[50px] font-bold relative -top-5'>{Math.floor(data.main?.temp)}°</h1>
                        </div>
                    </div>
                </div>
            )
        }else {
            return <h1>Loading...</h1>
        }
    }


    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div className='bg-sky-600 w-[400px] h-[300px] flex justify-center items-center'>
                {handleRender()}
            </div>
        </div>
    )

}