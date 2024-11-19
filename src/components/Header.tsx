import { Link, NavLink, useNavigate } from 'react-router-dom'
import styles from './Header.module.css'

const navigations = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/movies', label: 'Movies' }
]

export default function Header() {
  const navigate = useNavigate()
  function signIn() {
    navigate(-2)
  }
  return (
    <header className={styles.header}>
      {navigations.map(({ to, label }) => {
        return (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? styles.active : '')}>
            {label}
          </NavLink>
        )
      })}
      <button onClick={signIn}>로그인</button>
    </header>
  )
}
