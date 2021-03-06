import "lazysizes";
import NextImage from 'next/image';

export function Image({ alt, src, previewSrc, webpSrc, className, width=300, height=400 }) {
  return (
    <picture className={className}>
      <source type="image/webp" data-srcset={webpSrc} />
      <source type="image/png" data-srcset={src} />
      <NextImage 
        className={`lazyload blur ${className}`}
        alt={alt}
        src={previewSrc}
        objectFit="cover"
        width={width}
        height={height}
      />
    </picture>
  );
}
