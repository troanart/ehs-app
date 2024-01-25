import axios from 'axios';
const apiEndpoint = '/api';

const api = {
  getStudents: async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/students`);
      return response.data;
    } catch (error) {
      console.error('Error fetching students:', error);
      throw error;
    }
  },
  getGroups: async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/groups`);
      return response.data;
    } catch (error) {
      console.error('Error fetching groups:', error);
      throw error;
    }
  },
  getTeachers: async () => {
      try {
        const response = await axios.get(`${apiEndpoint}/teachers`);
        return response.data;
      } catch (error) {
        console.error('Error fetching teachers:', error);
        throw error;
      }
  },
  addStudent: async (student) => {
    try {
      const response = await axios.post(`${apiEndpoint}/students`, student);
      return response.data;
    } catch (error) {
      console.error('Error adding student:', error);
      throw error;
    }
  },
  getAllData: async () => {
    try {
      const response = await axios.get(`${apiEndpoint}/allData`);
      return response.data;
    } catch (error) {
      console.error('Error get all data:', error);
      throw error;
    }
  },
  
}

export default api



