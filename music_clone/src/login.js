import React from 'react'
import { Container } from 'react-bootstrap'

const AUTH_URL="https://accounts.spotify.com/authorize?client_id=9d89f6253b164bbfa1411c55034f8f8b&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"
export default function Login() {
  return (
    <Container className="d-flex justify-center align-items-center" style={{minheight: "100vh" }}>
        <a className='btn btn-sucess btn-lg' herf={AUTH_URL}>Login With Spotify</a>
    </Container>
  )
}
