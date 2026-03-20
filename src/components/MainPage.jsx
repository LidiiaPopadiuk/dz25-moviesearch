import axios from 'axios'
import { useState, useEffect } from 'react'
export const MainPage = () => {

    const [todayFilms, setTodayFilms] = useState([])

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'
    const mainAPI = `https://api.themoviedb.org/3/trending/movie/day?api_key=${myAPI}`

    useEffect(() => {

        const filmsToday = async () => {
            try {
                const info = await axios.get(mainAPI)
                setTodayFilms(info.data.results)
            } catch (err) {
                console.log(err);
            }
        }

        filmsToday()
    }, [])

    return (
        <main>
            <h1>Trending Today</h1>
            <ul>
                {todayFilms.map(filmName => {
                    return <li>{filmName.title}</li>
                })}
            </ul>
        </main>
    )

}