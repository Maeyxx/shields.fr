<template>
  <div class="main-container">

    <div class="justify-content-center flex fadein animation-duration-500">
      <img :src="logo" style="height: 150px;">
    </div>

    <div class="flex text-center mb-5">
      <h1>BIENVENUE SUR SHIELDS</h1>
    </div>

    <v-row class="text-center fadein animation-duration-500" style="max-width: 60em; margin: auto;">
      <v-col cols="12" md="12" sm="12" lg="12">
        <v-card color="transparent">
          <v-card-text class="description">
            SHIELDS est une association étudiante de la filière Cybersécurité au sein du Pôle Sup de La Salle. Notre
            mission est de dynamiser le parcours académique des étudiants en offrant des activités liées à la
            cybersécurité,
            tout en renforçant la cohésion au sein des différentes promotions.
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

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 5em;
}

.description {
  font-size: 1.1em !important;
  font-weight: 400 !important;
  line-height: 1.5em !important;
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

      logo: require("@/assets/logo.png"),
    };
  },

};
</script>
