<template>
    <v-container grid-list-xs class="home-container">
        <!-- <v-parallax class="elevation-3" src="/images/blue-grey-pentagonal-background.png">
            <v-layout row wrap class="pt-1">
                <v-flex xs12>

                </v-flex>
            </v-layout>
        </v-parallax> -->
        <div><img src="http://oy1y8tim8.bkt.clouddn.com/indextop@1.png" alt="" class="elevation-1"></div>
        <!-- BEGIN of promotion area -->
        <v-layout row wrap class="my-4 ml-5">
            <v-flex xs3 v-for="item in featNav" v-bind:key="item.id">
                <nuxt-link :to="item.link">
                <v-card class="darken-2 white--text promobox elevation-2">
                    <v-card-media class="white--text" :src="item.img" height="110px">
                    </v-card-media>
                </v-card>
                </nuxt-link>
            </v-flex>
        </v-layout>
        <!-- END of promoition area -->

        <!-- BEGIN of magazine recommendation column -->
        <v-layout class="my-4 mx-5" row>
            <v-flex d-flex xs12>
                <v-layout row class="mt-1 ml-2">
                    <v-flex xs11>
                        <h5>
                            <v-icon class="red--text text--darken-2 mr-2" medium>photo_album</v-icon>
                            <strong>精选期刊</strong>
                        </h5>
                    </v-flex>
                    <v-flex xs1>
                        <v-btn flat class="mb-2 red--text text--darken-2" to="/magazine">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of magazine cover list -->
                <v-layout row class="ml-2">
                    <v-flex xs4 v-for="item in recommendMags" v-bind:key="item.id">
                        <nuxt-link :to="`/magazine/${item.id}`">
                        <v-card class="mr-5 card-cover" raised>
                            <v-card-media :src="item.cover" height="220px"></v-card-media>
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
                <!-- END of magazine cover list -->
            </v-flex>
            <!-- END of magazine recommendation column -->
        </v-layout>

        <!-- BEGIN of book banner -->
        <v-layout class="my-4 mx-5" row>
            <v-flex d-flex xs12>
                <v-layout row class="mt-1 ml-2">
                    <v-flex xs11>
                        <h5>
                            <v-icon class="red--text text--darken-2 mr-2" medium>photo_album</v-icon>
                            <strong>中信奇点图书系列</strong>
                        </h5>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of banner swiper -->
                <v-layout row class="mt-1 ml-2">
                    <v-flex xs12>
                        <div v-swiper:mySwiper="swiperOption" class="swiper-box swiper-container swiper-container-horizontal elevation-3">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item in bannerBooks" v-bind:key="item.id">
                                    <nuxt-link :to="`/book/${item.id}`">
                                    <v-card class="mr-5 card-cover" raised>
                                        <v-card-media :src="item.cover" height="220px"></v-card-media>
                                        <v-card-text>
                                            <div class="card-title">
                                                <span>{{item.name}}</span>
                                                <span class="paragraph-end"></span>
                                            </div>
                                        </v-card-text>
                                    </v-card>
                                    </nuxt-link>
                                </div>
                            </div>
                        </div>
                    </v-flex>
                </v-layout>
                <!-- END OF banner swiper -->
            </v-flex>
        </v-layout>
        <!-- END of book banner -->

        <!-- BEGIN of book recommendation -->
        <v-layout class="my-4 mx-5" row>
            <v-flex d-flex xs12>
                <v-layout class="mt-1 ml-2" row>
                    <v-flex xs11>
                        <h5>
                            <v-icon class="mr-2 red--text text--darken-2">book</v-icon>
                            <strong>精选图书</strong>
                        </h5>
                    </v-flex>
                    <v-flex xs1>
                        <v-btn flat class="mb-2 red--text text--darken-2" to="/book">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of book cover list -->
                <v-layout row class="ml-2">
                    <v-flex xs4 v-for="item in recommendBooks" v-bind:key="item.id">
                        <nuxt-link :to="`/book/${item.id}`">
                        <v-card class="mr-5 card-cover" raised>
                            <v-card-media :src="item.cover" height="220px"></v-card-media>
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
                        </nuxt-link>
                    </v-flex>
                </v-layout>
                <!-- END of book cover list -->
            </v-flex>
        </v-layout>

        <!-- BEGIN of merchandise recommendation -->
        <v-layout class="my-4 mx-5" row>
            <v-flex d-flex xs12>
                <v-layout row class="mt-1 ml-2">
                    <v-flex xs11>
                        <h5>
                            <v-icon class="red--text text--darken-2 mr-2" medium>photo_album</v-icon>
                            <strong>Moleskine精品笔记本系列</strong>
                        </h5>
                    </v-flex>
                    <v-flex xs1>
                        <v-btn flat class="mb-2 red--text text--darken-2">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row wrap class="mb-4 ml-2">
                    <v-flex xs6 v-for="item in featMerch" v-bind:key="item.id">
                        <nuxt-link :to="`/merchandise/${item.m_id}`">
                        <v-card class="darken-2 white--text promobox elevation-2 mb-5">
                            <v-card-media class="white--text" :src="item.img" height="310px">
                            </v-card-media>
                        </v-card>
                        </nuxt-link>
                    </v-flex>
                </v-layout>
                <!-- END OF banner swiper -->
            </v-flex>
        </v-layout>
        <!-- END of merchandise banner -->
   </v-container>
    <!-- END of main content -->
</template>

<script>
import db from '../data'

export default {
    components: {
    },

    computed: {
        recommendMags () {
            return db.magazines.slice(0, 8)
        },
        recommendBooks () {
            return db.books.slice(0, 8)
        },
        bannerBooks () {
            const ads = db.bookpromo.items
            const books = []

            ads.forEach((id) => {
                const book = db.books.find((bk) => {
                    return bk.id === id
                })
                books.push(book)
            })
            return books
        },
        featNav () {
            return db.featnav
        },
        featMerch () {
            return db.featmerch
        }
    },

    data () {
        return {
            swiperOption: {
                pagination: '.swiper-pagination',
                slidesPerView: 6,
                centeredSlides: true,
                paginationClickable: true,
                spaceBetween: 0,
                grabCursor: true,
                simulateTouch: true,
                touchEventsTarget: 'wrapper'
            }
        }
    }
}
</script>

<style scoped>
.infoBox > v-layout {
    margin-top: 15px;
}
.home-container {
    background-color: #eeeeee;
}
.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, .5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  top: 50%;
  transform: translateY(-50%);
}
.heroBox {
    width: 100%;
    height: 100%;
}
.swiper-box {
    background: url('http://oy1y8tim8.bkt.clouddn.com/indexqidian@1.png') no-repeat;
    height: 320px;
}
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-pagination > .swiper-pagination-bullet {
    background-color: red;
}
.swiper-slide:nth-child(2n) {
    width: 40%;
}
.swiper-slide:nth-child(3n) {
    width: 20%;
}

</style>
