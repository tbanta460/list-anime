import React, { useEffect } from 'react';
import {Header, Card} from '../../components';
import { getDataAnimes, setDataSearch, setMainData  } from '../../config/redux/action/setForm';
import { useSelector, useDispatch } from 'react-redux';
const Home = () => {
    const keyStorage = "SORTANIMES";
    const textSort = ["alphabet", "score", "release"]
    const dispatch = useDispatch();
    const {setDataAnime} = useSelector(state => state)
    const {setData} = setDataAnime;

    
    // feature sort list by Alphabet, Score, and Release date
    const sortListAnimes = async (textTitle, listAnims) => {
      let resSort;
      if(textSort.includes(textTitle) && textTitle === "alphabet"){
        
        resSort = await listAnims.sort((a,b) => a.original_title_romanised.localeCompare(b.original_title_romanised));
      }else if(textSort.includes(textTitle) && textTitle === "score"){
        resSort = await listAnims.sort((a,b) =>  {
          return parseInt(a.rt_score) - parseInt(b.rt_score)
        });
      }else {
        resSort = await listAnims.sort((a,b) =>  {
          return parseInt(a.release_date) - parseInt(b.release_date)
        });
      }
  
      return resSort
    }

    useEffect(() => {
      const getDataMovies = async () => {
        const resData = await getDataAnimes();
        const textTitle = localStorage.getItem(keyStorage)
        if(textTitle === null){

          // If localstorage is null then the anime list will be sorted by default
        
          dispatch(setMainData("setData", resData))
         
        }else{
          // If the localstorage is not null, the anime list will be sorted by the value it has
          const textTitletoObject = JSON.parse(textTitle).name
          const result = await sortListAnimes(textTitletoObject.toString(), resData)
          dispatch(setMainData("setData", Array.from(result)))
        }
        dispatch(setDataSearch('dataSearch', resData))
      }
      getDataMovies();
    }, [dispatch]);
    const handleClickEventSort = async (e) => {
      const textTitle = e.target.id.toString()

      if (typeof Storage !== "undefined") {
        // store value to localstorage if browser supports localstorage
        if(localStorage.getItem(keyStorage) === null){
          localStorage.setItem(keyStorage, JSON.stringify({name: textTitle}));
        }
        await localStorage.removeItem(keyStorage);
        await localStorage.setItem(keyStorage, JSON.stringify({name: textTitle}));
        window.location.reload()
      } else {
        // if browser doesn't support localstorage then use simple sort feature
        alert('Menggunakan Fitur Sort Sederhana Karena Browser Anda Tidak Memiliki LocalStorage')
        sortListAnimes(textTitle, setData)
      }
    }

    // remove localstorage
    const handleClickEventRemoveSort = () => {
      localStorage.removeItem(keyStorage);
      window.location.reload()
    }
    return (
      <div className="App">
        <Header />
        <main>
          <div className="ctn">
            <div className="chd">
              <div className="ctn-sdbr">
                {
                    textSort.map(text => {
                        return (<button className="btn" onClick={handleClickEventSort} key={text}id={text}>Sort By {text.charAt(0).toUpperCase() + text.slice(1)}</button>)
                    })
                }
                <button className="btn" onClick={handleClickEventRemoveSort} id="kembalikan">Default</button>
              </div>
              <div className="ctn-mc">
                <div className='card'>
                  {
                    localStorage.getItem(keyStorage) !== null && setData.length !== 0
                    ?setData.map((result) => {
                      return(
                        <div key={result.id}>
                        <Card res={result}/>
                        </div>
                      )
                    })
                    :setData.length !== 0 && setData.map((result) => {
                        return(
                          <div key={result.id}>
                          <Card res={result}/>
                          </div>
                        )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
}

export default Home