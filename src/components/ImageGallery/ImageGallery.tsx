import { FC } from 'react';
import { Image } from '../../types';
import ImageCard from '../ImageCard/ImageCard'
import css from './ImageGallery.module.css'

type Prop = {
  images: Image[];
  onSelect: (images: Image) => void;
}

const ImageGallery: FC<Prop> = ({images, onSelect}) => {
  return (
    <ul className={css.imgList}>
      {images && images.map(image => (
        <li key={image.id} className={css.imgItem}>
          
            <ImageCard image={image} onSelect={onSelect} />
          
        </li>
        ))}
    </ul>
  )
}

export default ImageGallery
