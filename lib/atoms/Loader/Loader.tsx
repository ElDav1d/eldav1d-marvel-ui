import { MARVEL_RED, LOADER_SIZE } from '@/utils/constants';
import { RingLoader } from 'react-spinners';

export interface ILoaderProps {
  /**
   * The label for loading state accessibility
   * @param {string} loadingLabel
   */
  loadingLabel: string;
}

const Loader = ({ loadingLabel }: ILoaderProps) => (
  <RingLoader
    color={MARVEL_RED}
    size={LOADER_SIZE}
    className='mx-auto my-24'
    role='alert'
    aria-label={loadingLabel}
    aria-busy='true'
    aria-live='polite'
  />
);

export default Loader;
