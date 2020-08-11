import React, { useState,useEffect, ChangeEvent } from 'react'

const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=';
const suffix = "&units=imperial&appid=12345";

const WeatherDemo: React.FC = () => {

    const [city, setCity] = useState<string>('')
    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    }
    // const clickHandler = ()=>{

    // }
    useEffect(() => {
        const getWeather = async (city: string) => {
            const response = await fetch(baseUrl + city + suffix);
            const jsonWeather = await response.json();
            console.log(jsonWeather);
        }
        getWeather(city)
    }, [])
  
    return (
        <div>
            <form>
                <input
                    type='text'
                    placeholder='enter here'
                    onChange={changeHandler}
                />
                <button type='submit'>Submit</button>
                <h2>{city}</h2>
            </form>
        </div>
    )
}
 export default WeatherDemo

// import React, { useState, ChangeEvent } from 'react';
// const App: React.FC = () => {
//   const [city, setCity] = useState('');
//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setCity(event.target.value);
//   }
//   return (
//     <div>
//       <form>
//         <input type="text" placeholder="Enter city"
//                onChange = {handleChange} />
//         <button type="submit">Get weather</button>
//         <h2>City: {city}</h2>
//       </form>
//     </div>
//   );
// }

// export default App;



