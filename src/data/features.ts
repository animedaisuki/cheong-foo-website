export interface Feature {
  id: string;
  title: string;
  description: string;
  iconUrl?: string;
  iconType?: 'svg' | 'custom';
  customIcon?: React.ReactNode;
}

export const features: Feature[] = [
  {
    id: 'safety',
    title: 'Safety',
    description: 'FCC-certified low-frequency radar ensures reliable and harmless protection.',
    iconUrl: '/icons/safety.svg',
    iconType: 'svg'
  },
  {
    id: 'privacy',
    title: 'Privacy',
    description: 'Non-invasive sensors safeguard privacy without entering the room.',
    iconType: 'svg',
    iconUrl: '/icons/lock.svg',
  },
  {
    id: 'accuracy',
    title: 'Accuracy',
    description: 'Real-time AI analyzes posture with precision up to 1cm for unmatched accuracy.',
    iconType: 'svg',
    iconUrl: '/icons/light.svg',
  },
  {
    id: 'multi-room',
    title: 'Multi-Room',
    description: 'One device covers multiple rooms, saving costs and effort.',
    iconType: 'svg',
    iconUrl: '/icons/selectAll.svg',
  }
];
