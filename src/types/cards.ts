export interface Card {
  id: number;
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export interface CardsProps {
  activeFilter: string;
}
