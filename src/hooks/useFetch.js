import { useState,useEffect } from 'react'

const useFetch = (apiPath) => {

    const[data, setData] = useState([])

    const url =`https://api.themoviedb.org/3/${apiPath}?api_key=b80d59c33d6d57ed9c7e3713f91c188a`

    useEffect(()=>{
        async function fetchData(){
          const response = await fetch(url)
          const json = await response.json()
          setData(json.results)
        }
        fetchData()
      },[url])
  return {data}
}

export default useFetch
