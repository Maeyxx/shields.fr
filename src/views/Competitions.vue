<template>
    <div class="main-container">

        <div class="justify-content-center flex">
            <img :src="logo" style="height: 150px;">
        </div>
        <div class="justify-center fadein animation-duration-500 mb-5">
            <v-row class="text-center">
                <v-col cols="12" md="12">Les compétitions auquels nous participons</v-col>
            </v-row>
            <v-row class="mx-15">
                <v-col v-for="competition in competitions" cols="12" md="4" sm="6" class="d-flex">

                    <v-dialog width="800">
                        <template v-slot:activator="{ props }">
                            <v-card v-bind="props" width="500" color="#091a32"
                                class=" align-center justify-center hover-card" rounded="xl">
                                <v-row class="mt-1 ml-1 mr-1">
                                    <v-col cols="12" md="6" class="text-left">{{ competition.title }}</v-col>
                                    <v-col cols="12" md="6" class="text-right">
                                        <v-chip v-if="competition.isFinished" small color="#e85a1d">Compétition
                                            terminée</v-chip>
                                        <v-chip v-else small>{{ competition.datetimeDisplay }}</v-chip>
                                    </v-col>
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
                            <v-card :title="competition.title" height="100%" color="#091a32">
                                <v-card-subtitle class="ml-2">Participants à la compétition</v-card-subtitle>
                                <div v-if="competition.hasOwnProperty('teams')">
                                    <v-card v-for="(team, index) in competition.teams" color="transparent">

                                        <v-card-title>{{ team.name }}</v-card-title>
                                        <v-card-text >
                                            <v-row class="mx-15 justify-center">
                                                <v-col v-for="member in team.members" cols="12" md="5">
                                                    <v-card color="" min-width="100">
                                                        <v-card-title class="text-center">{{ member.pseudo }}</v-card-title>
                                                    </v-card>
                                                </v-col>
                                            </v-row>
                                            <v-divider v-if="index != competition.teams.length - 1" class="my-7"></v-divider>
                                        </v-card-text>                            
                                    </v-card>
                                </div>
                                <div v-else>

                                    <v-card-text v-if="competition.members.length > 0">
                                        <v-row class="mx-15 justify-center">
                                            <v-col v-for="member in competition.members" cols="12" md="5">
                                                <v-card color="" min-width="100">
                                                    <v-card-title class="text-center">{{ member.pseudo }}</v-card-title>
                                                </v-card>
                                            </v-col>
                                        </v-row>
                                    </v-card-text>
                                </div>
                                <!-- <v-card-text v-else class="text-center">
                                Aucun participant(s) pour le moment
                            </v-card-text> -->
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
        name: "CompetitionsView",

        data() {
            return {
                competitions: [{
                        id: 3,
                        title: "BREIZHCTF",
                        logo: require("@/assets/images/competitions/breizhctf.png"),
                        year: 2024,
                        teams: [{
                                id: 1,
                                name: "FireFoxyFamily",
                                members: [{
                                        id: 1,
                                        pseudo: "Rettbl",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 2,
                                        pseudo: "Maeyx",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 3,
                                        pseudo: "miatak",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 4,
                                        pseudo: "Foxy",
                                        avatarUrl: ""
                                    },

                                ]
                            },
                            {
                                id: 2,
                                name: "Les Cyber Crackito",
                                members: [{
                                        id: 1,
                                        pseudo: "LooXzy",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 2,
                                        pseudo: "Minvinea",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 3,
                                        pseudo: "Tranos",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 4,
                                        pseudo: "Madore",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 5,
                                        pseudo: "C0ne"
                                    }

                                ]
                            },
                            {
                                id: 3,
                                name: "Les Samouraïs du clavier",
                                members: [{
                                        id: 1,
                                        pseudo: "Prezident",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 2,
                                        pseudo: "ArKoo",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 3,
                                        pseudo: "CountZero",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 4,
                                        pseudo: "FearNyx",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 5,
                                        pseudo: "Arslan"

                                    }
                                ]
                            },
                            {
                                id: 4,
                                name: "Team Crouton",
                                members: [{
                                        id: 1,
                                        pseudo: "AZOGg",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 2,
                                        pseudo: "Clooope1",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 3,
                                        pseudo: "Chokopounko",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 4,
                                        pseudo: "BDM",
                                        avatarUrl: ""
                                    },

                                ]
                            },
                            {
                                id: 5,
                                name: "Sans nom",
                                members: [{
                                        id: 1,
                                        pseudo: "Softomine",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 2,
                                        pseudo: "Maïaou",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 3,
                                        pseudo: "Sharp",
                                        avatarUrl: ""
                                    },
                                    {
                                        id: 4,
                                        pseudo: "Phantom",
                                        avatarUrl: ""
                                    },

                                ]
                            },

                        ],

                        description: "Le BreizhCTF est une compétition de sécurité informatique de type CTF (Capture the flag). 12h de challenge pendant la nuit de vendredi à samedi ! C’est ce qui attend les 600 participants de l’édition 2024. Cet événement est ouvert à tous, professionnels, étudiants, passionnés ou curieux de sécurité informatique.",
                        isFinished: false,
                        datetime: "2024-05-17",
                        datetimeDisplay: moment("2024-05-17 00:00:00").fromNow()
                    },
                    {
                        id: 2,
                        title: "HACKLANTIQUE",
                        logo: require("@/assets/images/competitions/hacklantique.jpg"),
                        year: 2024,
                        members: [{
                                id: 1,
                                pseudo: "Rettbl",
                                avatarUrl: ""
                            },
                            {
                                id: 2,
                                pseudo: "FearNyx",
                                avatarUrl: ""
                            },
                            {
                                id: 3,
                                pseudo: "Minvinea",
                                avatarUrl: ""
                            },
                            {
                                id: 4,
                                pseudo: "LooXzy",
                                avatarUrl: ""
                            },
                            {
                                id: 5,
                                pseudo: "C0ne",
                                avatarUrl: ""
                            },
                            {
                                id: 6,
                                pseudo: "Madore",
                                avatarUrl: ""
                            },
                            {
                                id: 7,
                                pseudo: "CountZero",
                                avatarUrl: ""
                            },
                            {
                                id: 8,
                                pseudo: "Tranos",
                                avatarUrl: ""
                            },
                            {
                                id: 9,
                                pseudo: "Prezident",
                                avatarUrl: ""
                            },
                            {
                                id: 10,
                                pseudo: "ArKoo",
                                avatarUrl: ""
                            },
                            {
                                id: 11,
                                pseudo: "Arslan",
                                avatarUrl: ""
                            },
                        ],
                        description: "CTF Jeorpardy de niveau débutant à intermédiaire, à visée pédagogique | Organisé par 8 étudiants d'IMT Atlantique.",
                        isFinished: false,
                        datetime: "2024-03-09",
                        datetimeDisplay: moment("2024-03-09 00:00:00").fromNow()
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
                        datetime: "2023-12-02",
                        datetimeDisplay: moment("2023-12-02 08:00:00").fromNow()
                    },
                    {
                        id: 3,
                        title: "ECW",
                        logo: require("@/assets/images/competitions/ecw.webp"),
                        year: 2023,
                        members: [],
                        description: "L'ECW est une compétition de cybersécurité ayant lieu à Rennes. Cette compétition compte plusieurs challenges de sécurité informatique, de cryptographie, de stéganographie, de reverse engineering, de web, de forensics, de programmation, de réseau. Cette compétition est ouverte à tous, professionnels, étudiants",
                        isFinished: true,
                        datetime: "2023-11-22",
                        datetimeDisplay: moment("2023-11-22 08:00:00").fromNow()


                    }
                ],
                logo: require("@/assets/logo_dls.png"),
            };
        },
        created() {
            let currentDateTime = moment();
            this.competitions.forEach(competition => {
                if (moment(competition.datetime).isBefore(currentDateTime)) {
                    competition.isFinished = true;
                } else {
                    competition.isFinished = false;
                }
            })
        },

    };
</script>