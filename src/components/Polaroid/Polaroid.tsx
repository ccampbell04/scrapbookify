import Image from 'next/image';
import styles from './Polaroid.module.css';

function getImagesFromItem(item: any) {
  if (item.album) {
    return item.album.images;
  } else {
    return item.images;
  }
}


function Polaroid(polariodProps: any) {
  const { item, position, type } = polariodProps;
  
  const name = item.name;
  const images = getImagesFromItem(item);
  
  return (
    <div className={styles['polaroid']}>
      <Image src={images[0].url} alt={name} width={60} height={60} />
      <h3>
        {position}. {item.name}
      </h3>
    </div>
  );
}

export default Polaroid;
