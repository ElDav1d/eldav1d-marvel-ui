export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @property {React.ReactNode}
   * Button children
   */
  children?: React.ReactNode;
}

const Button = ({ children, ...props }: IButtonProps) => (
  <button
    className='uppercase font-bold text-white border border-white px-4 py-2 active-border focus-visible-border'
    {...props}
  >
    {children}
  </button>
);

export default Button;
