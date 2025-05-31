import { supabase } from './supabase.js';

export async function addCarListing(carData) {
  const { data, error } = await supabase
    .from('cars')
    .insert([carData]);

  if (error) {
    console.error('Error adding car listing:', error);
    throw error;
  }

  console.log('Car listing added:', data);
  return data;
}
