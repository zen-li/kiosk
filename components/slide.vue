<template>
                    <!-- BEGIN of Swiper Box -->
                    <div v-swiper:mySwiper="swiperOption" class="swiper-box swiper-container swiper-container-horizontal">
                        <div class="swiper-wrapper">
                            <!-- BEGIN of swiper slide -->
                            <div class="swiper-slide" v-for="item in heroBooks" v-bind:key="item.guid">
                                <v-layout row wrap class="pt-1 heroBox">
                                    <!-- BEGIN of item cover -->
                                    <v-flex xs4>
                                        <v-card class="darken-2 promobox elevation-4">
                                            <v-card-media class="white--text" :src="item.cover" height="420px"></v-card-media>
                                        </v-card>
                                    </v-flex>
                                    <!-- END of item cover -->
                                    <!-- BEGIN of item information -->
                                    <v-flex xs8>
                                        <v-layout column wrap class="pt-2">
                                            <!-- item title -->
                                            <div class="display-1 grey--text text--darken-1"><strong>{{item.name}}</strong></div>
                                            <!-- item author -->
                                            <v-layout row wrap class="mt-3">
                                                <v-flex xs2>
                                                    <span class="subheading"><strong>作者：</strong></span>
                                                </v-flex>
                                                <v-flex xs10>
                                                    <span>{{item.author}}</span>
                                                </v-flex>
                                            </v-layout>
                                            <!-- item summary -->
                                            <v-layout column wrap class="mt-1">
                                                <v-flex xs12>
                                                    <span class="subheading"><strong>简介</strong></span>
                                                </v-flex>
                                                <v-flex xs12>
                                                    <span>{{item.summary}}</span>
                                                </v-flex>
                                            </v-layout>
                                            <!-- item price -->
                                            <v-layout row wrap class="mt-4">
                                                <v-flex xs16>
                                                    <span class="display-1"><s>原价：￥{{item.price}}</s></span>
                                                    <span class="display-1 red--text ml-4">促销价：￥{{item.discountPrice}}</span>
                                                </v-flex>
                                            </v-layout>
                                            <!-- action buttons -->
                                            <v-layout row wrap class="mt-4">
                                                <v-flex xs6>
                                                    <v-btn class="primary white--text">
                                                        <v-icon dark left>check_circle</v-icon>
                                                        了解更多
                                                    </v-btn>
                                                </v-flex>
                                                <v-flex xs6>
                                                    <v-btn class="red white--text">
                                                        <v-icon dark left>build</v-icon>
                                                        立即购买
                                                    </v-btn>
                                                </v-flex>
                                            </v-layout>
                                        </v-layout>
                                    </v-flex>
                                    <!-- END of item information -->
                                </v-layout>
                            </div>
                            <!-- END of swiper slide -->
                        </div>
                        <div class="swiper-button-prev" slot="button-prev"></div>
                        <div class="swiper-button-next" slot="button-next"></div>
                        <div class="swiper-pagination swiper-pagination-bullets"></div>
                    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
