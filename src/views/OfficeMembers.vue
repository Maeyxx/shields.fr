<template>
    <div class="text-center my-10 fadein animation-duration-500">
        <v-card color="transparent">
            <v-card-title>Bureau de l'association SHIELDS pour {{ currentYear }}</v-card-title>
        </v-card>
    </div>

    <div class="fadein animation-duration-500 mb-15 d-flex justify-center align-center">
        <v-row class="mx-15 text-center" style="width: 20em;">
            <v-col v-for="(member, index) in members" :key="index" :cols="12" :md="6">
                <v-card height="100" color="#091a32">
                    <v-card-title class="text-center">{{ member.pseudo }}</v-card-title>
                    <v-card-subtitle>{{ member.role }}</v-card-subtitle>
                </v-card>
            </v-col>
        </v-row>
    </div>
</template>

<script>

export default {
    name: "OfficeMembersView",

    data() {
        return {
            currentYear: new Date().getFullYear(),
            members: [{
                "id": 1,
                "pseudo": "Rettbl",
                "role": "Président"
            },
            {
                "id": 2,
                "pseudo": "LooXzy",
                "role": "Vice-président"
            },
            {
                "id": 3,
                "pseudo": "Miatak",
                "role": "Trésorier"
            },
            {
                "id": 4,
                "pseudo": "Prezident",
                "role": "Sécretaire"
            },
            {
                "id": 5,
                "pseudo": "Maeyx",
                "role": "Community Manager",
            },
            {
                "id": 6,
                "pseudo": "Onosh",
                "role": "Vice Community Manager"
            },
            ],

        };
    },
    methods: {

    },

};
</script>