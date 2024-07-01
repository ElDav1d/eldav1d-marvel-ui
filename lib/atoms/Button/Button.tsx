export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * @property {boolean} disabled
   * Button disabled
   */
  disabled?: boolean;
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
// test CI

const Button = ({ disabled, children, variant = 'neutral', ...props }: IButtonProps) => {
  const getDisabledStyles = () => {
    if (disabled) {
      return 'opacity-50 cursor-not-allowed';
    }

    return '';
  };

  const getVariant = (variant: string) => {
    if (variant === 'neutral') {
      return 'bg-black';
    }

    return '';
  };

  return (
    <button
      className={`uppercase font-bold text-white border border-white px-4 py-2 active-border focus-visible-border ${getVariant(variant)} ${getDisabledStyles()}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
