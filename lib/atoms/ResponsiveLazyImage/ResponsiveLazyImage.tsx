import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ResponsiveLazyImage.css';
import { getParentSelectors } from '@/utils/helpers';
import { LAZYLOAD_THRESHOLD } from '@/utils/constants';

/**
 * @interface IResponsiveLazyImageProps
 *
 */
export interface IResponsiveLazyImageProps {
  /**
   * @property {string}
   * Image title
   * appears on tooltip
   */
  title: string;
  /**
   * @property {string}
   * Image alt text
   * applies on screenreaders
   */
  alt: string;
  /**
   * @property {string}
   * Single Image path
   */
  path: string | undefined;
  /**
   * @property {string}
   * Fallback for Single Image path
   */
  fallback: string;
  /**
   * @property {string}
   * Single Image path for lazy loading state
   */
  lazyFallback?: string;
  /**
   * @property {boolean}
   * Flag to check if the image is available
   */
  isAvailable: boolean;
  /**
   * @property {string}
   * Image srcSet
   */
  srcSet?: string;
  /**
   * @property {string}
   * Image sizes
   */
  sizes?: string;
  /**
   * @property {string}
   * Additional class name for <picture>.
   */
  classNameContainer?: string;
  /**
   * @property {string}
   * Additional class name for <img>
   */
  classNameContent?: string;
  /**
   * @property {string}
   * ID for accesibility purposes
   * bound to external tag on parent component
   * aria-labelledby attribute
   */
  ariaId?: string;
}

const ResponsiveLazyImage = ({
  title,
  alt,
  path,
  fallback,
  lazyFallback,
  isAvailable,
  srcSet,
  sizes,
  classNameContainer,
  classNameContent,
  ariaId,
}: IResponsiveLazyImageProps) => {
  const imagePath = path || fallback;

  const getAltText = () => {
    if (isAvailable && path) {
      return alt;
    } else {
      return `${alt} is not available`;
    }
  };

  const getSizes = () => {
    if (srcSet && sizes) {
      return sizes;
    } else {
      return undefined;
    }
  };

  return (
    <picture className={getParentSelectors(classNameContainer)}>
      <LazyLoadImage
        wrapperClassName='w-full h-inherit'
        className={`w-full ${getParentSelectors(classNameContent)}`}
        srcSet={srcSet ? srcSet : undefined}
        sizes={getSizes()}
        src={imagePath}
        title={title}
        alt={getAltText()}
        id={ariaId ? ariaId : undefined}
        placeholderSrc={lazyFallback ? lazyFallback : imagePath}
        threshold={LAZYLOAD_THRESHOLD}
        effect='blur'
      />
    </picture>
  );
};

export default ResponsiveLazyImage;
