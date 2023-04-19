import React, { useEffect, useState } from 'react'

import api from '../../api';

import PokeList from '../../components/PokeList/PokeList';

const Home = () => { 
  const [pokeList, setPokeList] = useState([])

  useEffect(() => {
      api.fetchPokemons()
      .then(({results}) => {
          setPokeList(results)
        })
    }, [])
      
  return (
    <>
      <PokeList pokemons={pokeList}/>
    </>
    )
  }
  
  export default Home
        
