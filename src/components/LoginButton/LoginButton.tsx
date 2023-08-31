import React from 'react';
import styles from './LoginButton.module.css';

const authEndpoint = 'https://accounts.spotify.com/authorize';
const dev_redirectUri = 'http://localhost:3000/';
const redirectUri = 'https://scrapbookify.vercel.app/';
const clientId = process.env.SPOTIFY_CLIENT_ID;

const scopes = ['user-top-read'];


const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  '%20'
)}&response_type=token&show_dialog=true`;
 
function LoginButton() {
  return (
    <a href={loginUrl} id='signInButton' className={styles.loginButton}>
      Login to Spotify
    </a>
  );
};

export default LoginButton;
