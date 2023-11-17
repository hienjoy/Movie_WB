import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

const IMG_URL = "https://image.tmdb.org/t/p/w1280/"

export default function MovieDetail() {
    const { title } = useParams(); 
    const { state } = useLocation();
    console.log(title);
    console.log(state);
    return (
        <div style={{display: 'flex', marginLeft:'300px', marginTop: '30px' }}>
           <img src={IMG_URL+state.poster_path} width="300px" alt="영화 포스터 사진"/>
            <h1>{title}</h1>
        </div>
    )
}
