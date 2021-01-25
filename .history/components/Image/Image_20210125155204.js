import "lazysizes";
import NextImage from 'next/image';

export function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <NextImage 
        className="lazyload blur"
        alt={alt}
        src={previewSrc}
        objectFit="contain"
        width=400
        
      />
    </picture>
  );
}
