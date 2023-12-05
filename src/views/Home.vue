<template>
  <div class="justify-content-center flex">
    <img :src="logo" style="height: 150px;">
  </div>

  <div class="flex justify-content-center mb-5">
    <h1>BIENVENUE SUR SHIELDS</h1>
  </div>

  <div class="text-center d-flex">
    <div class="mx-auto" style="width: 45em;">
      <v-card color="transparent">
        <v-card-text class="text-h7">
          Association Étudiante de la filière Cybersécurité au sein du Pôle Sup de La Salle, notre mission est de
          dynamiser le parcours académique des étudiants en offrant des activités liées à la cybersécurité, tout en
          renforçant
          la cohésion au sein des différentes promotions. Nous sommes fiers de soutenir l'équipe CTF Team DLS en assurant
          le succès de ses compétitions et en facilitant l'organisation.
        </v-card-text>
      </v-card>
    </div>
  </div>



  <div class="justify-center fadein animation-duration-500 mb-5 text-center">
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
      logo: require("@/assets/logo.png"),
    };
  },
  methods: {
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