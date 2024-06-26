export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @property {string} variant
   * Button variant
   */
  variant?: 'neutral' | 'ghost';
  /**
   * @property {React.ReactNode}
   * Button children
   */
  children?: React.ReactNode;
}

const Button = ({ children, variant = 'neutral', ...props }: IButtonProps) => {
  const getVariant = (variant: string) => {
    if (variant === 'neutral') {
      return 'bg-black';
    }

    return '';
  };

  return (
    <button
      className={`uppercase font-bold text-white border border-white px-4 py-2 active-border focus-visible-border ${getVariant(variant)}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
