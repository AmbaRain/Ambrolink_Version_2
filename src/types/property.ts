export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  city: string;
  category: 'villas' | 'apartments' | 'penthouses' | 'commercial' | 'plots' | 'exclusive';
  beds: number;
  baths: number;
  sqft: number;
  tag: 'FOR SALE' | 'FEATURED' | 'EXCLUSIVE' | 'NEW';
  description: string;
  yearBuilt: number;
  garage: number;
  architectureStyle: string;
  agent: {
    name: string;
    role: string;
    phone: string;
    email: string;
  };
  amenities: string[];
  gradientTheme: string;
  svgSceneType: 'minimalist-villa' | 'nordic-estate' | 'skyline-penthouse' | 'coastal-pavilion' | 'cedar-modern' | 'palm-oasis' | 'terrace-loft' | 'hillside-manor';
}

export interface CategoryItem {
  id: string;
  key: Property['category'];
  label: string;
  count: number;
  iconName: string;
}

export interface LocationItem {
  id: string;
  city: string;
  state: string;
  propertiesCount: number;
  avgPrice: string;
  iconName: string;
}

export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  location: string;
  avatarText: string;
  content: string;
  rating: number;
  propertyPurchased: string;
}
