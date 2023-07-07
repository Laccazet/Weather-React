import React, { useContext, useEffect } from 'react'
import { dataContext } from '../context/dataContext';
import Content from './Content';
import Loading from './Loading';


export default function App() {

    var {getData, loading} = useContext(dataContext)

    useEffect(() => {
        getData("Kadıköy");
    }, [])

    const handleRender = () => {
        if (!loading) {
            return <Content />
        }else {
            return <Loading />
        }
    }


    return (
        <div className='w-full h-full flex justify-center items-center'>
            <div 
            className='w-3/4 h-3/4 sm:w-[400px] sm:h-[300px] flex justify-center items-center
            border-solid border-[1px] rounded-2xl border-gray-200 gradient'
            >
                {handleRender()}
            </div>
        </div>
    )

}