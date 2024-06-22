import { CSSProperties } from 'react';
import Heart from './Heart';

const ItemImage = () => {
  const imageStyle: CSSProperties = {
    width: '180px',
    height: '220px',
  };

  return (
    <div>
      <div style={imageStyle} className="imageBox">
        <img src="shoe.jpg" alt="" />
      </div>
      <div>
        <Heart />
      </div>
    </div>
  );
};
export default ItemImage;
