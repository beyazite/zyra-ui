import React from 'react'
import styles from './styles.module.css'

export const ZyraButton = ({text, type}) => {
  return  (
                <button   className={styles[type]}>Example Component: {text}</button>
  )
  
}
