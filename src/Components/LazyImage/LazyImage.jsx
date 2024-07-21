import React, { useRef, useState, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';

const LazyImage = ({ dataSrc, alt, isEven }) => {
  const imgRef = useRef(null);
  const [src, setSrc] = useState('');
  const isInViewPort = useInView(imgRef, { once: true });

  useEffect(() => {
    if (isInViewPort && !src) {

        import(`../../assets/webpImages/${dataSrc}.webp`).then(image => {
            setSrc(image.default);
          });
    }
  }, [isInViewPort]);

  return (
    <motion.img
      ref={imgRef}
      src={src}
      alt={alt}
      width={"33%"}
      height={"30rem"}
      className="rounded-full"
      initial={{ x: isEven ? '-100%' : '100%', scale: 1, rotate: 0 }}
      animate={isInViewPort ? { x: 0 } : {}}
      whileHover={{ scale: 0.5, rotate: 360 }}
      transition={{ type: 'spring', stiffness: 30 }}
    />
  );
};

export default LazyImage;