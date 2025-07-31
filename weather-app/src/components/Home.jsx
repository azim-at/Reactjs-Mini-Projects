import { useState } from 'react';
import userContext from '../assets/context/userContext';
import Ui from './Ui';
import { useEffect } from 'react';
import axios from 'axios'

const Home = () => {

    const KEY = '124ce79fac5f73fedd978ec700524fc5';

    const [city, setCity] = useState('')
    const [displayCity, setDisplayCity] = useState('')
    const [temp, setTemp] = useState('')
    const [loading, setLoading] = useState(false)

    function handleSubmit(e) {
        e.preventDefault();
        const URL =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${KEY}&units=metric`;
           async function fetchData() {
                try {
                    setLoading(true)
                    const res = await axios.get(URL)
                    setTemp(res.data.main.temp)
                    setDisplayCity(city)
                    setLoading(false)
                } catch(err) {
                    setLoading(true)
                    console.log(err);
                    setLoading(false)
                }
            }fetchData();
    }

    function clear(e) {
        e.preventDefault();
        setCity('')
        setTemp('')
        setDisplayCity('')
    }

    const currentDate = new Date();
    const month = [
        'January',
        'Febuary',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]

    const currentMonth = month[currentDate.getMonth()];
    const year = currentDate.getFullYear();
    const day = currentDate.getDate();
    const formattedDate = `${currentMonth} ${day}, ${year}`


  return (
    <>
    <userContext.Provider value={{city, setCity, handleSubmit, temp, clear, displayCity, loading, formattedDate}}>
        <Ui />
    </userContext.Provider>
        
    </>
  )
}

export default Home;