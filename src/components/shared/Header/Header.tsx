import Link from 'next/link'
import styles from './Header.module.css'

export function Header() {
  console.log('Hola mundo Header')

  return (
    <header>
      <nav>
        <ul className={styles.Header__list}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/store">Store</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
