<script setup lang="ts">
import BackButton from '../components/ui/BackButton.vue'
import PageHeader from '../components/ui/PageHeader.vue'
import CompanyPresentation from '../components/ui/CompanyPresentation.vue'
import CompetenceTable from '../components/stage/CompetenceTable.vue'
import StageReviews from '../components/stage/StageReviews.vue'

import logoDiagram from '../assets/images/diagram.png'
</script>

<template>
    <div class="min-h-screen bg-white text-black font-sans selection:bg-[#A9A9FF] selection:text-white pb-20">
        <BackButton />

        <div class="max-w-6xl mx-auto pt-24 px-6">
            <PageHeader :title="$t('stage.title')" :subtitle="$t('stage.subtitle')" />

            <div class="space-y-12 animate-fade-in">
                <CompanyPresentation 
                    :logo="logoDiagram"
                    name="Diagram Informatique"
                    :description="$t('stage.company_desc')"
                    :tags="[$t('stage.tag_stage'), $t('stage.duration')]"
                />

                <CompetenceTable />
                <StageReviews />
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}
.animate-fade-in {
    animation: fadeIn 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}
</style>
