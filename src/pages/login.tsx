import { Button } from '@material-ui/core'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <h1>Login Page</h1>
    <div style={{ margin: '0.5em' }}>
      <Link href="/">
        <a>
          <Button variant="contained" color="primary">home</Button>{' '}
        </a>
      </Link>
    </div>
    <div style={{ margin: '0.5em' }}>
      <Button variant="contained" color="primary">Items</Button>{' '}
    </div>
    <div style={{ margin: '0.5em' }}>
      <Button variant="contained" color="primary">Categories</Button>{' '}
    </div>
    <div style={{ margin: '0.5em' }}>
      <Button variant="contained" color="primary">Editer Login</Button>{' '}
    </div>
    <div style={{ margin: '0.5em' }}>
      <Link href="/blog">
        <a>
          <Button variant="contained" color="primary">Blog</Button>{' '}
        </a>
      </Link>
    </div>
    </>
  )
}