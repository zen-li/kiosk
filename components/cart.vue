<template>
    <div>
        <v-toolbar class="pink" dark>
            <v-toolbar-side-icon></v-toolbar-side-icon>
            <v-toolbar-title class="white--text">购物车</v-toolbar-title>
        </v-toolbar>
        <v-card>
            <div v-if="!payment">
                <div v-if="cartList.length !== 0">
                    <v-container fluid fill-height v-for="item in cartList" v-bind:key="item.id">
                        <v-layout row wrap class="ma-1">
                            <v-flex xs1>
                                <v-list-tile-avatar>
                                    <img :src="item.picture"/>
                                </v-list-tile-avatar>
                            </v-flex>
                            <v-flex xs7 class="mt-3">
                                {{item.title}}
                            </v-flex>
                            <v-flex xs3>
                                <v-btn icon class="indigo--text" @click="updateQty(item, -1)">
                                    <v-icon>remove</v-icon>
                                </v-btn>
                                <span class="mx-3 pt-2">{{item.qty}}</span>
                                <v-btn icon dark class="indigo--text" @click="updateQty(item, 1)">
                                    <v-icon>add</v-icon>
                                </v-btn>
                            </v-flex>
                            <v-flex xs1 class="mt-3">
                                <p class="text-xs-right">￥{{ item.subTotal }}</p>
                            </v-flex>
                            <v-flex xs12 class="mt-1">
                                <v-divider></v-divider>
                            </v-flex>
                        </v-layout>
                    </v-container>
                    <v-layout row>
                        <v-flex d-flex>
                            <p class="red--text mt-1 text-xs-right mr-4">总价：￥{{grandTotal}}</p>
                        </v-flex>
                    </v-layout>
                    <v-card-actions>
                        <v-btn flat @click="clearCart">清空购物车</v-btn>
                            <v-btn flat class="red--text" @click.native.stop="showQr">立即下单</v-btn>
                    </v-card-actions>
                </div>
                <div v-else style="height: 300px">
                    <v-card-text>您还没有添加任何商品</v-card-text>
                </div>
            </div>
            <div v-else>
                <v-layout row wrap class="pa-3">
                    <v-flex xs3 offset-xs4>
                        <img :src="qrcode" alt="">
                    </v-flex>
                    <v-flex xs6 offset-xs4>
                        <h4>微信扫描二维码完成下单</h4>
                    </v-flex>
                </v-layout>
            </div>
        </v-card>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    components: {
    },
    computed: {
        ...mapState([
            'cartList'
        ]),
        ...mapGetters([
            'grandTotal'
        ])
    },
    methods: {
        clearCart () {
            this.$store.commit('clearCart')
            this.$emit('closeDlg', false)
        },
        updateQty (item, val) {
            if (item.qty === 1 && val === -1) {
                item.qty = 1
            } else {
                item.qty += val
                this.$store.commit('updateQty', item)
            }
        },
        showQr () {
            const qr = this.$store.getters.getCheckoutQr
            const data = window.jrQrcode.getQrBase64(qr, {
                padding: 15,
                width: 300,
                height: 300,
                correctLevel: 1
            })
            console.log('@data: ', data)
            this.qrcode = data
            this.$emit('update:payment', true)
        }
    },
    props: {
        payment: Boolean
    },
    data () {
        return {
            qrcode: ''
        }
    }
}
</script>

<style scoped>
.container {
    overflow-x: hidden;
}
</style>
