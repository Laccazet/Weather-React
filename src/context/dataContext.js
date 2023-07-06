import { createContext, useState } from "react"


const dataContext = createContext();

export default function ContextProvider( {children} ) {

    var [data, setData] = useState({});
    var [icon, setIcon] = useState("");
    var [input, setInput] = useState("");
    var [error, setError] = useState("");
    var [loading, setLoading] = useState(false);


    const getData = async ( city ) => {
        setLoading(true);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=984ae7ac3cc18ec1f9ae54fa66a170c2`);

        if (response.status === 200) {
            const mainData = await response.json();
            setError("");
            setData(mainData);
            setIcon(`https://openweathermap.org/img/wn/${mainData.weather?.[0].icon}@4x.png`)
            setLoading(false);
        }else {
            setError("Cant find the city you typed, please try again.")
            setLoading(false);
        }

    }

    return (
        <dataContext.Provider value={{
            data,
            getData,
            icon,
            loading,
            input,
            error,
            setInput
        }}>
            {children}
        </dataContext.Provider>
    )
}

export {dataContext};
