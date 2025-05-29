// src/firestoreGet.js
import { collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const getCarListings = async () => {
  const snapshot = await getDocs(collection(db, 'cars'));
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};
