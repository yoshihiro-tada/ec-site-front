import { Button } from '@material-ui/core'

export default function Home() {
  return (
    <>
    <h1>Top Page</h1>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained" color="primary">Customer Login</Button>{' '}
      </div>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained" color="primary">Items List</Button>{' '}
      </div>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained" color="primary">Categories List</Button>{' '}
      </div>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained" color="primary">Editer Login</Button>{' '}
      </div>
      <div style={{ margin: '0.5em' }}>
        <Button variant="contained" color="primary">Blog</Button>{' '}
      </div>
    </>
  )
}