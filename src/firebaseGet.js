// src/firestoreAdd.js
import { db, storage } from './firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection, Timestamp } from 'firebase/firestore';

export const addCarListing = async (car, imageFile) => {
  const imageRef = ref(storage, `cars/${Date.now()}-${imageFile.name}`);
  await uploadBytes(imageRef, imageFile);
  const imageUrl = await getDownloadURL(imageRef);

  const carData = {
    ...car,
    imageUrl,
    createdAt: Timestamp.now()
  };

  await addDoc(collection(db, 'cars'), carData);
};
