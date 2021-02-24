import { futimes } from "fs/promises";


import styles from '../styles/components/CompletedChallegens.module.css';
export function CompletedChallegens() {
  return (
    <div className={styles.CompletedChallegensContainer}>
      <span>Desafios Completos</span>
      <span>5</span>
    </div>
  );
}