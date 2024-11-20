import { useNavigate } from 'react-router-dom'
import styles from './Modal.module.css'
import Loader from './Loader'
import clsx from 'clsx'

export default function Modal({
  children,
  loading
}: {
  children: React.ReactNode
  loading: boolean
}) {
  const navigate = useNavigate()

  function offModal() {
    navigate(-1)
  }

  return (
    <div className={styles.modal}>
      <div
        className={styles.overlay}
        onClick={offModal}></div>
      {/* <div className={`${styles.content} ${loading ? styles.content_loading : ''}`}> */}
      <div className={clsx(styles.content, loading && styles.content_loading)}>
        {loading ? <Loader /> : children}
      </div>
    </div>
  )
}
