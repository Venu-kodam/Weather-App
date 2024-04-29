//importing the required hooks
import axios from "axios";
import { useState,useEffect } from "react";

//creating the custom hook for fetching the weatherapi data
export function useWeather({city}){
    console.log(city);
    const [weatherloading,setWeatherLoading] = useState(true)
    const [weathererror,setWeathererror] = useState(null)
    const [weatherdata,setWeatherdata] = useState(null)

    //api information
    const apiKey='22b36585cbc1f2f46e0c111777812817'
    const apiUrl=`https://api.openweathermap.org/data/2.5/weather`
    useEffect(()=>{  //mounting
        const fetchdata = async()=>{
            try{
                setWeatherLoading(true)  //initial loading at the time of fetching the data
                setWeathererror(null) //initially no error
                const response = await axios.get(apiUrl,{
                    params: {
                        q:city,
                        appid:apiKey
                    }
                })
                
                console.log(response);
                setWeatherdata(response.data) //passing the data from the result obtained
                console.log(response);
            }
            catch(error){
                //passing the error if obtained
                setWeathererror(error)
            }
            finally{
                //stop the loading once data is fetched
                setWeatherLoading(false)
            }
        }
        //calling the function
        fetchdata()
        return ()=>{} //unmounting-cleaning

    },[city])  //updation phase
    return {weatherloading,weatherdata,weathererror}
}