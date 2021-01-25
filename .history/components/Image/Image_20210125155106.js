import "lazysizes";
import NextImage from 'next/image';

export function Image({ alt, src, previewSrc, webpSrc, className }) {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <Image 
        className="lazyload blur"
        alt={alt}
        src={previewSrc}
        
      />
    </picture>
  );
}
