import React from 'react';
import { Link } from 'react-router-dom'
const Card = ({res}) => {
    return(
        <>
            <div className="ctn-card">
                <img className="cvr-mvi"src={res.image} alt={`cover ${res.original_title_romanised}`}/>
                <h4 className="ttl-mvi">{res.original_title_romanised}</h4>
                <span>Release Date: {res.release_date}</span>
                <span>Score: {res.rt_score}</span>
                <Link to={{pathname: `/deskripsi/${res.id}`}} state={{data:res}}>
                    <button className="btn-mvi btn">Lihat Desk</button>
                </Link>
            </div>
        </>
    )
}

export default Card