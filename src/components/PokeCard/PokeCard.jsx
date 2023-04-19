import React from 'react'
import { useNavigate } from 'react-router-dom'

import styles from './PokeCard.module.css';

const PokeCard = ({imgSrc, name, base_experience, height, weight}) => {
  const navigate = useNavigate()
  
  return (
    <div className={styles.card}>
      <span className={styles.goBack} onClick={() => navigate(-1)}>
        {`<`}
      </span>
      <img src={imgSrc} alt={name} />
      <h2>{name}</h2>
      <p>Height: {height} ft</p>
      <p>Weight: {weight} lb</p>
      <p>Base experience: {base_experience} xp</p>
    </div>
  )
}

export default PokeCard