<template>
    <v-card class="container">
        <v-card-title>
            <h5><strong>购物车</strong></h5>
        </v-card-title>
        <v-list>
            <template v-for="item in cartList">
                <v-list-tile avatar v-bind:key="item.id" class="mb-3">
                    <v-list-tile-avatar>
                        <img :src="item.picture"/>
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                        <v-list-tile-title v-html="item.title"></v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                        <v-list-tile-title>{{item.price}}</v-list-tile-title>
                    </v-list-tile-action>
                </v-list-tile>
                <v-divider v-bind:key="item.id" class="mb-3"></v-divider>
            </template>
        </v-list>
        <v-layout row>
            <v-flex d-flex>
                <p class="red--text mt-1 text-xs-right">总价：￥{{grandTotal}}</p>
            </v-flex>
        </v-layout>
        <v-card-actions>
            <v-btn flat @click="clearCart">清空购物车</v-btn>
            <v-btn flat class="red--text">立即下单</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
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
        }
    }
}
</script>

<style scoped>
.container {
    overflow-x: hidden;
}
</style>
