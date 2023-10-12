import Skeleton from '@mui/material/Skeleton';
import Image from 'next/image';
import { useState } from 'react';

type Props = {
  src: string;
  alt: string;
  width?: string;
  height?: string;
};

const SkeletonLoadingImage: React.FC<Props> = ({ src, alt, width, height }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  return (
    <div style={{ position: 'relative', width, height }}>
      <Skeleton
        variant="text"
        width={width}
        height={height}
        animation="wave"
        style={{ display: imageLoaded ? 'none' : 'block' }}
      />
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        style={{ display: imageLoaded ? 'block' : 'none' }}
        onLoad={handleImageLoad}
      />
    </div>
  );
};

export default SkeletonLoadingImage;
