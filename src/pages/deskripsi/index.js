import React, { useEffect } from'react';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components';
import { getDataAnimes, setDataSearch } from '../../config/redux/action/setForm';
import { useDispatch } from 'react-redux';
import './index.css'
const Deskripsi = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    useEffect(() => {
      const getDataMovies = async () => {
        const resData = await getDataAnimes();
        dispatch(setDataSearch('dataSearch', resData))
        
      }
      getDataMovies()
    }, [dispatch])
    return(
        <>
            <div className="ctn-desk">
                <Header/>
                <div className="chd-desk">
                    <div className="bnr-desk">
                        <img src={location.state.data.movie_banner} alt="banner" className="img-banner"/>
                    </div>
                    <div className="fll-desk">
                        <div className="ctn">
                            <div className="chd">
                                <div className="ctn-sdbr rltv-sdbr">
                                    <div className="wrp-img">
                                    <img src={location.state.data.image} alt="gambar movie" className="desk-img"/>
                                    </div>
                                </div>
                                <div className="ctn-mc">
                                    <div className='desk-txt'>
                                        <h2>{location.state.data.original_title_romanised}</h2>
                                        <p>{location.state.data.description}</p>
                                    </div>
                                    <div className="line"></div>
                                    <div className="desk-inf">
                                        <div className="inf-mvi">
                                            <span>
                                                Original Title:
                                            </span>
                                            <span>
                                                {location.state.data.original_title}
                                            </span>
                                        </div>
                                        <div className="inf-mvi">
                                            <span>
                                               Title Romanised:
                                            </span>
                                            <span>
                                                {location.state.data.original_title_romanised}
                                            </span>
                                        </div>
                                        <div className="inf-mvi">
                                            <span>
                                               English Title:
                                            </span>
                                            <span>
                                                {location.state.data.title}
                                            </span>
                                        </div>
                                        <div className="inf-mvi">
                                            <span>
                                               Producer:
                                            </span>
                                            <span>
                                                {location.state.data.producer}
                                            </span>
                                        </div>
                                        <div className="inf-mvi">
                                            <span>
                                               Director:
                                            </span>
                                            <span>
                                                {location.state.data.director}
                                            </span>
                                        </div>
                                        <div className="inf-mvi">
                                            <span>
                                               Release Date:
                                            </span>
                                            <span>
                                                {location.state.data.release_date}
                                            </span>
                                        </div>
                                        <div className="inf-mvi">
                                            <span>
                                               Score:
                                            </span>
                                            <span>
                                                {location.state.data.rt_score}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deskripsi

