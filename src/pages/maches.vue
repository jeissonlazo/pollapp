<template>
    <DataTable
        :value="matches"
        stripedRows
        responsiveLayout="scroll"
        tableStyle="min-width: 900px"
        paginator 
        :rows="10" 
        :rowsPerPageOptions="[5, 10, 20, 50]"
    >
        <Column field="id" header="Id" />

        <Column field="schedule" header="Horario">
            <template #body="{ data }">
                {{ data.time_local }}
            </template>
        </Column>

        <Column header="Partido">
            <template #body="{ data }">
                <div class="match">
                    <span>{{ data.team1 }}</span>
                    <span class="vs">vs</span>
                    <span>{{ data.team2 }}</span>
                </div>
            </template>
        </Column>

        <Column header="Pronóstico">
            <template #body="{ data }">
                <div class="prediction">
                    <InputNumber
                        v-model="data.predictionHome"
                        :min="0"
                        :max="20"
                        showButtons
                        buttonLayout="horizontal"
                        inputClass="score-input"
                    />

                    <span>-</span>

                    <InputNumber
                        v-model="data.predictionAway"
                        :min="0"
                        :max="20"
                        showButtons
                        buttonLayout="horizontal"
                        inputClass="score-input"
                    />
                </div>
            </template>
        </Column>

        <Column field="result" header="Resultado">
            <template #body="{ data }">
                <div class="prediction">
                    <div v-if="data.resultHome !== null && data.resultAway !== null">
                        <span class="vs">Sin resultado</span>
                    </div>
                    <div v-else>
                        <span>{{ data.resultHome }}</span>
                    </div>
                    <span>-</span>
                    <div v-if="data.resultHome !== null && data.resultAway !== null">
                        <span class="vs">Sin resultado</span>
                    </div>
                    <div v-else>
                        <span>{{ data.resultAway }}</span>
                    </div>
                </div>
            </template>
        </Column>

        <Column field="points" header="Puntaje">
            <template #body="{ data }">
                <Tag
                    :value="0"
                    severity="success"
                />
            </template>
        </Column>
    </DataTable>
</template>

<script setup lang="ts">
import { ref, onMounted, } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import Card from 'primevue/card';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';
import { useMatchesStore } from '@/stores/matches.store';
import { Match } from '@/types/matches';

const store = useMatchesStore()
const matches = ref<Match[]>(store.matches) ;

onMounted(() => {
    store.loadMatches();
});
</script>

<style scoped>
.match {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-weight: 600;
}

.vs {
    color: var(--p-text-muted-color);
}

.prediction {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

:deep(.score-input) {
    width: 3rem;
    text-align: center;
}
</style>