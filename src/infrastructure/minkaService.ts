import { Minka } from '@/domain/models';
import { mockMinkas } from './mocks/mockData';

export const getMinkas = async (): Promise<Minka[]> => {
  // Simulamos un pequeño delay para que la UX se sienta real
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockMinkas;
};

export const getMinkaById = async (id: string): Promise<Minka | undefined> => {
  await new Promise(resolve => setTimeout(resolve, 300));
  return mockMinkas.find(minka => minka.id === id);
};
