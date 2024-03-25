<template>
    
    <div class="main-container">
        <div class="justify-content-center flex fadein animation-duration-500">
            <img :src="logo" style="height: 150px;">
        </div>

        <div class="flex text-center mb-5">
            <h1>Qu'est-ce que la Team DLS ?</h1>
        </div>

        <v-row class="text-center fadein animation-duration-500" style="max-width: 60em; margin: auto;">
            <v-col cols="12" md="12" sm="12" lg="12">
                <v-card color="transparent">
                    <v-card-text class="description">
                        Au sein de SHIELDS, la TEAM DLS est composée d'étudiants passionnés de cybersécurité. Ils sont
                        spécialisés dans les CTF (Capture The Flag), qui sont des compétitions où l'ingéniosité et la
                        logique
                        sont mises à l'épreuve.
                        Ces étudiants sont les porteurs de l'étendard de la filière Cybersécurité.
                    </v-card-text>
                </v-card>
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

.description {
    font-size: 1.2em;
    font-weight: 400;
    line-height: 1.5em;
}

.main-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 5em;
}
</style>
  
<script>
// @ is an alias to /src

import moment from "moment";

moment.locale("fr");

export default {
    name: "CompetitionsTeamView",

    data() {
        return {
            logo: require("@/assets/logo_dls.png"),
        };
    },
    methods: {

    },

};
</script>