<script setup lang="ts">
import { ref } from 'vue'
import BackButton from '../components/ui/BackButton.vue'
import PageHeader from '../components/ui/PageHeader.vue'
import CompanyPresentation from '../components/ui/CompanyPresentation.vue'
import MissionItem from '../components/alternance/MissionItem.vue'
import BilanSection from '../components/alternance/BilanSection.vue'

import logoDiagram from '../assets/images/groupe_diagram.png'

const getProofImageUrl = (name: string) => {
  return new URL(`../assets/images/proofApprenticeship/${name}`, import.meta.url).href
}

const alternanceMissions = ref([
    {
        id: 1,
        title: 'alternance.m1_title',
        description: 'alternance.m1_desc',
        isOpen: true,
        skills: [
            { id: 'Réaliser', level: 'alternance.skills.l3', desc: 'alternance.skills.s1' },
            { id: 'Optimiser', level: 'alternance.skills.l2', desc: 'alternance.skills.s2' }
        ],
        preuves: [
            { type: 'image', label: 'alternance.proofs.caisse', link: getProofImageUrl('Caisse.png') },
            { type: 'image', label: 'alternance.proofs.caisse_connexion', link: getProofImageUrl('SYSTEME_CONNEXION_CAISSE.png') },
            { type: 'image', label: 'alternance.proofs.caisse_fond', link: getProofImageUrl('FOND_CAISSE_caisse.png') },
            { type: 'image', label: 'alternance.proofs.caisse_cloture', link: getProofImageUrl('CHOIX_JOUR_CLOTURE_CAISSE.png') },
            { type: 'image', label: 'alternance.proofs.caisse_avoir', link: getProofImageUrl('Creation_avoir_remboursement_caisse.png') },
            { type: 'image', label: 'alternance.proofs.caisse_tickets', link: getProofImageUrl('LISTE_TICKET_CAISSE.png') },
            { type: 'image', label: 'alternance.proofs.caisse_commandes', link: getProofImageUrl('LISTE_COMMANDE_CAISSE.png') },
            { type: 'image', label: 'alternance.proofs.caisse_fidelite', link: getProofImageUrl('fidelite.png') }
        ]
    },
    {
        id: 2,
        title: 'alternance.m2_title',
        description: 'alternance.m2_desc',
        isOpen: false,
        skills: [
            { id: 'Réaliser', level: 'alternance.skills.l3', desc: 'alternance.skills.s1' },
            { id: 'Optimiser', level: 'alternance.skills.l2', desc: 'alternance.skills.s2' }
        ],
        preuves: [
            { type: 'image', label: 'alternance.proofs.erp_dashboard', link: getProofImageUrl('DASHBOARD_ERP.png') },
            { type: 'image', label: 'alternance.proofs.erp_produits', link: getProofImageUrl('LISTE_PRODUIT_ERP.png') },
            { type: 'image', label: 'alternance.proofs.erp_commande', link: getProofImageUrl('commande_erp.png') },
            { type: 'image', label: 'alternance.proofs.erp_tickets', link: getProofImageUrl('liste_ticket_erp.png') },
            { type: 'image', label: 'alternance.proofs.erp_promo', link: getProofImageUrl('PROMOTION_ERP.png') },
            { type: 'image', label: 'alternance.proofs.erp_promo_art', link: getProofImageUrl('ARTICLE_PROMOTION_ERP.png') }
        ]
    },
    {
        id: 3,
        title: 'alternance.m3_title',
        description: 'alternance.m3_desc',
        isOpen: false,
        skills: [
            { id: 'Déployer', level: 'alternance.skills.l2', desc: 'alternance.skills.s3' },
            { id: 'Collaborer', level: 'alternance.skills.l3', desc: 'alternance.skills.s5' }
        ],
        preuves: [
            { type: 'image', label: 'alternance.proofs.mobile_inventaire', link: getProofImageUrl('mobile_inventaire.png') },
            { type: 'image', label: 'alternance.proofs.mobile_saisie', link: getProofImageUrl('inventaire2png.png') },
            { type: 'image', label: 'alternance.proofs.schema_sync', link: getProofImageUrl('shema_bidirectionnel.png') }
        ]
    },
    {
        id: 4,
        title: 'alternance.m4_title',
        description: 'alternance.m4_desc',
        isOpen: false,
        skills: [
            { id: 'Administrer', level: 'alternance.skills.l3', desc: 'alternance.skills.s4' },
            { id: 'Optimiser', level: 'alternance.skills.l2', desc: 'alternance.skills.s2' }
        ],
        preuves: [
            { type: 'image', label: 'alternance.proofs.windev_ide', link: getProofImageUrl('WINDEV.png') },
            { type: 'image', label: 'alternance.proofs.hfsql_control', link: getProofImageUrl('CENTRE_CONTROLE_HFSQL.png') },
            { type: 'image', label: 'alternance.proofs.windev_query', link: getProofImageUrl('REQUETE_WINDEV.png') },
            { type: 'image', label: 'alternance.proofs.windev_report', link: getProofImageUrl('ETAT_WINDEV.png') },
            { type: 'image', label: 'alternance.proofs.ticket_layout', link: getProofImageUrl('diapo_ticket.png') }
        ]
    }
])
</script>

<template>
    <div class="min-h-screen bg-white text-black font-sans selection:bg-[#A9A9FF] selection:text-white pb-20">
        <BackButton />

        <div class="max-w-6xl mx-auto pt-24 px-6">
            <PageHeader :title="$t('alternance.title')" :subtitle="$t('alternance.subtitle')" />

            <div class="space-y-12 animate-fade-in">
                <CompanyPresentation 
                    :logo="logoDiagram"
                    name="Groupe Diagram"
                    :description="$t('alternance.company_desc')"
                    :tags="[$t('alternance.tag_alt'), 'BUT Informatique', $t('alternance.tag_date')]"
                />

                <!-- Missions -->
                <div class="mt-16">
                    <h3 class="text-3xl font-bold mb-8 flex items-center gap-4 text-black">
                        <div class="bg-gradient-to-br from-[#A9A9FF] to-[#D9D9D9] w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-[#A9A9FF]/30">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        </div>
                        {{ $t('alternance.missions_title') }}
                    </h3>
                    
                    <div class="space-y-6 relative">
                        <div class="absolute left-6 top-10 bottom-10 w-0.5 bg-gradient-to-b from-[#A9A9FF]/50 via-[#D9D9D9]/50 to-transparent hidden md:block"></div>
                        <MissionItem v-for="mission in alternanceMissions" :key="mission.id" :mission="mission" />
                    </div>
                </div>
                
                <BilanSection :title="$t('alternance.bilan_title')" :description="$t('alternance.bilan_desc')" />
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
