export interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps) => {
  return (
    <button className='uppercase text-white border border-white p-1 active-border focus-visible-border'>
      {children}
    </button>
  );
};

export default Button;
