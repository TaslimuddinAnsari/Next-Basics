import styles from '../styles/Home.module.css'
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <h2>Home Page</h2>
      <h4>
        <Link href='/blog'>
          <a>Blog</a>
        </Link>
      </h4>

      <h4>
        <Link href='/table'>
          <a>Table</a>
        </Link>
      </h4>
      <h4>
        <Link href='/post'>
          <a>Post</a>
        </Link>
      </h4>
      <h4>
        <Link href='/product'>
          <a>Product</a>
        </Link>
      </h4>
      <h4>
        <Link href='/category'>
          <a>category</a>
        </Link>
      </h4>
      <h4>
        <Link href='/docs'>
          <a>Docs</a>
        </Link>
      </h4>
      <h4>
        <Link href='/users'>
          <a>Users</a>
        </Link>
      </h4>
    </div>
  )
}
