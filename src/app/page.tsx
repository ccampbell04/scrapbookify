'use client';

import CustomButton from '@/components/LoginButton/LoginButton';
import styles from './page.module.css';
import FrontCover from '@/components/FrontCover/FrontCover';
import { useEffect, useState } from 'react';
import ContentsPage from '@/components/ContentsPage/ContentsPage';
import { createCookie } from '@/lib/createCookieService';
import LoginButton from '@/components/LoginButton/LoginButton';

export default function Home() {
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const fragment = window.location.hash.substring(1);
    const params = new URLSearchParams(fragment);
    const accessToken = params.get('access_token');
    if (accessToken) {
      setAccessToken(accessToken);
      createCookie(accessToken);
    }
  }, []);

  if (accessToken) {
    return (
      <body className={styles.body}>
        <ContentsPage />
      </body>
    );
  }

  return (
    <body className={styles.body}>
      <FrontCover>
        <h2>scrapbookify</h2>
        <LoginButton />
      </FrontCover>
    </body>
  );
}
