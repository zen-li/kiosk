<template>
    <v-container grid-list-md class="home-container">
        <!-- BEGIN of book banners -->
        <!-- <v-parallax class="elevation-3" src="/images/blue-grey-pentagonal-background.png">
            <v-layout row wrap class="mt-0">
                <v-flex xs12>
                </v-flex>
            </v-layout>
        </v-parallax> -->
        <div><img src="/images/book_banner.jpg" alt="" class="elevation-1"></div>
        <!-- END of book banners -->

        <!-- BEGIN of main content -->
        <v-layout row wrap class="my-4 mx-5">
            <v-flex xs2 v-for="item in books" v-bind:key="item.id">
                <nuxt-link :to="`./book/${item.id}`">
                    <v-card class="mr-5 mt-5 card-cover" raised>
                        <v-card-media class="white--text" :src="item.cover" height="328px">
                        </v-card-media>
                        <v-card-text>
                            <div class="card-title" style="width: 210px">
                                <span>
                                    {{item.name}}
                                </span>
                                <span class="paragraph-end">
                                </span>
                            </div>
                            <div class="card-subtitle mt-2" style="width: 210px; color: #f44336">
                                <span>
                                    促销价：￥{{Number(item.new_price).toFixed(2)}}元
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
import db from '../../data/'

export default {
    computed: {
        books () {
            return db.books
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style>

</style>



