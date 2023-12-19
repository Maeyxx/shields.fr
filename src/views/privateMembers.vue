<template>
    <div class="text-center my-10 fadein animation-duration-500">
        <v-card color="transparent">
            <v-card-title>Tableau des adhérents SHIELDS {{ currentYear }}</v-card-title>
            <v-card-subtitle>Adhérents pour l'année {{ currentYear }} : {{ members.length }} </v-card-subtitle>
        </v-card>
    </div>

    <div class="fadein animation-duration-500 mb-15">
        <v-row class="mx-15 justify-center">
            <v-col v-for="member in members" cols="12" md="2" sm="4" lg="2" xs="4">
                <v-card max-width="400" height="100" color="#091a32" rounded="xl">
                    <v-card-title class="text-center">{{ member.pseudo }}</v-card-title>
                </v-card>
            </v-col>

        </v-row>
    </div>
</template>

<script>
// @ is an alias to /src

import Button from "primevue/button"
import Image from "primevue/image"
import Card from "primevue/card"
import Carousel from "primevue/carousel"
import Tag from "primevue/tag"

export default {
    name: "HomeView",

    data() {
        return {
            currentYear: new Date().getFullYear(),
            members: [{
                "id": 1,
                "pseudo": "manqui1",
                "avatarUrl": ""
            },
            {
                "id": 2,
                "pseudo": "0hCrime",
                "avatarUrl": ""
            },
            {
                "id": 3,
                "pseudo": "C0ne",
                "avatarUrl": ""
            },
            {
                "id": 4,
                "pseudo": "azogg01",
                "avatarUrl": ""
            },
            {
                "id": 5,
                "pseudo": "bizi35",
                "avatarUrl": ""
            },
            {
                "id": 6,
                "pseudo": "Thorochi",
                "avatarUrl": ""
            },
            {
                "id": 7,
                "pseudo": "Øtudwall",
                "avatarUrl": ""
            },
            {
                "id": 8,
                "pseudo": "flipper_le_dauphin_de_commerson",
                "avatarUrl": ""
            },
            {
                "id": 9,
                "pseudo": "Softomine",
                "avatarUrl": ""
            },
            {
                "id": 10,
                "pseudo": "Ectolast",
                "avatarUrl": ""
            },
            {
                "id": 11,
                "pseudo": "pixel8121",
                "avatarUrl": ""
            },
            {
                "id": 12,
                "pseudo": "tho.mas_",
                "avatarUrl": ""
            },
            {
                "id": 13,
                "pseudo": "Maeyx",
                "avatarUrl": ""
            },
            {
                "id": 14,
                "pseudo": "Maiaou",
                "avatarUrl": ""
            },
            {
                "id": 15,
                "pseudo": "Sharp",
                "avatarUrl": ""
            },
            {
                "id": 16,
                "pseudo": "Madore",
                "avatarUrl": ""
            },
            {
                "id": 17,
                "pseudo": "Snow",
                "avatarUrl": ""
            },
            {
                "id": 18,
                "pseudo": "onosh",
                "avatarUrl": ""
            },
            {
                "id": 19,
                "pseudo": "Nibor",
                "avatarUrl": ""
            },
            {
                "id": 20,
                "pseudo": "prezidentb",
                "avatarUrl": ""
            },
            {
                "id": 21,
                "pseudo": "Shyphem",
                "avatarUrl": ""
            },
            {
                "id": 22,
                "pseudo": "sulli45",
                "avatarUrl": ""
            },
            {
                "id": 23,
                "pseudo": "OncleSmacks",
                "avatarUrl": ""
            },
            {
                "id": 24,
                "pseudo": "romainga",
                "avatarUrl": ""
            },
            {
                "id": 25,
                "pseudo": "countZero",
                "avatarUrl": ""
            },
            {
                "id": 26,
                "pseudo": "Shiyu",
                "avatarUrl": ""
            },
            {
                "id": 27,
                "pseudo": "fearnyx",
                "avatarUrl": ""
            },
            {
                "id": 28,
                "pseudo": "matxvim",
                "avatarUrl": ""
            },
            {
                "id": 29,
                "pseudo": "Clooope",
                "avatarUrl": ""
            },
            {
                "id": 30,
                "pseudo": "Mantaloh",
                "avatarUrl": ""
            },
            {
                "id": 31,
                "pseudo": "Foxy",
                "avatarUrl": ""
            },
            {
                "id": 32,
                "pseudo": "arkoo",
                "avatarUrl": ""
            },
            {
                "id": 33,
                "pseudo": "Minvinea",
                "avatarUrl": ""
            },
            {
                "id": 34,
                "pseudo": "BDM",
                "avatarUrl": ""
            },
            {
                "id": 35,
                "pseudo": "tranos",
                "avatarUrl": ""
            },
            {
                "id": 36,
                "pseudo": "LooXzy",
                "avatarUrl": ""
            },
            {
                "id": 37,
                "pseudo": "Rettbl",
                "avatarUrl": ""
            },
            {
                "id": 38,
                "pseudo": "Arl",
                "avatarUrl": ""
            },
            {
                "id": 39,
                "pseudo": "casperfantome_",
                "avatarUrl": ""
            }
            ],
            logo: require("@/assets/logo.png"),

        };
    },

    components: {
        Button,
        Image,
        Card,
        Carousel,
        Tag
    },
};
</script>