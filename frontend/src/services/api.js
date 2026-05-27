import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
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
      { id: 1, title: 'Senior Research Scientist', department: 'R&D', location: 'Mumbai, India', type: 'Full-time' },
      { id: 2, title: 'Clinical Trial Manager', department: 'Clinical Affairs', location: 'London, UK', type: 'Full-time' },
      { id: 3, title: 'Quality Assurance Lead', department: 'Quality', location: 'New Jersey, USA', type: 'Full-time' },
      { id: 4, title: 'Medical Representative', department: 'Sales', location: 'Dubai, UAE', type: 'Full-time' },
    ];
  } catch (error) {
    console.error('Error fetching careers', error);
    throw error;
  }
};

export const submitContact = async (data) => {
  try {
    // const response = await api.post('/contact', data);
    // return response.data;
    
    console.log('Contact form submitted:', data);
    return { success: true, message: 'Message sent successfully' };
  } catch (error) {
    console.error('Error submitting contact', error);
    throw error;
  }
};

export default api;
