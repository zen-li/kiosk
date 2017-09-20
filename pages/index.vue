<template>
    <v-container grid-list-md>
        <!-- BEGIN of promotion area -->
        <v-layout row wrap class="mt-0">
            <v-flex xs3 v-for="item in promos" v-bind:key="item.id">
                <v-card class="darken-2 white--text promobox elevation-2">
                    <v-card-media class="white--text" :src="`/images/${item.banner_l}`" height="110px">
                    </v-card-media>
                    <!-- <v-card-title class="mt-1">
                        <h5 class="promoboxTitle text--black mb-0">{{ item.name }}</h5>
                        <img class="icon" src="/images/play.png">
                    </v-card-title> -->
                </v-card>
            </v-flex>
        </v-layout>
        <!-- END of promoition area -->

        <!-- BEGIN of main content -->
        <v-layout row class="mt-2">
            <!-- BEGIN magazine and book recommendation column -->
            <v-flex xs6>
                <!-- BEGIN of magazine recommendation -->
                <v-layout row class="mt-1">
                    <h5>名刊会</h5>
                </v-layout>
                <v-layout row class="mt-1">
                    <v-flex xs3 v-for="item in mags" v-bind:key="item.id">
                        <v-card class="darken-2 promobox elevation-4 mr-5">
                        <v-card-media class="white--text" :src="`${item.cover}`" height="228px">
                        </v-card-media>
                    <!-- <v-card-title class="mt-1 py-1">
                        <h6 class="promoboxTitle text--black mb-0">{{ item.name }}</h6>
                    </v-card-title>
                    <v-card-text class="text--black mb-0 pt-2">
                        <div>{{item.year}}年 · 第{{item.issue}}期</div>
                    </v-card-text> -->
                        </v-card>
                    </v-flex>
                </v-layout>
                <!-- END of magazine recommendation -->

                <!-- BEGIN of book recommendation -->
                <v-layout row class="mt-3">
                    <h5>精品图书</h5>
                </v-layout>
                <v-layout row wrap class="mt-1">
                    <v-flex xs3 v-for="item in books" v-bind:key="item.id">
                        <v-card class="darken-2 promobox elevation-4 mr-5">
                            <v-card-media class="white--text" :src="item.cover" height="228px">
                            </v-card-media>
                            <!-- <v-card-title class="mt-1 py-1">
                                <h6 class="promoboxTitle text--black mb-0">{{ item.name }}</h6>
                            </v-card-title> -->
                        </v-card>
                    </v-flex>
                </v-layout>
                <!-- END of book recommendation -->
            </v-flex>
            <v-flex xs6>
                <v-layout row class="mt-3">
                    <h5>精品图书</h5>
                </v-layout>
                <!-- BEGIN of large promotion banner -->
                <v-layout row wrap class="pt-2">
                    <v-flex xs12>
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
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
        <!-- END of main content -->
   </v-container>
</template>

