import { Button } from '@material-ui/core'
import Link from 'next/link'

import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <h1>Top Page</h1>
    <div style={{ margin: '0.5em' }}>
      <Link href="/">
        <Button variant="contained" color="primary">home</Button>{' '}
      </Link>
    </div>
    <div style={{ margin: '0.5em' }}>
      <Link href="/login">
        <Button variant="contained" color="primary">Customer Login</Button>{' '}
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
        <Button variant="contained" color="primary">Blog</Button>{' '}
      </Link>
    </div>
    <Footer />
    </>
  )
}