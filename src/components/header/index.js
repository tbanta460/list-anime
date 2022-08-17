import React from 'react';
import { Link } from 'react-router-dom';
import { setSearchValue, setDataSearch } from '../../config/redux/action/setForm';
import { useSelector, useDispatch} from 'react-redux';
import "./index.css"
const Header = () => {
    const dispatch = useDispatch();
    const {setValue, setDataAnime} = useSelector(state => state)
    const {valueSearch} = setValue
    const {dataSearch} = setDataAnime

    // feature to filter anime list data
    const filterData = (dataAnimes, valueToUpperCase) => {
        const filterData = dataAnimes.filter(res => {
            const indexTitle = res.original_title_romanised.toUpperCase().indexOf(valueToUpperCase)
            if(indexTitle >= 0){
                return res
            }
        })
        dispatch(setDataSearch("dataSearch", filterData))
    }
    const handleChangeEvent = (e) => {
        const valueToUpperCase = e.target.value.toUpperCase()
        filterData(dataSearch, valueToUpperCase)
        dispatch(setSearchValue("valueSearch",e.target.value))
    }
    return(
        <>
        <header>
            <div className="ctn-hdr">
                <Link to="/" className="link">
                <h3>Home</h3>
                </Link>
                <input type="text" placeholder="Mencari" className="srch" value={valueSearch} name="search" onChange={handleChangeEvent}/>
                <Link to={{
                    pathname: "/search",
                    search: `?search=${valueSearch}`
                }} state={{ data: dataSearch, text:valueSearch }}>
                <button className="btn-src btn" onClick={() => dispatch(setSearchValue("valueSearch",""))}>Cari</button>
                </Link>
            </div>
        </header>
        </>
    )
}
export default Header