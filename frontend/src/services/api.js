import axios from 'axios';

// When the frontend is opened on a different device (e.g. 192.168.29.135:5173),
// "localhost" would point to THAT device, not the Mac running the backend.
// So we derive the backend URL from the current browser's hostname automatically.
const getBaseUrl = () => {
  // If an explicit env variable is set (e.g. in .env), always use that
  if (import.meta.env.VITE_API_BASE_URL) {
    return import.meta.env.VITE_API_BASE_URL;
  }
  // Otherwise derive from where the frontend is being served from
  const hostname = window.location.hostname;
  return `http://${hostname}:8000/api`;
};

const API_BASE_URL = getBaseUrl();

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 15000, // 15-second timeout
});

export const getProducts = async () => {
  try {
    // const response = await api.get('/products');
    // return response.data;
    
    // Returning mock data for now
    return [
      { id: 1, name: 'Atris-Cardio Plus', category: 'Cardiology', description: 'Advanced cardiovascular support.', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=600&auto=format&fit=crop' },
      { id: 2, name: 'Neuroliv SR', category: 'Neurology', description: 'Sustained release neurological care.', image: 'https://images.unsplash.com/photo-1550572017-edb799988b40?q=80&w=600&auto=format&fit=crop' },
      { id: 3, name: 'DermaGlow Forte', category: 'Dermatology', description: 'Premium dermatological formulation.', image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?q=80&w=600&auto=format&fit=crop' },
      { id: 4, name: 'OncoShield', category: 'Oncology', description: 'Targeted oncology therapy.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=600&auto=format&fit=crop' },
    ];
  } catch (error) {
    console.error('Error fetching products', error);
    throw error;
  }
};

export const getCareers = async () => {
  try {
    // const response = await api.get('/careers');
    // return response.data;
    
    // Returning mock data for now
    return [
      { id: 1, title: 'Research Scientist', department: 'R&D', location: 'India', type: 'Full-time' },
      { id: 2, title: 'Clinical Trial Manager', department: 'Clinical Affairs', location: 'India', type: 'Full-time' },
      { id: 3, title: 'Sales Manager', department: 'Sales', location: 'India', type: 'Full-time' },
      { id: 4, title: 'Area Bussiness Manager', department: 'Sales', location: 'India', type: 'Full-time' },
      { id: 5, title: 'Territory Manager', department: 'Sales', location: 'India', type: 'Full-time' },
    ];
  } catch (error) {
    console.error('Error fetching careers', error);
    throw error;
  }
};

export const submitContact = async (data) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error.response?.data || error.message);
    throw error;
  }
};

export const submitApplication = async (data) => {
  try {
    const response = await api.post('/apply', data);
    return response.data;
  } catch (error) {
    console.error('Error submitting job application:', error.response?.data || error.message);
    throw error;
  }
};

export default api;
