//importing the required hooks
import axios from "axios";
import { useState,useEffect } from "react";

//creating the custom hook for fetching the forecastapi data
export function useForecast({city}){
    console.log(city);
    const [forecastloading,setForecastLoading] = useState(true)
    const [forecasterror,setForecasterror] = useState(null)
    const [forecastdata,setForecastdata] = useState(null)

    //api information
    const apiKey='bd5e378503939ddaee76f12ad7a97608'  //api key from sir
    const apiUrl=`https://api.openweathermap.org/data/2.5/forecast/daily`
    useEffect(()=>{  //mounting
        const fetchdata = async()=>{
            try{
                setForecastLoading(true)  //initial loading at the time of fetching the data
                setForecasterror(null) //initially no error
                const response = await axios.get(apiUrl,{
                    params: {
                        q:city,
                        cnt:7,
                        appid:apiKey
                    }
                })
                console.log(response);
                setForecastdata(response.data) //passing the data from the result obtained
                console.log(response);
            }
            catch(error){
                //passing the error if obtained
                setForecasterror(error)
            }
            finally{
                //stop the loading once data is fetched
                setForecastLoading(false)
            }
        }
        //calling the function
        fetchdata()

        return ()=>{} //unmounting-cleaning

    },[city])  //updation phase
    return {forecastloading,forecastdata,forecasterror}
}