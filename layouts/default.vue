<template>
    <v-app light>
        <!-- top navigation bar -->
        <v-toolbar dark class="primary" :fixed="true">
            <!-- shopping cart button -->
                <v-btn class="pink mr-5 black--after" large absolute bottom right fab v-badge="badge" @click.native.stop="displayCart">
                    <v-icon light >local_grocery_store</v-icon>
                </v-btn>
            <v-dialog v-model="dialog" width="50%">
                <cart :payment.sync="payment"></cart>
            </v-dialog>
            <!-- title and logo -->
            <v-toolbar-title>数字书刊亭 · Next</v-toolbar-title>
            <v-spacer></v-spacer>
            <!-- navigation buttons -->
            <v-toolbar-items class="ml-5">
                <v-btn to="/" flat class="title" :exact="true">精彩推荐</v-btn>
                <v-btn to="/book" flat class="title">新知图书</v-btn>
                <v-btn to="/magazine" flat class="title">名刊会</v-btn>
                <v-btn to="/merchandise" flat class="title">优选商品</v-btn>
                <v-btn to="/tuangou" flat class="title">优惠团购</v-btn>
            </v-toolbar-items>
            <!-- shopping card fab button -->
            <v-spacer></v-spacer>
        </v-toolbar>
        <!-- router view -->
        <main>
        <nuxt/>
        </main>
        <!-- footer -->
    </v-app>
</template>

<script>
import Cart from '../components/cart'

export default {
    components: {
        Cart
    },

    methods: {
        displayCart () {
            this.dialog = true
            this.payment = false
        }
    },

    data () {
        return {
            dialog: false,
            payment: false
        }
    },

    computed: {
        badge () {
            const count = this.$store.state.cartList.length
            let badgeData = null
            if (count !== 0) {
                badgeData = {
                    overlap: true,
                    right: true,
                    value: count
                }
            }
            return badgeData
        }
    }
}
</script>

<style>
html
{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
             SimSun, sans-serif;;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
::-webkit-scrollbar {
    display:none
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
</style>
