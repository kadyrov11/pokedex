import React from 'react'
import PokeItem from '../PokeItem'

import styles from './PokeList.module.css';

const PokeList = ({pokemons = []}) => {
  const pokemonElems = pokemons.map(({name}) => <PokeItem key={name} name={name}/>) 

  return (
    <ul className={styles.pokeList} >
      {pokemonElems}
    </ul>
  )
}

export default PokeList