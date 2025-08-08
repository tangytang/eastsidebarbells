export interface Blog {
  id: number;
  featured?: boolean;
  image: string;
  label?: string;
  width?: number;
  height?: number;
  date: string;
  author: string;
  title: string;
  description?: string;
  category?: string | null; // ✅ allow null here
  layout?: string;
}
