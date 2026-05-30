import axios from 'axios';

export async function getProjects() {
  const response = await axios.get('/data/projects.json');
  return response.data;
}
