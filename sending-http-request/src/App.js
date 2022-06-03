import React, {useEffect, useState} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(async () => {
    try{
      let fetchedData = await fetch('https://swapi.dev/api/films/')
    const jsonData = await fetchedData.json() 
    
    setData(jsonData)
     
    } catch (e) {
      console.log('You code has some errors, my friend, don"t worry, its to imporve your coding, take this in a positive way ', e);
    }
    
    
  }, []);
  const dummyMovies = [
    {
      id: 1,
      title: 'Some Dummy Movie',
      openingText: 'This is the opening text of the movie',
      releaseDate: '2021-05-18',
    },
    {
      id: 2,
      title: 'Some Dummy Movie 2',
      openingText: 'This is the second opening text of the movie',
      releaseDate: '2021-05-19',
    },
  ];

  return (
    <React.Fragment>
      <section>
        <button>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={data} />
      </section>
    </React.Fragment>
  );
}

export default App;
