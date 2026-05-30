<template>
  <div class="p-4">
    <DataTable :value="users" responsiveLayout="scroll">
      <Column field="position" header="Position" sortable style="width: 20%"></Column>
      <Column field="username" header="Username" sortable style="width: 25%"></Column>
      <Column field="name" header="Name" sortable style="width: 25%"></Column>
      <Column field="score" header="Score" sortable style="width: 20%"></Column>
      <Column header="Image" style="width: 10%">
        <template #body="slotProps">
          <img :src="slotProps.data.image" :alt="slotProps.data.name" class="w-10 h-10 rounded-full" />
        </template>
      </Column>
    </DataTable>
  </div>
</template>

<script lang="ts">
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

export default {
  name: 'Matches',
  components: {
    DataTable,
    Column
  },
  data() {
    return {
      users: [
        {
          position: 1,
          username: 'john_doe',
          name: 'John Doe',
          score: 1250,
          image: 'https://placehold.co/40'
        },
        {
          position: 2,
          username: 'jane_smith',
          name: 'Jane Smith',
          score: 1150,
          image: 'https://placehold.co/40'
        },
        {
          position: 3,
          username: 'mike_johnson',
          name: 'Mike Johnson',
          score: 1050,
          image: 'https://placehold.co/40'
        },
        {
          position: 4,
          username: 'sarah_williams',
          name: 'Sarah Williams',
          score: 950,
          image: 'https://placehold.co/40'
        },
        {
          position: 5,
          username: 'alex_brown',
          name: 'Alex Brown',
          score: 850,
          image: 'https://placehold.co/40'
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
