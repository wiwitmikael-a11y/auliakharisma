
export interface Project {
  id: number;
  title: string;
  category: 'Jalan Raya' | 'Gedung' | 'Jembatan' | 'Renovasi';
  imageUrl: string;
  client: string;
  location: string;
  duration: string;
  scopeOfWork: string[];
}
