import styles from './ContentsPage.module.css';
import LeftPage from '../LeftPage/LeftPage';

function ContentsPage() {
  return (
    <div>
      <LeftPage />
      <div className={styles['right-page']}>
        <h1 className={styles['page-title']}>Contents</h1>

        <ul className={styles['list']}>
          <hr className={styles['separator']}></hr>
          <li className={styles['li']}>
            <h2>Top Artists</h2>
          </li>
          <li className={styles['li']}>
            <h3>
              <a href={`/short/artists/scrapbook`}>
                Last 4 Weeks
              </a>
            </h3>
          </li>
          <li className={styles['li']}>
            <h3>
              <a href={`/medium/artists/scrapbook`}>
                Last 6 Months
              </a>
            </h3>
          </li>
          <li className={styles['li']}>
            <h3>
              <a href={`/long/artists/scrapbook`}>
                All time
              </a>
            </h3>
          </li>
          <hr className={styles['separator']}></hr>
          <li className={styles['li']}>
            <h2>Top Songs</h2>
          </li>
          <li className={styles['li']}>
            <h3>
              <a href={`/short/tracks/scrapbook`}>
                Last 4 Weeks
              </a>
            </h3>
          </li>
          <li className={styles['li']}>
            <h3>
              <a href={`/medium/tracks/scrapbook`}>
                Last 6 Months
              </a>
            </h3>
          </li>
          <li className={styles['li']}>
            <h3>
              <a href={`/long/tracks/scrapbook`}>
                All time
              </a>
            </h3>
          </li>
        </ul>

        {/* <p className={styles['page-number']}>2</p> */}
      </div>
    </div>
  );
}

export default ContentsPage;
