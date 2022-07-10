import './App.css';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Search from './components/Search/Search';
import Category from './components/Category/Category';
import axios from "axios";
import { useEffect, useState } from 'react';
function App() {
  const genre = ['Adventure', 'Comedy']
  const [titledata, settitledata] = useState()
  const [titledata2, settitledata2] = useState()
  const [search, setSearch] = useState("")
  const handle = (event) => {
    setSearch(event.target.value)
  }
  useEffect(() => {
    const options = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre[0]}/`,
      params: { page_size: '4', page: '1' },
      headers: {
        'X-RapidAPI-Key': '5d261b28demsh4c85df60f6a8ffdp130a96jsnf4e0b3a53417',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };
    axios.request(options).then(function (response) {
      settitledata(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [search])
  useEffect(() => {
    const optionss = {
      method: 'GET',
      url: `https://moviesminidatabase.p.rapidapi.com/movie/byGen/${genre[1]}/`,
      params: { page_size: '4', page: '1' },
      headers: {
        'X-RapidAPI-Key': '5d261b28demsh4c85df60f6a8ffdp130a96jsnf4e0b3a53417',
        'X-RapidAPI-Host': 'moviesminidatabase.p.rapidapi.com'
      }
    };
    axios.request(optionss).then(function (response) {
      settitledata2(response.data);
    }).catch(function (error) {
      console.error(error);
    });
  }, [search])
  return (
    <div className="App">
      <Header />
      <Hero />
      <div className='last-sec' style={{ margin: "50px 77px" }}>
        <div className="search-container">
          <label htmlFor="search">Search</label>
          <input type="text" placeholder='search' name='search' value={search} onChange={handle} />
        </div>
        {genre.map((data) => {
          return <Category data={data} titledata={titledata} titledata2={titledata2} search={search} onChange={handle} />
        })}
      </div>
    </div>
  );
}

export default App;
