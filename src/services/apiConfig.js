// apiConfig.js
// Centralized API configuration for AnimalRescueUI

//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://api.animalrescue.org';
//const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'https://localhost';
const API_BASE_URL = 'https://localhost:44309'; 

const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: {
    animals: '/api/animals',
    adoptions: '/adoptions',
    users: '/users',
    login: '/auth/login',
    register: '/auth/register',
  },
  getEndpoint: (key) => `${API_BASE_URL}${apiConfig.endpoints[key] || ''}`,
};

export default apiConfig;