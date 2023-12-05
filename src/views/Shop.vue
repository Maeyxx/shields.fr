<template>
    <div class="justify-content-center flex">
        <img :src="logo" style="height: 150px;">
    </div>

    <div class="flex justify-content-center fadein animation-duration-500 mb-5 mx-10">
        <Card class="mr-5 d-flex flex-column" style="width: 25em;" v-for="item in shop_items">
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
                <div class="flex justify-content-center flex-wrap">
                    <div class=" align-items-center justify-content-center font-bold  ">
                        <ul class="li-card" v-for="goodie in item.goodies" :style="'list-style-type: none !important'">
                            <li>
                                <i v-if="goodie.included === true" class="pi pi-check text-teal-600 mr-2"
                                    style="color: 'var(--primary-color)'"></i>
                                <i v-else class="pi pi-times text-red-600 mr-2" style="color: 'var(--primary-color)'"></i>

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
            </template>
        </Card>
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
                    link: "https://www.helloasso.com/associations/shields/boutiques/pack-de-base"
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
                    link: "https://www.helloasso.com/associations/shields/boutiques/pack-etendue"

                },
                // {
                //     id: 3,
                //     title: "Pack 3",
                //     description: "Bénéficiez d'un plusieurs goodies de l'association shields grâce à ce pack",
                //     goodies: [
                //         "Stickers",
                //         "Mug",
                //         "Sweat",
                //         "t-shirt"
                //     ],
                //     price: 70,
                // }
            ]
        };
    },
    methods: {
        bizi() {
            this.$confetti.start({
                particles: [
                    {
                        type: 'image',
                        url: require('@/assets/bizi.png'),
                        size: 64,
                    },

                ],
            });
        },
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
  