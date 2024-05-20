export interface DialogOverlayProps {
  testId?: string;
}

const DialogOverlay = ({ testId = 'dialog-overlay', ...props }: DialogOverlayProps) => {
  return (
    <div
      className='absolute top-0 left-0 h-screen w-full bg-black/50'
      data-testid={testId}
      {...props}
    />
  );
};

export default DialogOverlay;
