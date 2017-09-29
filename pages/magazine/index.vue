<template>
    <v-container grid-list-xs class="home-container">
        <!-- BEGIN of magazine banners -->
        <!-- <v-parallax class="elevation-3" src="/images/blue-grey-pentagonal-background.png">
            <v-layout row wrap class="mt-0">
                <v-flex xs12>
                </v-flex>
            </v-layout> -->
            <div><img src="/images/b_qikan.jpg" alt="" class="elevation-1" style="width: 1900px"></div>
        </v-parallax>
        <!-- END of magazine banners -->

        <!-- BEGIN of main content -->
        <v-layout row wrap class="my-4 mx-5">
            <v-flex xs2 v-for="item in magazines" v-bind:key="item.id">
                <nuxt-link :to="`./magazine/${item.id}`">
                    <v-card class="mr-5 mt-5 card-cover" raised>
                        <v-card-media class="white--text" :src="item.cover" height="328px">
                        </v-card-media>
                        <v-card-text>
                            <div class="card-title">
                                <span>
                                    {{item.name}}
                                </span>
                                <span class="paragraph-end">
                                </span>
                            </div>
                            <div class="card-subtitle mt-2">
                                    <span>
                                        {{item.year}}年·{{item.issue}}期
                                    </span>
                                    <span class="paragraph-end">
                                    </span>
                                </div>
                        </v-card-text>
                    </v-card>
                </nuxt-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import db from '../../data'

export default {
    computed: {
        magazines () {
            return db.magazines
        }
    },
    data () {
        return {
        }
    }
}
</script>

<style scoped>

</style>


