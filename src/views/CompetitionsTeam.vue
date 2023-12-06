<template>
    <div class="main-container">
        <div class="justify-content-center flex">
            <img :src="logo" style="height: 150px;">
        </div>

        <div class="flex justify-content-center mb-5">
            <h1>Qu'est-ce que la team DLS ?</h1>
        </div>

        <div class="text-center d-flex">
            <div class="mx-auto" style="width: 45em;">
                <v-card color="transparent">
                    <v-card-text class="description">
                        Au sein de SHIELDS, la TEAM DLS est composée d'étudiants passionnés de cybersécurité. Ils sont
                        spécialisée dans les CTF (Capture The Flag), qui sont des compétitions où l'ingéniosité et la
                        logique
                        sont mises à l'épreuve.
                        Ces étudiants sont les porteurs de l'étendard de la filière Cybersécurité.
                    </v-card-text>
                </v-card>
            </div>
        </div>
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
    name: "HomeView",

    data() {
        return {
            logo: require("@/assets/logo_dls.png"),
        };
    },
    methods: {

    },

};
</script>