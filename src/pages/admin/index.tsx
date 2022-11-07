import { Button, TextField } from '@material-ui/core'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <div style={{ width: "80%", margin: '2rem' }}>
      <p style={{ fontSize: '2rem', fontWeight: '500' }}>Admin Login Page</p>
      <p style={{ fontSize: '1.25rem', marginBottom: 0 }}>ID</p>
      <TextField id="outlined-basic" label="sample" variant="outlined" />
      <p style={{ fontSize: '1.25rem', marginBottom: 0 }}>PASS</p>
      <TextField id="outlined-basic" label="sample" variant="outlined" />
    </div>
    </>
  )
}