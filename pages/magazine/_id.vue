<template>
    <v-container class="home-container">
        <v-layout row class="mt-5">
            <!-- BEGIN of Back button -->
            <v-flex xs1>
                <v-btn fab dark class="blue ml-5" @click="goBack">
                    <v-icon>arrow_back</v-icon>
                </v-btn>
            </v-flex>
            <!-- END of Back button -->

            <!-- BEGIN of magazine section and comments section -->
            <v-flex xs5>
                <!-- BEGIN of magazine information -->
                <v-flex d-flex>
                    <v-layout>

                        <!-- BEGIN of magazine cover -->
                        <v-flex xs5>
                            <v-card class="darken-2 promobox elevation-5 mt-2">
                                <v-card-media class="white--text" :src="magazine.cover" height="388px">
                                </v-card-media>
                            </v-card>
                        </v-flex>
                        <!-- END of magazine cover -->

                        <!-- BEGIN of information section -->
                        <v-flex d-flex xs6 class="mt-3">
                            <!-- BEGIN of magazine information -->
                            <v-flex class="headline"><strong>{{magazine.name}}</strong></v-flex>
                            <v-flex class="mt-3">{{magazine.year}}年{{magazine.issue}}期</v-flex>
                            <v-flex class="grey--text darken-5 mt-4 summary-box">{{magazine.summary}}</v-flex>
                            <v-flex class="mt-3"><h5 class="red--text">折扣价：免费</h5></v-flex>
                            <!-- END of magazine information -->

                            <!-- BEGIN of action buttons -->
                            <v-layout>
                                <v-flex xs12><v-btn block large class="pink" dark>购买单本</v-btn></v-flex>
                            </v-layout>
                            <!-- END of action buttons -->
                        </v-flex>
                        <!-- END of information section -->

                    </v-layout>
                </v-flex>
                <!-- END of magazine information -->
                <!-- BEGIN of comments section -->
                <v-flex d-flex class="mt-4">
                    <h5>精彩书评</h5>
                </v-flex>
                <!-- BEGIN of comments -->
                <v-flex d-flex class="mr-5">
                    <v-list three-line style="background: #eeeeee">
                        <template v-for="item in comments">
                            <v-subheader v-if="item.header" v-text="item.header" v-bind:key="item.title"></v-subheader>
                            <v-list-tile avatar v-else v-bind:key="item.title">
                                <v-list-tile-avatar>
                                    <img v-bind:src="item.avatar" alt="">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
                </v-flex>
                <!-- END of comments section -->
            </v-flex>
            <!-- END of magazine section -->

            <!-- BEGIN of magazine history and related magazine -->
            <v-flex xs6 class="mr-5">
                <v-flex d-flex>
                    <h5>猜你喜欢</h5>
                </v-flex>
                <!-- BEGIN of related magazines -->
                <v-flex d-flex>
                    <v-layout row wrap>
                        <v-flex xs3 v-for="item in related" v-bind:key="item.id">
                            <nuxt-link :to="`/magazine/${item.id}`">
                            <v-card class="darken=2 promobox elevation-5 mt-3 mb-5">
                                <v-card-media class="white--text" :src="item.cover" height="220px"></v-card-media>
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
                </v-flex>
                <!-- END of related magazines -->
            </v-flex>
            <!-- END of magazine history -->
        </v-layout>
    </v-container>
</template>

<script>
import db from '../../data'

export default {
    async asyncData ({ params, error }) {
        let data = {}
        try {
            const magazine = db.magazines.find((mag) => { return mag.id === params.id })
            const comments = db.comments
            const related = []
            for (let i = 0; i < 8; i += 1) {
                related.push(db.magazines[i])
            }
            data = { magazine, history, related, comments }
            return data
        } catch (e) {
            error({ message: 'not found', statusCode: 404 })
        }
        return data
    },

    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.summary-box {
    height: 180px;
    white-space: no-wrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
