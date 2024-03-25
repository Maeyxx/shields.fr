<template>
    <div class="main-container">
  
      <div class="justify-content-center flex fadein animation-duration-500">
        <img :src="logo" style="height: 150px;">
      </div>
  
      <div class="flex text-center mb-5">
        <h1>MENTIONS LEGALES</h1>
      </div>
  
      <!-- <v-row class="text-center fadein animation-duration-500" style="max-width: 60em; margin: auto;">
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
      </v-row> -->
      <v-row>
      <v-col cols="12" md="6" class="d-flex">
        <v-row>
          <v-col cols="12" md="12">
            <v-card height="100%" color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="pen-nib" />
                </v-avatar>
                <span class="text-h6">Éditeur du site</span>
              </v-card-title>
              <v-card-text class="pa-10">
                <p>Le présent site internet « SHIELDS », accessible à l'adresse :</p>
                <ul>
                  <li>
                    <a href="https://shields-dls.fr">https://shields-dls.fr</a>
                  </li>
                </ul>
                <br />

                <p>est édité par l'association <strong>SHIELDS</strong></p>
                <p>Siège social : SHIELDS, 5 Rue de la Motte Brûlon CS 60624, 35706 Rennes</p>       
                <p>Email : <a href="mailto:asso.si.dls@gmail.com">asso.si.dls@gmail.com</a></p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card height="100%" color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="hand" />

                </v-avatar>
                <span class="text-h6">Données personnelles</span>
              </v-card-title>
              <v-card-text class="pa-10">
                Aucune donnée personnelle n'est collectée sur ce site.

              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card height="100%" color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="check" />

                </v-avatar>
                <span class="text-h6">Accès au site</span>
              </v-card-title>
              <v-card-text class="pa-10">
                <p>
                  <a href="https://shields-dls.fr">SHIELDS</a> s’efforce de permettre l’accès au site
                  <a href="https://shields-dls.fr">https://shields-dls.fr</a> 24 heures sur 24, 7
                  jours sur 7.
                </p>
                <p>
                  Cependant, <a href="https://shields-dls.fr">https://shields-dls.fr</a> n’est tenu que d’une obligation de
                  moyen pour ce qui est du fonctionnement et de la continuité du service.
                </p>
                <p>
                  <a href="https://shields-dls.fr">https://shields-dls.fr</a> ne sera donc pas responsables de l’altération ou
                  de l’accès frauduleux à des données et/ou de la transmission accidentelle de données en raison
                  d’interventions malveillantes ou de virus par le biais du service.
                </p>
                <p>
                  Sa responsabilité ne sera pas engagée pour des faits dus à un cas de force majeure ou à des évènements
                  indépendants de sa volonté tels que les pannes et/ou les problèmes d’ordre technique concernant le
                  matériel informatique, les programmes et logiciels ou le réseau Internet pouvant le cas échéant
                  entraîner la suspension ou la cessation du service.
                </p>
                <p>
                  La responsabilité de l’éditeur ne saurait être engagée en cas d’impossibilité d’accès à ce site et/ou
                  d’utilisation des services.
                </p>
                <p>
                  Par ailleurs, <a href="https://shields-dls.fr">https://shields-dls.fr</a> peut être amené à interrompre le
                  site, à tout moment sans préavis, le tout sans droit à indemnités. L’utilisateur reconnaît et accepte
                  que <a href="https://shields-dls.fr">https://shields-dls.fr</a> ne soit pas responsable des interruptions, et
                  des conséquences qui peuvent en découler pour l’utilisateur ou tout tiers.
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6" class="d-flex">
        <v-row>
          <v-col cols="12" md="24">
            <v-card color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="server" />
                </v-avatar>
                <span class="text-h6">Hébergeur</span></v-card-title
              >
              <v-card-text class="pa-10">
                <p>Ce site est hébergé par la société IONOS SARL.</p>
                <p>
                  7, place de la Gare, BP 70109, 57200 Sarreguemines Cedex,  431 303 775 RCS Sarreguemines, tél. : 0970 808 911, info@IONOS.fr
                </p>
                <p><a href="https://www.ionos.fr/">https://www.ionos.fr/</a></p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="hand-holding-heart" />

                </v-avatar>
                <span class="text-h6">Engagement</span></v-card-title
              >
              <v-card-text class="pa-10">
                <a href="https://shields-dls.fr">https://shields-dls.fr</a> est un site Internet
                d’information, dédié au secteur de la cybersécurité. Il appartient à l’utilisateur de ce site de prendre
                toutes les mesures appropriées afin de protéger ses propres données et/ou logiciels de leur
                contamination par d’éventuels virus circulant sur le réseau Internet.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="link" />
                </v-avatar>
                <span class="text-h6">Liens hypertextes avec des sites tiers</span></v-card-title
              >
              <v-card-text class="pa-10">
                <a href="https://shields-dls.fr">https://shields-dls.fr</a> n’exerce aucun contrôle
                sur le contenu des sites tiers. L’existence d’un lien hypertexte entre SHIELDS et un site tiers ne
                signifie en aucune manière le contrôle du contenu du site tiers.
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="copyright" />
                </v-avatar>
                <span class="text-h6">Propriété intellectuelle</span>
              </v-card-title>
              <v-card-text class="pa-10">
                <p>
                  Toute représentation totale ou partielle du site
                  <a href="https://shields-dls.fr">https://shields-dls.fr</a> et/ou de son contenu par
                  quelques procédés et sur quelques supports que ce soient, sans autorisation préalable et expresse de
                  son Responsable de Publication est interdite et constitue une contrefaçon sanctionnée notamment par
                  les articles L335-2 et suivants du Code de la Propriété intellectuelle.
                </p>
              </v-card-text>
              <v-card-text class="pa-10">
                <p>
                  La librairie
                  <strong>"Font Awesome"</strong> est utilisée sur ce site conformément aux termes de la
                  <strong>licence Creative Commons Attribution 4.0 International (CC BY 4.0)</strong>.
                </p>
                <p>
                  "Font Awesome" est une collection d'icônes et de symboles disponibles gratuitement, créée par Dave
                  Gandy. Ces icônes peuvent être utilisées et modifiées librement, que ce soit à des fins commerciales
                  ou non commerciales, à condition que l'auteur original soit crédité de manière appropriée. Pour plus
                  d'informations sur la licence Creative Commons Attribution 4.0 International, veuillez consulter le
                  lien suivant : <a href="https://creativecommons.org/licenses/by/4.0/">Termes de la licence</a>
                </p>
                <p>
                  Pour plus d'informations sur "Font Awesome" et pour obtenir la version complète de la licence,
                  veuillez visiter le site officiel : <a href="https://fontawesome.com/">Site officiel fontawesome</a>
                </p>
              </v-card-text>
            </v-card>
          </v-col>
          <v-col cols="12" md="12">
            <v-card color="#091a32">
              <v-card-title>
                <v-avatar color="warning" size="48" class="mr-2">
                  <font-awesome-icon icon="pen-to-square" />

                </v-avatar>
                <span class="text-h6">Modification du site</span>
              </v-card-title>
              <v-card-text class="pa-10">
                SHIELDS se réserve le droit de modifier, de corriger et/ou de mettre à jour le contenu de ce site et de
                ses mentions légales à tout moment et ceci sans préavis.
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
    </div>
  </template>
<script>
import moment from "moment";

moment.locale("fr");

export default {
  name: "LegalView",

  data() {
    return {

      logo: require("@/assets/logo.png"),
    };
  },

};
</script>
  