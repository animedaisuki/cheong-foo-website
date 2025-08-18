export interface Product {
  id: string;
  title: string;
  availability: string;
  isInStock: boolean;
  imageUrl?: string;
  showCircleBg?: boolean;
  buttonText?: string;
}

export const products: Product[] = [
  {
    id: 'prod-1',
    title: 'Common Area Activity radar Sensor system',
    availability: 'Lead Time: 2–3 Months',
    isInStock: false,
    imageUrl: '/images/prod-1.png',
    showCircleBg: false,
    buttonText: 'Learn More'
  },
  {
    id: 'prod-2',
    title: 'Bathroom Fall Detection radar Sensor',
    availability: 'Lead Time: 2–3 Months',
    isInStock: false,
    imageUrl: '/images/prod-2.png',
    showCircleBg: false,
    buttonText: 'Learn More'
  },
  {
    id: 'prod-3',
    title: 'Breathable Comfort Mattress',
    availability: 'Availability: In Stock',
    isInStock: true,
    imageUrl: '/images/prod-3.png',
    showCircleBg: false,
    buttonText: 'Learn More'
  },
  {
    id: 'prod-4',
    title: 'Commode shower chair',
    availability: 'Availability: In Stock',
    isInStock: true,
    imageUrl: '/images/prod-4.png',
    showCircleBg: false,
    buttonText: 'Learn More'
  }
];
