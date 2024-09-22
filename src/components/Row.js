import React, { useEffect, useState } from 'react'
import axios from '../api/axios';
import MovieModal from './MovieModal/index';
import './Row.css';

export default function Row({title, id, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    //모달 오픈 열고 닫기
    const [modalOpen, setModalOpen] = useState(false);

    //선택된 영화 정보
    const [movieSelected, setMovieSelected] = useState({});

    useEffect(() => {
        fetchMovieData();
    }, []);

    const fetchMovieData = async () => {
        const request = await axios.get(fetchUrl);
        console.log("request", request);
        setMovies(request.data.results);
    }

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

  return (
    <section className="row">
        <h2>{title}</h2>
        <div className="slider">
            <div className="slider__arrow-left"
            onClick={() => {
                document.getElementById(id).scrollLeft -= window.innerWidth;
            }}>
                <span className="arrow">{"<"}</span>
            </div>
            <div id={id} className="row__posters">
                {movies.map((movie) => (
                <img
                    key={movie.id}
                    className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                    src={`https://image.tmdb.org/t/p/original/${
                        isLargeRow ? movie.poster_path : movie.backdrop_path
                    } `}
                    alt={movie.name}
                    onClick={() => {
                        handleClick(movie);
                    }}
                />
                ))}
            </div>
            <div className="slider__arrow-right"
            onClick={() => {
                document.getElementById(id).scrollLeft += window.innerWidth;
            }}>
                <span className="arrow">{">"}</span>
            </div>
        </div>
        {modalOpen && <MovieModal {...movieSelected} setModalOpen={setModalOpen}/>}
    </section>
  )
}
