export interface Company {
  id: string;
  name: string;
  imageUrl: string;
  hasShadow?: boolean;
  hasBorder?: boolean;
  width?: string;
  height?: string;
}

export const companies: Company[] = [
  {
    id: 'company-1',
    name: 'Partner Company 1',
    imageUrl: '/images/company-1.png',
    hasShadow: true,
    hasBorder: true
  },
  {
    id: 'company-2', 
    name: 'Partner Company 2',
    imageUrl: '/images/company-3.png',
    hasShadow: true,
    hasBorder: true
  },
  {
    id: 'company-3',
    name: 'Partner Company 3', 
    imageUrl: '/images/company-4.png',
    hasShadow: true,
    hasBorder: true
  },
  {
    id: 'company-4',
    name: 'Partner Company 4',
    imageUrl: '/images/company-1.png', // 重复使用第一张图片
    hasShadow: true,
    hasBorder: true
  },
  {
    id: 'company-5',
    name: 'Partner Company 5',
    imageUrl: '/images/company-3.png', // 重复使用第二张图片
    hasShadow: true,
    hasBorder: true
  }
];
