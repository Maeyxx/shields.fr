<template>
  <Menubar :model="items" class="menu">
    <template #item="{ item, props, hasSubmenu, root }">
      <router-link v-if="item.route && item.isRoute" v-slot="{ href, navigate }" :to="item.route" custom>
        <Button :disabled="item.disabled" class="bg-transparent border-none" @click="navigate"> <span
            :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>

          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
            item.shortcut }}</span>
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </Button>
        <!-- <a v-ripple :href="href" v-bind="props.action" @click="navigate">
          <span :class="item.icon" />
          <span class="ml-2">{{ item.label }}</span>

          <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
          <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
            item.shortcut }}</span>
          <i v-if="hasSubmenu"
            :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
        </a> -->

      </router-link>
      <a v-else v-ripple :href="item.route" v-bind="props.action" @click="navigate" target="_blank">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>

        <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
        <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
          item.shortcut }}</span>
        <i v-if="hasSubmenu"
          :class="['pi pi-angle-down text-primary', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
      </a>



    </template>
    <template #end style="display: contents !important;">
      <v-spacer></v-spacer>
      <Button class="ml-2" @click="openUrl('https://www.helloasso.com/associations/shields/adhesions/adhesion-shields')">
        <span class="pi pi-send mr-2" />

        Adhérer à l'association</Button>

    </template>
  </Menubar>
  <div class="app-content">
    <router-view />
  </div>
</template>
<script>
import {
  ref
} from "vue";

import Menubar from "primevue/menubar";
import Badge from "primevue/badge";
import Avatar from "primevue/avatar";
import InputText from "primevue/inputtext";
import Button from "primevue/button";
import Image from "primevue/image";
import Card from "primevue/card";
import TieredMenu from "primevue/tieredmenu";
import {
  useToast
} from 'vue-toastification';
const toast = useToast();

export default {
  name: "App",
  data() {
    return {
      searchText: "",
      logo: require("@/assets/logo.png"),

      items: [{
        label: 'Accueil',
        icon: 'pi pi-home',
        route: '/',
        isRoute: true,

        disabled: false
      },
      {
        label: 'Boutiques',
        icon: 'pi pi-shopping-cart',
        route: '/shop',
        isRoute: true,
        disabled: false
      },
      {
        label: 'Rejoindre SHIELDS',
        icon: 'pi pi-discord',
        isRoute: false,
        route: 'https://discord.gg/FFekHgSyR9',
        disabled: false
      },

      {
        label: 'SHIELDS',
        icon: '',
        route: '#',
        isRoute: true,
        items: [{
          label: 'Les compétitions',
          icon: 'pi pi-flag',
          route: '/competitions',
          isRoute: true,
          disabled: false

        },
        {
          label: 'Le bureau',
          icon: 'pi pi-shield',
          route: '/office',
          isRoute: true,

          disabled: false
        },
        {
          label: 'Les adhérents',
          icon: 'pi pi-users',
          route: '/members',
          isRoute: true,

          disabled: false
        },
        ],
      },
      {
        label: 'TEAM DLS',
        icon: '',
        route: '/teamdls',
        isRoute: true,

        disabled: false

      },
      ],
    }
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank');
    },
    easterEgg() {
      const regex = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi;

      if (this.searchText === '') {
        toast.info("Il n'y a rien à regarder ici 👀", {
          position: 'bottom-right',
          timeout: 3000,
        });
      } else {
        // regex to found if the user try to inject some code
        if (regex.test(this.searchText)) {
          toast.success("Bien joué ! Tu as trouvé l'easter egg 🥳", {
            position: 'bottom-right',
          });
          this.$confetti.start({
            dropRate: 0.2,
            particles: [{
              type: 'image',
              url: require('@/assets/bizi.png'),
              size: 64,
            },],
          });
        } else {
          toast.info("Il n'y a rien à regarder ici 👀", {
            position: 'bottom-right',
            timeout: 3000,
          });
        }
      }

    },
  },
  created() {

  },

  components: {
    Button,

    Menubar,

  },
};
</script>

<style lang="scss">
@import 'styles/styles.scss';

.menu {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;

}

.app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
}

.app-menubar {
  position: fixed;
  top: 0;
  width: 100%;
  /* Modifiez la largeur pour qu'elle occupe toute la largeur de la page */
  z-index: 1000;
}

.app-content {
  padding-top: 90px;
  /* Ajustez cette valeur en fonction de la hauteur de votre barre de menu */
}

.p-menubar-end {
  display: contents
}
</style>