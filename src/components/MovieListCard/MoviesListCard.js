import React, {useCallback} from 'react';
import {useNavigate} from "react-router-dom";
import {urls} from '../../constants/urls'
import css from './MovieListCard.module.css'

const MoviesListCard = ({item}) => {

    const navigate = useNavigate();

    return (
        <div className={css.main_block} onClick={() => navigate('/movie', {state: item.id})}>
            <img className={css.card_img} src={urls.image + item?.poster_path}/>
            <p>{item?.original_title}</p>
        </div>
    );
};

export default MoviesListCard;