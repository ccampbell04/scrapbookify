import LeftPage from '@/components/LeftPage/LeftPage';
import styles from './scrapbook.module.css';
import ItemCollection from '@/components/ItemCollection/ItemCollection';
import { cookies } from 'next/headers';
import CustomButton from '@/components/LoginButton/LoginButton';

function getUrl(range: string, item: string) {
  return `https://api.spotify.com/v1/me/top/${item}?time_range=${range}_term&limit=12&offset=0`;
}

function Scrapbook({ params }: { params: { range: string; item: string } }) {
  const accessToken = cookies().get('accessToken');
  return (
    <body className={styles.body}>
      <LeftPage />
      <div className={styles['right-page']}>
        <h1 className={styles['page-title']}>Top {params.item}</h1>
        <ItemCollection
          url={getUrl(params.range, params.item)}
          accessToken={accessToken?.value}
        />
        {/* <p className={styles['page-number']}>3</p> */}
      </div>
    </body>
  );
}

export default Scrapbook;
