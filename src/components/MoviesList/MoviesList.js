import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MoviesListCard from "../MovieListCard/MoviesListCard";
import {moviesListCardActions} from "../../redux";
import css from './MoviesList.module.css'
import Switch from "react-switch";

const MoviesList = () => {

    const [tempStatus, setTempStatus] = useState(false)
    const {moviesListCard, next, prev} = useSelector(state => state.moviesListCard);
    const [query, setQuery] = useSearchParams({page: '1'})
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(moviesListCardActions.getAll({page: query.get('page')}))
    }, [query])


    const nextPage = () => {

        const nextPage = +query.get('page') + 1;
        setQuery({page: `${nextPage}`})
    }

    const prevPage = () => {
        const prevPage = +query.get('page') - 1;
        setQuery({page: `${prevPage}`})
    }


    const handleToggleChange = () => {
        setTempStatus(!tempStatus)
    }

    return (
        <div className={`${css.main_loyaut} ${tempStatus ? css.dark : css.light}`}>
            <div className={css.d_flex}>
                {moviesListCard.map(el => <MoviesListCard key={el.Id} item={el}/>)}
            </div>
            <div className={css.botton}>
                <div className={css.buttons}>
                    <button className={css.prev_button} disabled={!prev} onClick={prevPage}>Previous</button>
                    <button className={css.next_button} disabled={!next} onClick={nextPage}>Next</button>
                </div>
                <div className={css.nigth_mode}>
                    <h1>Night Mode</h1>
                    <Switch className={css.switch} onChange={handleToggleChange} checked={tempStatus}/>
                </div>
            </div>
        </div>
    );
};

export default MoviesList;