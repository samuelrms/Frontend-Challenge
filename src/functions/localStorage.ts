import { ItemClothes } from '@/types/itemClothes';

export const storageFavoritesClothes =
  typeof localStorage !== 'undefined'
    ? localStorage.getItem('favorites')
    : null;

export const saveStorageClothes = (favorites: ItemClothes[]) => {
  localStorage.setItem('favorites', JSON.stringify(favorites));
};
