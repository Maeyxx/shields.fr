<template>
    <div class="justify-content-center flex">
        <img :src="logo" style="height: 150px;">
    </div>

    <div class="justify-center fadein animation-duration-500 mb-5">
        <v-row class="text-center">
            <v-col cols="12" md="12">Les compétitions auquels nous participons</v-col>
        </v-row>
        <v-row class="mx-15 justify-center">
            <v-col v-for="competition in competitions" cols="12" md="4" sm="6" class="d-flex">

                <v-dialog width="600">
                    <template v-slot:activator="{ props }">
                        <v-card v-bind="props" width="500" color="#091a32" class=" align-center justify-center hover-card"
                            rounded="xl">
                            <v-row class="mt-1 ml-1 mr-1">
                                <v-col cols="12" md="6" class="text-left">{{ competition.title }}</v-col>
                                <v-col cols="12" md="6" class="text-right"><v-chip v-if="competition.isFinished"
                                        small>Compétition
                                        terminée</v-chip> <v-chip v-else small>{{ competition.datetime }}</v-chip></v-col>
                            </v-row>

                            <v-card-subtitle>
                                <font-awesome-icon icon="calendar-days" />
                                {{ competition.year }}</v-card-subtitle>
                            <v-divider vertical></v-divider>
                            <v-card-text class="text-center">
                                <v-img :src="competition.logo" width="120" height="120" class="mx-auto"></v-img>
                            </v-card-text>
                            <v-card-text>{{ competition.description }}</v-card-text>
                        </v-card>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card :title="competition.title" height="300" color="#091a32">
                            <v-card-subtitle>Participants à la compétition</v-card-subtitle>
                            <v-card-text>
                                <v-row class="mx-15 justify-center">
                                    <v-col v-for="member in competition.members" cols="12" md="5">
                                        <v-card color="" min-width="100">
                                            <v-card-title class="text-center">{{ member.pseudo }}</v-card-title>
                                        </v-card>
                                    </v-col>

                                </v-row>

                            </v-card-text>
                        </v-card>
                    </template>


                </v-dialog>

                <!-- <v-card width="500" color="#091a32" class=" align-center justify-center hover-card" rounded="xl">
            <v-card-title>
              {{ competition.title }}
            </v-card-title>
            <v-card-subtitle> <font-awesome-icon icon="calendar-days" />
              2023</v-card-subtitle>
            <v-divider vertical></v-divider>
            <v-card-text class="text-center">
              <v-img :src="competition.logo" width="120" class="mx-auto"></v-img>
            </v-card-text>
            <v-card-text>{{ competition.description }}</v-card-text>
          </v-card> -->
            </v-col>
        </v-row>
    </div>
</template>
  
<style>
.hover-card:hover {
    cursor: pointer;
    transform: scale(1.02);
    transition: all 0.5s ease-in-out;
}
</style>
  
<script>
// @ is an alias to /src

import moment from "moment";

moment.locale("fr");

export default {
    name: "HomeView",

    data() {
        return {
            competitions: [

                {
                    id: 2,
                    title: "BREIZHCTF",
                    logo: require("@/assets/images/competitions/breizhctf.png"),
                    year: 2024,
                    members: [],
                    description: "Le BreizhCTF est une compétition de sécurité informatique de type CTF (Capture the flag). 12h de challenge pendant la nuit de vendredi à samedi ! C’est ce qui attend les 600 participants de l’édition 2024. Cet événement est ouvert à tous, professionnels, étudiants, passionnés ou curieux de sécurité informatique.",
                    isFinished: false,
                    datetime: moment("2024-04-01 00:00:00").fromNow()
                },
                {
                    id: 1,
                    title: "TRACS",
                    logo: require("@/assets/images/competitions/tracs.png"),
                    year: 2023,
                    description: "TRACS est une compétition de data science, de sécurité et de cryptanalyse organisée conjointement par ViaRézo et la DGSE. La cinquième édition de ce challenge inter-écoles aura lieu à CentraleSupélec le 2 décembre 2023.",
                    members: [{
                        id: 1,
                        pseudo: "Rettbl",
                        avatarUrl: ""
                    },
                    {
                        id: 2,
                        pseudo: "Miatak",
                        avatarUrl: ""
                    },
                    {
                        id: 3,
                        pseudo: "Arkoo",
                        avatarUrl: ""
                    },
                    {
                        id: 4,
                        pseudo: "Prezident",
                        avatarUrl: ""
                    },
                    {
                        id: 5,
                        pseudo: "Maeyx",
                        avatarUrl: ""
                    },
                    ],
                    isFinished: false,
                    datetime: moment("2023-12-02 08:00:00").fromNow()
                },
                {
                    id: 3,
                    title: "ECW",
                    logo: require("@/assets/images/competitions/ecw.webp"),
                    year: 2023,
                    members: [],
                    description: "L'ECW est une compétition de cybersécurité ayant lieu à Rennes. Cette compétition compte plusieurs challenges de sécurité informatique, de cryptographie, de stéganographie, de reverse engineering, de web, de forensics, de programmation, de réseau. Cette compétition est ouverte à tous, professionnels, étudiants",
                    isFinished: true,
                    datetime: moment("2023-11-22 08:00:00").fromNow()


                }
            ],
            responsiveOptions: [{
                breakpoint: '600px',
                numVisible: 1,
                numScroll: 1
            },

            ],
            logo: require("@/assets/logo.png"),
            shop_items: [{
                id: 1,
                title: "Pack 1",
                description: "Bénéficiez d'un plusieurs goodies de l'association shields grâce à ce pack",
                goodies: [
                    "Stickers",
                    "Mug",
                ],
                price: 10
            },
            {
                id: 2,
                title: "Pack 2",
                description: "Bénéficiez d'un plusieurs goodies de l'association shields grâce à ce pack",
                goodies: [
                    "Stickers",
                    "Mug",
                    "T-shirt"
                ],
                price: 50

            },
            {
                id: 3,
                title: "Pack 3",
                description: "Bénéficiez d'un plusieurs goodies de l'association shields grâce à ce pack",
                goodies: [
                    "Stickers",
                    "Mug",
                    "Sweat",
                    "t-shirt"
                ],
                price: 70,
            }
            ]
        };
    },
    methods: {
        showSuccess() {
            toast.add({
                severity: 'success',
                summary: 'Success Message',
                detail: 'Order submitted',
                life: 3000
            });
        },
        bizi() {
            this.$confetti.start({
                particles: [{
                    type: 'image',
                    url: require('@/assets/bizi.png'),
                    size: 64,
                },

                ],
            });
        },
    },

};
</script>