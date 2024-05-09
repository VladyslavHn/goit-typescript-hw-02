import { FC } from 'react';
import { Image } from '../../types';
import css from './ImageCard.module.css';

type Prop = {
  image: {
    src: string;
    alt_description: string;
    urls:{
      small: string;
      regular: string;
    }
  };
  onSelect: (isOpen: boolean, image: { src: string; description: string }) => void;
};

const ImageCard: FC<Prop> = ({ image, onSelect }) => {
  return (
    <div className={css.imgBox}>
      <img
        className={css.imgItem}
        src={image.urls.small}
        alt={image.alt_description}
        onClick={() =>
          onSelect(true, {
            src: image.urls.regular,
            description: image.alt_description,
          })
        }
      />
    </div>
  );
};

export default ImageCard;

