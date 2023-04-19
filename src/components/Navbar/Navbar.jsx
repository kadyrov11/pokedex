import React from 'react'
import { Link } from 'react-router-dom';

import PokeIcon from '../../images/pokeball.png'

import styles from './Navbar.module.css';

const navItems = ['pokemons', 'about'];

const Navbar = () => {
  const navElems = navItems.map(item => <Link className={styles.navItems} to={`/${item}`}>{item}</Link>) 

  return (
    <nav className={styles.appBar}>
      <h1 className={styles.heading} >Pokedex <img src={PokeIcon} alt="Pokeball" className={styles.img} /></h1>
      <div>
        {navElems}
      </div>
    </nav>
    )
}

export default Navbar;