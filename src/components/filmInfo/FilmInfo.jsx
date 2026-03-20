import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import noImage from '../../img/noImage.png'
export const FilmInfo = () => {
    const { id } = useParams()
    const [detail, setDetail] = useState([])

    const myAPI = '91c7f76b1f3882ead0c92576730eccde'

    useEffect(() => {
        const infoAboutFilm = async () => {
            try {
                const detailAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${myAPI}`
                const detailInfo = await axios.get(detailAPI)
                setDetail(detailInfo.data)
            } catch (err) {
                console.log(err);
            }
        }
        infoAboutFilm()
    }, [id])

    if (!detail) return <p>Loading...</p>

    return (
        <section className="film-detail">
            <img src={detail.poster_path
                ? `https://image.tmdb.org/t/p/w300${detail.poster_path}`
                : noImage} alt={detail.original_title} />
            <div className="wrapper">
                <h2>{detail.original_title}</h2>
                <div>
                    <h2>Overview</h2>
                    <h3>{detail.overview}</h3>
                </div>
                <div>
                    <h2>Genres</h2>
                    <h3>{detail.genres.name}</h3>
                </div>
            </div>
        </section>
    )
}