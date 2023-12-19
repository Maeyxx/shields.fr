<template>
    <div class="justify-content-center flex">
        <img :src="logo" style="height: 150px;">
    </div>

    <v-row class="text-center justify-center align-center" style="max-width: 60em; margin: auto;">
        <v-col cols="12" md="6" v-for="item in shop_items">
            <Card>
                <template #title class=" flex bg-primary">
                    <div class="flex justify-content-center flex-wrap">
                        <div class="flex align-items-center justify-content-center font-bold  m-2">
                            Pack "{{ item.title }}"
                        </div>
                    </div>
                </template>
                <template #subtitle>
                    <div class="flex justify-content-center flex-wrap">
                        <div class="flex align-items-center justify-content-center font-bold">
                            {{ item.price }}€
                        </div>
                    </div>
                </template>
                <template #content>
                    <div class="flex justify-content-center flex-wrap justify-center text-left">
                        <div class=" align-items-center justify-content-center font-bold">
                            <ul class="li-card" v-for="goodie in item.goodies" :style="'list-style-type: none !important'">
                                <li>
                                    <i v-if="goodie.included === true" class="pi pi-check text-teal-600 mr-2"
                                        style="color: 'var(--primary-color)'"></i>
                                    <i v-else class="pi pi-times text-red-600 mr-2"
                                        style="color: 'var(--primary-color)'"></i>

                                    {{ goodie.name }}

                                </li>
                            </ul>
                        </div>
                    </div>
                </template>
                <template #footer class="flex justify-content-center flex-wrap">
                    <div class="flex justify-content-center flex-wrap">
                        <div class="flex align-items-center justify-content-center font-bold  m-2">
                            <a :href="item.link" class="p-button p-button-rounded font-bold no-underline" target="_blank"
                                rel="noopener noreferrer">Je
                                choisis le pack {{
                                    item.title }}</a>

                        </div>
                    </div>
                    <div class="flex justify-content-center flex-wrap">
                        <div class="flex align-items-center justify-content-center font-bold  m-2">
                            <v-dialog width="1200">
                                <template v-slot:activator="{ props }">
                                    <a v-bind="props"
                                        class="p-button p-button-rounded font-bold no-underline p-button-outlined"
                                        target="_blank" rel="noopener noreferrer">
                                        <font-awesome-icon icon="eye" class="mr-2" />
                                        Voir le pack {{
                                            item.title }}</a>
                                </template>

                                <template v-slot:default="{ isActive }">
                                    <v-card :title="`Pack ${item.title}`" color="#091a32">
                                        <v-card-subtitle class="ml-2">Boutique </v-card-subtitle>
                                        <v-card-text>
                                            <v-img :src="item.src"></v-img>
                                        </v-card-text>
                                    </v-card>
                                </template>


                            </v-dialog>

                        </div>
                    </div>
                </template>
            </Card>
        </v-col>
    </v-row>
    <div class="flex justify-content-center fadein animation-duration-500 mb-5 mx-10">
    </div>
</template>
  
<script>
// @ is an alias to /src

import Button from "primevue/button"
import Image from "primevue/image"
import Card from "primevue/card"
import InputText from "primevue/inputtext"
import Menubar from "primevue/menubar";


export default {
    name: "shop",
    data() {
        return {
            value1: "",
            logo: require("@/assets/logo.png"),
            shop_items: [
                {
                    id: 1,
                    title: "Base",
                    description: "Bénéficiez d'un plusieurs goodies de l'association shields grâce à ce pack",
                    goodies: [
                        {
                            id: 1,
                            name: "Stickers",
                            included: true

                        },
                        {
                            id: 2,
                            name: "Mug",
                            included: true

                        },
                        {
                            id: 3,
                            name: "T-shirt",
                            included: true
                        },
                        {
                            id: 4,
                            name: "Jet Tag",
                            included: false
                        }

                    ],
                    price: 15,
                    link: "https://www.helloasso.com/associations/shields/boutiques/pack-de-base",
                    src: require("@/assets/images/merch/merch_shields.png")
                },
                {
                    id: 2,
                    title: "Étendu",
                    description: "Bénéficiez d'un plusieurs goodies de l'association shields grâce à ce pack",
                    goodies: [
                        {
                            id: 1,
                            name: "Stickers",
                            included: true

                        },
                        {
                            id: 2,
                            name: "Mug",
                            included: true

                        },
                        {
                            id: 3,
                            name: "T-shirt",
                            included: true
                        },
                        {
                            id: 4,
                            name: "Jet Tag",
                            included: true
                        }
                    ],
                    price: 20,
                    link: "https://www.helloasso.com/associations/shields/boutiques/pack-etendue",
                    src: require("@/assets/images/merch/merch_shields_jt.png")


                },
            ]
        };
    },
    components: {
        Button,
        Image,
        Card,
        InputText,
        Menubar
    },
};
</script>
  