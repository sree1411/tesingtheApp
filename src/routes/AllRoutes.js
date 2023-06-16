import React from 'react'
import {Routes,Route} from 'react-router-dom'
import MovieList from '../page/MovieList'
import MovieDetails from '../page/MovieDetails'
import PageNotFound from '../page/PageNotFound'
import Search from '../page/Search'
const AllRoutes = () => {
  return (
    <div className='background-red'>
       <Routes>
         <Route path ="/"   element={<MovieList apiPath="movie/now_playing"/> } />
         <Route path ="movies/:id"   element={<MovieDetails/> } />
         <Route path ="movie/popular"   element={<MovieList  apiPath="movie/popular" /> } />
         <Route path ="movie/top"   element={<MovieList apiPath="movie/top_rated"  /> } />
         <Route path ="movie/upcoming"   element={<MovieList apiPath="movie/upcoming"/> } />
         <Route path ="*"   element={<PageNotFound/> } />
         <Route path ="search"   element={<Search/> } />
       </Routes>
  </div>
  )
}

export default AllRoutes
