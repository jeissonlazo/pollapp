import { api } from '../axios';

export interface Match {
  id: number;
  homeTeam: string;
  awayTeam: string;
  date: string;
}

export const MatchesService = {
  async getAll(): Promise<Match[]> {
    const response = await api.get('/matches/');
    return response.data;
  },

  async getById(id: number): Promise<Match> {
    const response = await api.get(`/matches/${id}`);
    return response.data;
  },

  async create(match: Partial<Match>) {
    const response = await api.post('/matches/', match);
    return response.data;
  }
};