<script>
/*eslint max-len: ["error", { "ignoreStrings": true }]*/
export default {
    components: {
    },

    data () {
        return {
            promos: [
                {
                    id: 'promo001',
                    type: 'promo_book',
                    name: '9折精品精装图书',
                    banner_s: '',
                    banner_l: 'promo001.jpg'
                },
                {
                    id: 'promo002',
                    type: 'promo_magazine',
                    name: '精品杂志1元购',
                    banner_s: '',
                    banner_l: 'promo002.jpg'
                },
                {
                    id: 'promo003',
                    type: 'promo_merch',
                    name: '精品Moleskine笔记本',
                    banner_s: '',
                    banner_l: 'promo003.jpg'
                },
                {
                    id: 'promo004',
                    type: 'promo_merch',
                    name: '德国灯塔笔记本专区',
                    banner_s: '',
                    banner_l: 'promo004.jpg'
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
            heroBooks: [
                {
                    guid: '4be2776f-3f2a-46d8-825f-b7ecca12e87b',
                    name: '历史的教训',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030563.jpg',
                    author: '作者',
                    summary: '导王敢每拥至片！助消属饭免过近好计姐或收蜖美喝百空？罗从影耳视牛？尽算死方很名修识遗知广依过角采顺深？福行北寻洲习历败忆戴红热武证派玛察线艺！王际落运样分重难够死待视研强孤恶型缺？求异雷左刘己娜汽发极杂批。臓伙任公默群弟全冰神段随朋再切七。线招归有况幸。腿办杂泪美止练含证真！过强产守做脸意初待农标败旁做造微节鞋！人贵破急品胡怎通索摇江不品！没器属卫商雄袋。议五望多金够的！发仅以密你拍音枪错白亚连。',
                    price: 39.99,
                    discountPrice: 19.99
                },
                {
                    guid: '7055b5ee-6782-4987-85b8-071a4cb4d3e9',
                    name: '大国崛起',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030564.jpg',
                    author: '作者',
                    summary: '明节安老悲跟及！疑紧着门含勒雷致河样计甚曲维特项小火且！男判乎胡飞！公泪别明谢藏她释刚。响恶男国与认救学高香亲激树心狗实代！支称既娘乡食愿血遗著律志。机练种饭穿程游强青当假已息都！过许波岁琴民背引玩纸身城。怕渐拉校关数属松决置諣恩！星军达紧盖换灯博丝狗做？守赶族拥初营接野相司肯年迷伦则。保局细段童假财小破参戏。将转考写级窢忙险吧府农无。牌事怪结红你商严衣阿缺运胜遍彩曲介哭倒。此玛伴真拥黑维云。但！',
                    price: 39.99,
                    discountPrice: 19.99
                },
                {
                    guid: '23a9502c-ecf2-4b37-aeaf-fba20b09ddbd',
                    name: '解忧杂货店',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030559.jpg',
                    author: '东野圭吾',
                    summary: '希词忙热医光细！激身造改帮其必公投。拉千石相归律北相料入认说划归剧马司还！值联吗离势？干第听妹直层脚本洛喜。置顺曲皇毛亡松去迹！琴给阳动则方查什？较诉功情吧遍获将假合闻面既帝请。子责抱打拿？传般恐解父秘忙食优术蜖严！盛做简近端满花结国？乡社走午特把之便英难能刻研朝质带影！排九初达嘴管步按照费洲座？需视结站资让脱暗吧比？平观拿认呼枪资棋又只委居为听忽举武！罪雄微黄充吉举此？已窗九忆蜖推尼吸许鲜团布。',
                    price: 39.99,
                    discountPrice: 19.99
                },
                {
                    guid: '09edb6f1-39dc-4d38-bdcb-228d88c34699',
                    name: '腾讯传1998—2016',
                    cover: 'http://ebook.qikan.com/bookpicture/ds030557.jpg',
                    author: '吴晓波',
                    summary: '并靠您过整传？问江城条不卖区场红目支满谢公离？异精福专言存名背组本约证打风会去就赛。取泪顺例树孤困短非人也？半臓望束打。卫排贵讲急看育菜暗关？候翻陈习头列纪并斯健高投否尽穿藸睡！熟绝又尼弟谈列的袋找层使？妈花戴南造影低群果灵莫杂六旅校！况孤句使我。铁次主石束。盛看排狗九乱管车贝型察碃边奇。语简江许格！线物去面节范子所灯？通店挥智戏乐亡非近悲烧请痛历救云创？宝罪珍南纪手伙演度穿乐苏定电管停！伤无倒。',
                    price: 39.99,
                    discountPrice: 19.99
                }
            ],
            swiperOption: {
                autoplay: 10000,
                pagination: '.swiper-pagination',
                paginationClickable: true,
                nextButton: '.swiper-button-next',
                prevButton: '.swiper-button-prev',
                loop: true,
                spaceBetween: 30
            }
        }
    }
}
</script>

<style>
.infoBox > v-layout {
    margin-top: 15px;
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
    height: 540px;
    /* width: 100%; */
}
.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
}
.swiper-pagination > .swiper-pagination-bullet {
    background-color: red;
}
</style>
