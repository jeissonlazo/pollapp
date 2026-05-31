import { defineStore } from 'pinia';
import { MatchesService } from '@/api/services/matches.service';

export const useMatchesStore = defineStore('matches', {
  state: () => ({
    matches: [],
    loading: false,
  }),

  actions: {
    async loadMatches() {
      try {
        this.loading = true;
        this.matches = await MatchesService.getAll();
      } finally {
        this.loading = false;
      }
    }
  }
});