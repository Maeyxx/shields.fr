<template>
    <div class="justify-content-center flex">
        <img :src="logo" style="height: 150px;">
    </div>
    <div class="justify-center fadein animation-duration-500 mb-5">
        <v-row class="text-center">
            <v-col cols="12" md="12">Vous trouverez ci-dessous les activités qu'organise SHIELDS.</v-col>
        </v-row>
        <v-row class="mx-5">
            <v-col cols="12" md="3">
                <v-text-field label="Rechercher une activité" v-model="searchActivities" outlined dense
                    append-inner-icon="mdi-magnify" variant="solo"></v-text-field>
            </v-col>
        </v-row>
        <v-row class="mx-5">
            <v-col v-for="activitie in filteredActivities" cols="12" md="3" sm="6" class="d-flex">
                <v-dialog width="1200" height="800" min-height="800">
                    <template v-slot:activator="{ props }">
                        <v-card v-bind="props" width="500" color="#091a32" class=" align-center justify-center hover-card"
                            rounded="xl">
                            <v-row class="mt-1 ml-1 mr-1">
                                <v-col cols="12" md="9" class="text-left">{{ activitie.title }}</v-col>
                                <v-col cols="12" md="3" class="text-right">
                                    <v-chip v-if="activitie.isFinished" small color="#e85a1d">
                                        Terminé</v-chip>
                                    <v-chip v-else small>{{ activitie.datetimeFormat }}</v-chip></v-col>
                            </v-row>

                            <v-card-subtitle>
                                <font-awesome-icon icon="calendar-days" />
                                {{ activitie.year }}</v-card-subtitle>
                            <v-divider vertical></v-divider>
                            <v-card-text class="text-center">
                                <v-img :src="activitie.logo" width="120" height="120" class="mx-auto"></v-img>
                            </v-card-text>
                            <v-card-actions class="text-center justify-center" v-if="activitie.isFinished">
                                <small>{{ activitie.images.length }} image(s) disponible(s)</small>
                            </v-card-actions>
                        </v-card>
                    </template>

                    <template v-slot:default="{ isActive }">
                        <v-card :title="activitie.title" color="#091a32" max-width="1300">
                            <v-card-subtitle class="ml-2">Evènement du {{ activitie.datetimeDisplay }}</v-card-subtitle>
                            <v-card-text v-if="activitie.images.length > 0">
                                <v-row>
                                    <v-col cols="12" :md="activitie.images.length > 1 ? 6 : 12"
                                        v-for="image in activitie.images">
                                        <v-img :src="image.src"></v-img>
                                    </v-col>
                                </v-row>

                            </v-card-text>
                            <v-card-text v-else class="text-center">
                                Evènement non référencé pour le moment.
                            </v-card-text>

                        </v-card>
                    </template>


                </v-dialog>

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
    name: "ActivitiesView",

    data() {
        return {
            searchActivities: "",
            activities: [
                {
                    id: 1,
                    title: "SOCCER",
                    logo: require("@/assets/images/activities/SOCCER_2022/1.jpg"),
                    year: 2022,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2022-10-19",
                    datetimeDisplay: moment("2022-10-19 00:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2022-10-19 00:00:00").fromNow(),
                    images: [
                        {
                            id: 1,
                            src: require("@/assets/images/activities/SOCCER_2022/1.jpg"),
                        },
                        {
                            id: 2,
                            src: require("@/assets/images/activities/SOCCER_2022/2.jpg"),
                        }
                    ]
                },
                {
                    id: 1,
                    title: "MARATHON VERT (2022)",
                    logo: require("@/assets/images/activities/MV_2022/1.jpg"),
                    year: 2022,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2022-10-23",
                    datetimeDisplay: moment("2022-10-23 00:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2022-10-23 00:00:00").fromNow(),
                    images: [
                        {
                            id: 1,
                            src: require("@/assets/images/activities/MV_2022/1.jpg"),
                        },
                        {
                            id: 2,
                            src: require("@/assets/images/activities/MV_2022/2.jpg"),
                        }
                    ]
                },

                {
                    id: 1,
                    title: "LASER GAME (2022)",
                    logo: require("@/assets/images/activities/LASERGAME_2022/1.png"),
                    year: 2023,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2023-03-10",
                    datetimeDisplay: moment("2023-03-10 00:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2023-03-10 00:00:00").fromNow(),
                    images: [
                        {
                            id: 1,
                            src: require("@/assets/images/activities/LASERGAME_2022/1.png"),
                        },

                    ]
                },

                {
                    id: 1,
                    title: "SOIREE D'INTEGRATION",
                    logo: require("@/assets/images/activities/INTEGRATION_2023/1.jpg"),
                    year: 2023,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2023-09-28",
                    datetimeDisplay: moment("2023-09-28 00:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2023-09-28 00:00:00").fromNow(),
                    images: [
                        {
                            id: 1,
                            src: require("@/assets/images/activities/INTEGRATION_2023/1.jpg"),
                        },

                    ]
                },
                {
                    id: 1,
                    title: "MARATHON VERT (2023)",
                    logo: require("@/assets/images/activities/MV_2023/1.jpg"),
                    year: 2023,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2023-10-22",
                    datetimeDisplay: moment("2023-10-22 00:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2023-10-22 00:00:00").fromNow(),
                    images: [
                        {
                            id: 1,
                            src: require("@/assets/images/activities/MV_2023/1.jpg"),
                        },
                        {
                            id: 2,
                            src: require("@/assets/images/activities/MV_2023/2.jpg"),
                        },
                        {
                            id: 3,
                            src: require("@/assets/images/activities/MV_2023/3.jpg"),
                        }
                    ]
                },
                {
                    id: 1,
                    title: "SOIREE CTF",
                    logo: require("@/assets/images/activities/CTF_PIZZA/1.jpg"),
                    year: 2023,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2023-10-24",
                    datetimeDisplay: moment("2023-10-24 00:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2023-10-24 00:00:00").fromNow(),
                    images: [
                        {
                            id: 1,
                            src: require("@/assets/images/activities/CTF_PIZZA/1.jpg"),
                        },
                        {
                            id: 2,
                            src: require("@/assets/images/activities/CTF_PIZZA/2.jpg"),
                        },

                    ]
                },
                {
                    id: 1,
                    title: "SOIREE PARRAINAGE",
                    logo: null,
                    year: 2023,
                    description: "Soccer",
                    isFinished: false,
                    datetime: "2023-12-20",
                    datetimeDisplay: moment("2023-12-20 15:00:00").format("dddd Do MMMM YYYY"),
                    datetimeFormat: moment("2023-12-20 15:00:00").fromNow(),
                    images: [
                    ]
                },


            ],
            logo: require("@/assets/logo.png"),
        };
    },
    computed: {
        filteredActivities() {
            return this.activities.filter(activitie => {
                return activitie.title.toLowerCase().includes(this.searchActivities.toLowerCase());
            });
        }
    },
    created() {
        this.orderActivitiesByDateTime();
        let currentDateTime = moment();
        this.activities.forEach(activitie => {
            if (moment(activitie.datetime).isBefore(currentDateTime)) {
                activitie.isFinished = true;
            }
            else {
                activitie.isFinished = false;
            }
        })
    },
    methods: {
        orderActivitiesByDateTime() {

            // order by datetime, the first is the newest
            this.activities.sort((a, b) => {
                return moment(b.datetime).diff(moment(a.datetime));
            });

        }
    },

};
</script>