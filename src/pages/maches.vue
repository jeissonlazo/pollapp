<template>
    <DataTable
        :value="matches"
        stripedRows
        responsiveLayout="scroll"
        tableStyle="min-width: 900px"
    >
        <Column field="id" header="Id" />

        <Column field="schedule" header="Horario">
            <template #body="{ data }">
                {{ data.schedule }}
            </template>
        </Column>

        <Column header="Partido">
            <template #body="{ data }">
                <div class="match">
                    <span>{{ data.homeTeam }}</span>
                    <span class="vs">vs</span>
                    <span>{{ data.awayTeam }}</span>
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

        <Column field="result" header="Resultado" />

        <Column field="points" header="Puntaje">
            <template #body="{ data }">
                <Tag
                    :value="data.points"
                    severity="success"
                />
            </template>
        </Column>
    </DataTable>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import InputNumber from 'primevue/inputnumber';
import Tag from 'primevue/tag';

const matches = ref([
    {
        id: 1,
        schedule: '2026-06-11 19:00',
        homeTeam: 'Colombia',
        awayTeam: 'Brasil',
        predictionHome: null,
        predictionAway: null,
        result: '-',
        points: 0
    },
    {
        id: 2,
        schedule: '2026-06-12 15:00',
        homeTeam: 'Argentina',
        awayTeam: 'España',
        predictionHome: null,
        predictionAway: null,
        result: '-',
        points: 0
    }
]);
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