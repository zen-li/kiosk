<template>
    <v-container grid-list-xs class="home-container">
        <div>
            <img style="width: 100%" class="elevation-1" src="/images/mo_l.jpg" alt="">
        </div>
        <!-- BEGIN of main content -->
        <v-layout row wrap class="my-4 mx-5">
            <v-flex xs-6 v-for="item in merchs" v-bind:key="item.id">
                <div>
                    <nuxt-link :to="`./merchandise/${item.id}`">
                        <v-card class="mr-5 mt-5 card-cover" raised>
                            <v-card-media :src="item.cover" height="328px"></v-card-media>
                            <v-card-text>
                                <div class="card-title" style="width: 210px">
                                    <span>
                                        {{item.name}}
                                    </span>
                                    <span class="paragraph-end">
                                    </span>
                                </div>
                            </v-card-text>
                        </v-card>
                    </nuxt-link>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import db from '../../data/'

export default {
    methods: {

    },
    computed: {
        merchs () {
            return db.merchandises
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style>
.descBox {
    height: 100px;
    overflow: hidden;
}
</style>
