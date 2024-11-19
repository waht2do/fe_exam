import styles from './Modal.module.css'
import { useNavigate } from 'react-router-dom'

export default function Modal({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  function offModal(n: number) {
    navigate(n)
  }
  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={() => {
          offModal(-1)
        }}></div>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
