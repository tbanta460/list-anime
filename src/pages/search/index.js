import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './index.css'
import { Card, Header } from '../../components';
import { getDataAnimes, setDataSearch } from '../../config/redux/action/setForm';
import { useDispatch } from 'react-redux';
const Search = () => {
    const location = useLocation()
    const dispatch = useDispatch();
    useEffect(() => {
        const getDataAnime = async () => {
            const resData = await getDataAnimes();
            dispatch(setDataSearch('dataSearch', resData))
        }
        if(location.pathname === "/search"){
            getDataAnime()
        }
        
    }, [location,dispatch])
    
    return(
        <>
            <Header />
            <div className="ctn-srch">
                <div className="chd-srch">
                    <h2>Showing all results for <span>{location.state.text.toUpperCase()}</span></h2>
                    <div className="srch-cards">
                        {
                            location.state.data.length !== 0
                            ?location.state.data.map(data => {
                                return(
                                    <Card res={data}/>
                                )
                            })
                            :(<h2>Hasil Tidak Ditemukan</h2>)
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Search