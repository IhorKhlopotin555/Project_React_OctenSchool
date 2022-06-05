import React, {useEffect} from 'react';
import {singleMovieActions} from "../../redux";
import {useDispatch, useSelector} from "react-redux";
import css from './Movie.module.css'
import {useLocation} from "react-router-dom";
import {urls} from '../../constants/urls'
import {Rating} from 'react-simple-star-rating'
import {Badge} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';


const Movie = ({item}) => {
    const {movie} = useSelector(state => state.singleMovie);
    const {state} = useLocation()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(singleMovieActions.getSingle({id: state}))
    }, [])

    return (
        <div className={css.wrap}>
            <h1 className={css.title}>{movie && movie.original_title}</h1>
            <div className={css.description}>
                <img className={css.picture} src={urls.image + movie?.poster_path}/>
                <h1 className={css.overwiem}>{movie && movie.overview}</h1>
            </div>
            <div className={css.genres}>
                <h1>Stars Rating: {movie && movie.vote_average}</h1>
                <div>{movie && <Rating ratingValue={movie.vote_average * 10} iconsCount={10} readonly={true}/>}</div>
                <div>{movie && movie.genres.map(el => <Badge key={el.name} bg="primary">{el.name}</Badge>)}</div>
            </div>

        </div>
    );
};

export default Movie;