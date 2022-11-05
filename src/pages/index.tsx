import { Button } from '@material-ui/core'
import Link from 'next/link'

import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
    <Header />
    <div style={{ marginTop: 64, marginBottom: 16 }}>
      <p>ここにSwiper(画像のスライダー)を導入</p>
    </div>
    <h2 style={{ marginTop: 8 }}></h2>

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