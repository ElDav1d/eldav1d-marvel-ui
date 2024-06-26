export interface ICardsGridProps {
  children: React.ReactNode;
}

const CardsGrid = ({ children }: ICardsGridProps) => {
  return <div>{children}</div>;
};

export default CardsGrid;
