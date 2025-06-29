// AnimalsService.js
// Service for interacting with animal-related API endpoints

import apiConfig from './apiConfig'; // Assuming you have a centralized API config file }

const API_BASE_URL = apiConfig.getEndpoint('animals'); // Use the centralized API config

//const API_BASE_URL = '/api/animals';

export async function getAllAnimals() {
    const apiurl = `${API_BASE_URL}/getAllAnimals`;
    const response = await fetch(`${apiurl}`);
  if (!response.ok) {
    throw new Error('Failed to fetch animals');
  }
  return response.json();
}

export async function getAnimalById(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error(`Failed to fetch animal with id ${id}`);
  }
  return response.json();
}

export async function createAnimal(animalData) {
  const response = await fetch(`${API_BASE_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animalData),
  });
  if (!response.ok) {
    throw new Error('Failed to create animal');
  }
  return response.json();
}

export async function updateAnimal(id, animalData) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(animalData),
  });
  if (!response.ok) {
    throw new Error(`Failed to update animal with id ${id}`);
  }
  return response.json();
}

export async function deleteAnimal(id) {
  const response = await fetch(`${API_BASE_URL}/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error(`Failed to delete animal with id ${id}`);
  }
  return response.json();
}