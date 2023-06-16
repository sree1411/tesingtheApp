import React from 'react';
import Card from '../components/Card';
import useFetch from '../hooks/useFetch';

const MovieList = ({apiPath}) => {
  const {data:movies} = useFetch(apiPath)
  return (
      <main> 
    <section className='max-w-7xl mx-auto py-7'>
     <div className='flex flex-start flex-wrap m-3'>
     {
          movies.map((movie)=>(
            <Card key={movie.id} movie={movie} />
          ))
        }
         
     </div>
    
    </section>
    </main>
    
  )
}

export default MovieList
