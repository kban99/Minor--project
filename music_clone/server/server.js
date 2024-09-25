const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
  const SpotifyWebApi = require('spotify-web-api-node');

  const app = express();

  app,post('/login',(req, res)=>{
    const code = req.body.code
    const spotifyApi = new SpotifyWebApi({
      redirectUri: 'https://localhost:3000',
      clientID: '9d89f6253b164bbfa1411c55034f8f8b',               
      clientSecret: 'dbd3e7b3772e4cf99ab9dffa3965be97dbd3e7b3772e4cf99ab9dffa3965be97'
    })

    spotifyApi.authorizationCodeGrant(code).then(data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in
      })
    })
    .catch(() => {
      sendStatus(400)
    })
  })