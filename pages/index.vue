<template>
    <v-container grid-list-xs class="home-container">
        <!-- <v-parallax class="elevation-3" src="/images/blue-grey-pentagonal-background.png">
            <v-layout row wrap class="pt-1">
                <v-flex xs12>

                </v-flex>
            </v-layout>
        </v-parallax> -->
        <div><img src="/images/b_index.jpg" alt="" class="elevation-1"></div>
        <!-- BEGIN of promotion area -->
        <v-layout row wrap class="my-4 ml-5">
            <v-flex xs3 v-for="item in promos" v-bind:key="item.id">
                <v-card class="darken-2 white--text promobox elevation-2">
                    <v-card-media class="white--text" :src="`/images/${item.banner_l}`" height="110px">
                    </v-card-media>
                </v-card>
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
                        <v-btn flat class="mb-2 red--text text--darken-2">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of magazine cover list -->
                <v-layout row class="ml-2">
                    <v-flex xs4 v-for="item in recommendMags" v-bind:key="item.id">
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
                            <strong>精品中信图书</strong>
                        </h5>
                    </v-flex>
                    <v-flex xs1>
                        <v-btn flat class="mb-2 red--text text--darken-2">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of banner swiper -->
                <v-layout row class="mt-1 ml-2">
                    <v-flex xs12>
                        <div v-swiper:mySwiper="swiperOption" class="swiper-box swiper-container swiper-container-horizontal elevation-3">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide" v-for="item in bannerBooks" v-bind:key="item.id">
                                    <v-card class="mr-5 card-cover" raised>
                                        <v-card-media :src="item.cover" height="220px"></v-card-media>
                                        <v-card-text>
                                            <div class="card-title">
                                                <span>{{item.name}}</span>
                                                <span class="paragraph-end"></span>
                                            </div>
                                        </v-card-text>
                                    </v-card>
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
                        <v-btn flat class="mb-2 red--text text--darken-2">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of book cover list -->
                <v-layout row class="ml-2">
                    <v-flex xs4 v-for="item in recommendBooks" v-bind:key="item.id">
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
                            <strong>优选商品</strong>
                        </h5>
                    </v-flex>
                    <v-flex xs1>
                        <v-btn flat class="mb-2 red--text text--darken-2">查看更多</v-btn>
                    </v-flex>
                </v-layout>
                <!-- BEGIN of banner swiper -->
                <v-layout row wrap class="my-4 ml-2">
                    <v-flex xs6 v-for="item in promos" v-bind:key="item.id">
                        <v-card class="darken-2 white--text promobox elevation-2 mb-5">
                            <v-card-media class="white--text" :src="`/images/${item.banner_l}`" height="310px">
                            </v-card-media>
                        </v-card>
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
            const ads = db.book_hero_ads.items
            const books = []

            ads.forEach((id) => {
                const book = db.books.find((bk) => {
                    return bk.id === id
                })
                books.push(book)
            })
            return books
        }
    },

    data () {
        return {
            promos: [
                {
                    id: 'promo001',
                    type: 'promo_book',
                    name: '9折精品精装图书',
                    banner_s: '',
                    banner_l: 's1.jpg'
                },
                {
                    id: 'promo002',
                    type: 'promo_magazine',
                    name: '精品杂志1元购',
                    banner_s: '',
                    banner_l: 's2.jpg'
                },
                {
                    id: 'promo003',
                    type: 'promo_merch',
                    name: '精品Moleskine笔记本',
                    banner_s: '',
                    banner_l: 's3.jpg'
                },
                {
                    id: 'promo004',
                    type: 'promo_merch',
                    name: '德国灯塔笔记本专区',
                    banner_s: '',
                    banner_l: 's4.jpg'
                }
            ],
            mags: [
                {
                    guid: 'AD6FC478-80E2-4E63-99E4-02BE894398EA',
                    name: '三联生活周刊',
                    year: 2017,
                    issue: 33,
                    codename: 'slzk',
                    cover: 'http://img1.qikan.com/qkimages/slzk/slzk201733-z.jpg',
                    price: 5,
                    discountPrice: 1
                },
                {
                    guid: 'EA265B17-0D79-4240-B3DB-0B4CF94DE08B',
                    name: '读者',
                    year: 2017,
                    issue: 17,
                    codename: 'duzh',
                    cover: 'http://img1.qikan.com/qkimages/duzh/duzh201717-z.jpg',
                    price: 5,
                    discountPrice: 1
                },
                {
                    guid: '540A92C2-8E11-45C5-BC66-0FE9C9EE4D3C',
                    name: '第一财经周刊',
                    year: 2017,
                    issue: 31,
                    codename: 'dycj',
                    cover: 'http://img1.qikan.com/qkimages/dycj/dycj201731-z.jpg',
                    price: 5,
                    discountPrice: 1
                },
                {
                    guid: '19FEB0F6-93A1-45E9-8542-8514FBCBDEC0',
                    name: '南都娱乐周刊',
                    year: 2017,
                    issue: 15,
                    codename: 'ndyl',
                    cover: 'http://img1.qikan.com/qkimages/ndyl/ndyl201715-z.jpg',
                    price: 5,
                    discountPrice: 1
                }
            ],
            books: [
                {
                    guid: '0197adbe-cf31-47e9-aff5-4f3b5a039f11',
                    name: '重新定义公司：谷歌是如何运营的',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030551.jpg'
                },
                {
                    guid: 'edf516a4-0a20-42a5-bf1a-d2f6a8a219e6',
                    name: '未来简史（完整图文版）',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030554.jpg'
                },
                {
                    guid: '80b4e610-d3d1-482f-ae1f-b060243c4aad',
                    name: '人类简史',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030561.jpg'
                },
                {
                    guid: '4be2776f-3f2a-46d8-825f-b7ecca12e87b',
                    name: '历史的教训',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030563.jpg'
                }
            ],
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
    background: url('~static/images/b_background.jpg') no-repeat;
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
