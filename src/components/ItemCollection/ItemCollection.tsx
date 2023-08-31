import Polaroid from '../Polaroid/Polaroid';
import styles from './itemCollection.module.css';

async function getItems(url: string, accessToken: string | undefined) {
  const headers = {
    Authorization: `Bearer ${accessToken}`,
  };
  const response = await fetch(url, { headers });
  const data = await response.json();
  return data;
}

async function ItemCollection({
  url,
  accessToken,
}: {
  url: string;
  accessToken: string | undefined;
}) {
  const data = await getItems(url, accessToken);
  console.log(data)
  console.log(accessToken)

  return (
    <div className={styles['itemCollection']}>
      {data.items.map((item: any, index: number) => (
        <Polaroid item={item} position={index + 1} key={item.id} />
      ))}
    </div>
  );
}

export default ItemCollection;
