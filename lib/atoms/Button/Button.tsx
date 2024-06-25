export interface IButtonProps {
  /**
   * @property {React.ReactNode}
   * Button children
   */
  children?: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => (
  <button className='uppercase font-bold text-white border border-white px-4 py-2 active-border focus-visible-border'>
    {children}
  </button>
);

export default Button;
