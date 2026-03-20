import { useState } from 'react'
import axios from 'axios'
import noImage from '../../img/noImage.png'
import { NavLink } from 'react-router-dom'
import './Search.css'
export const Search = () => {
    const [query, setQuery] = useState('')
    const [hasSearched, setHasSearched] = useState(false)
    const [searchFilm, setSearchFilm] = useState([])

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!query) return
        try {
            const searchAPI = `https://api.themoviedb.org/3/search/movie?api_key=${myAPI}&query=${query}`
            const films = await axios.get(searchAPI)
            setSearchFilm(films.data.results)
            setHasSearched(true)
            setQuery("")
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <section className="search">
            <div className="container">
                <form onSubmit={handleSearch}>
                    <input id="search"
                        type="text"
                        value={query}
                        placeholder="🔍 Search movies..."
                        autoComplete="off"
                        spellCheck="false"
                        onChange={(e) => setQuery(e.target.value)} />
                    <button type="submit">Search</button>
                </form>

                {hasSearched && searchFilm.length === 0 && (
                    <p className="no-results">No movies found 😢</p>
                )}

                <ul className='listFilms'>
                    {searchFilm.map(film => {
                        return <li className='itemFilms' key={film.id}>

                            <NavLink to={`/film-info/${film.id}`}>
                                <img
                                    src={film.poster_path
                                        ? `https://image.tmdb.org/t/p/w300${film.poster_path}`
                                        : noImage}
                                    alt={film.title}
                                />

                                <div className="info-movie">
                                    <h2>{film.title}</h2>
                                    <p>⭐ {film.vote_average}</p>
                                </div>
                            </NavLink>
                        </li>
                    })}
                </ul>
            </div>
        </section>
    )
}
