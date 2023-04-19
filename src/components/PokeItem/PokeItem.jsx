import React, { useEffect, useState } from 'react'
import api from '../../api'
import { Link } from 'react-router-dom'

import styles from './PokeItem.module.css';

const PokeItem = ({name}) => {
  const [pokemon, setPokemon] = useState({name: 'pokemon'})
  useEffect(() => {
    api.fetchPokemon(name)
    .then(res => setPokemon(res))   
  }, [])
  return (
    <li className={styles.pokemon}>
        <Link to={`/pokemons/${name}`} title={`${name} details`} state={pokemon}>
          <img src={pokemon.imgUrl} title={name} className={styles.pokeImg}/>
          <h3 className={styles.pokeName}>{name}</h3> 
        </Link>
    </li>
  )
}

export default PokeItem