import axios from 'axios'
import './MainPage.css'
import { useState, useEffect } from 'react'
import noImage from '../../img/noImage.png'
import { NavLink, useLocation } from 'react-router-dom'
const MainPage = () => {

    const [todayFilms, setTodayFilms] = useState([])
    const location = useLocation();
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
        <main className='main'>
            <div className="container">
                <h1 className="title" >Trending Today</h1>
                <ul className='filmsList'>
                    {todayFilms.map(film => {
                        return <li className='filmsItem' key={film.id}>
                            <NavLink
                                to={`/movies/${film.id}`}
                                state={{ from: location }}
                            >
                                <img src={film.poster_path
                                    ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                                    : noImage}
                                    alt={film.title} />
                                <div className="movie-info">
                                    <h2>{film.title}</h2>
                                    <p>⭐ {film.vote_average}</p>
                                </div>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </main>
    )

}

export default MainPage