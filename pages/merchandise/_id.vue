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
            <v-flex xs7>
                <!-- BEGIN of magazine information -->
                <v-flex d-flex>
                    <v-layout>
                        <!-- BEGIN of magazine cover -->
                        <v-flex xs5>
                            <v-card class="darken-2 promobox elevation-5 mt-2">
                                <v-card-media class="white--text" :src="merch.cover" height="388px">
                                </v-card-media>
                            </v-card>
                        </v-flex>
                        <!-- END of magazine cover -->

                        <!-- BEGIN of information section -->
                        <v-flex d-flex xs6 class="mt-3">
                            <!-- BEGIN of magazine information -->
                            <v-flex class="headline"><strong>{{merch.name}}</strong></v-flex>
                            <v-flex class="grey--text darken-5 mt-4 summaryBox">{{merch.summary}}</v-flex>
                            <v-flex class="mt-3"><h5 class="red--text">折扣价：￥{{Number(merch.new_price).toFixed(2)}}</h5></v-flex>
                            <!-- END of magazine information -->

                            <!-- BEGIN of action buttons -->
                            <v-layout>
                                <v-flex d-flex xs12>
                                    <v-btn @click.native.stop="dialog = true" block large dark class="blue">了解更多</v-btn>
                                    <v-dialog v-model="dialog" width="50%">
                                        <merch-dialog :merch="merch"></merch-dialog>
                                    </v-dialog>
                                </v-flex>
                                <v-flex d-flex xs12>
                                    <v-btn block large dark class="pink" @click.native.stop="addCart">加入购物车</v-btn>
                                </v-flex>
                            </v-layout>
                            <!-- END of action buttons -->
                        </v-flex>
                        <!-- END of information section -->

                    </v-layout>
                </v-flex>
                <!-- END of magazine information -->
                <!-- <v-divider class="my-3"></v-divider>
                <v-layout class="mr-5">
                    <v-flex xs12>
                        <img :src="pic" alt="" v-for="pic in merch.pics" v-bind:key="pic">
                    </v-flex>
                </v-layout> -->
                <!-- BEGIN of comments section -->
                <v-flex d-flex class="mt-4">
                    <h5>商品评论</h5>
                </v-flex>
                <!-- BEGIN of comments -->
                <v-flex d-flex>
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
                    <v-layout>
                        <v-flex xs3 v-for="item in related" v-bind:key="item.id">
                            <v-card class="darken=2 promobox elevation-5 mt-1">
                                <v-card-media class="white--text" :src="item.cover" height="220px"></v-card-media>
                                <v-card-text>
                                    <div class="card-title">
                                        <span>
                                            {{item.name}}
                                        </span>
                                        <span class="paragraph-end">
                                        </span>
                                    </div>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-flex>
                <!-- END of related merchandise -->
            </v-flex>
            <!-- END of magazine history -->
        </v-layout>
    </v-container>
</template>

<script>
import db from '../../data/'
import MerchDialog from '../../components/dlgMerchDetail'

export default {
    async asyncData ({ params, error }) {
        let data = {}
        try {
            const merch = db.merchandises.find((m) => { return m.id === params.id })
            const comments = db.comments
            const related = []
            for (let i = 0; i < 4; i += 1) {
                related.push(db.merchandises[i])
            }
            data = { merch, related, comments }
            return data
        } catch (e) {
            error({ message: 'not found', statusCode: 404 })
        }
        return data
    },

    data () {
        return {
            dialog: false
        }
    },

    components: {
        MerchDialog
    },

    methods: {
        goBack () {
            this.$router.replace('/merchandise')
        },
        closeDlg () {
            this.dialog = false
        },
        addCart () {
            const cartItem = {
                id: this.merch.id,
                picture: this.merch.cover,
                title: this.merch.name,
                qty: 1,
                price: this.merch.new_price
            }
            this.$store.commit('addCart', cartItem)
            this.$store.state.dlgCartOpen = true
            this.$store.state.dlgPaymentOpen = false
        }
    }
}
</script>

<style>
.summaryBox {
    height: 180px;
}
</style>
