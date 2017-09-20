<template>
    <v-container grid-list-md>
        <!-- BEGIN of category banners -->
        <v-layout row wrap class="mt-0">
            <v-flex xs3 v-for="item in category" v-bind:key="item.id">
                <v-card class="purple white--text promobox elevation-2">
                    <v-card-title class="mt-1">
                        <h5 class="white--text mb-0">{{ item.name }}</h5>
                        <!-- <img class="icon" src="/images/play.png"> -->
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
        <!-- END of category banners -->

        <!-- BEGIN of main content -->
        <v-layout row wrap class="mt-3">
            <v-flex xs2 v-for="item in magazines" v-bind:key="item.MagazineGuid">
                <nuxt-link :to="`./magazine/${item.MagazineGuid}`">
                    <v-card class="darken-2 promobox elevation-4 mr-5 mt-5">
                        <v-card-media class="white--text" :src="item.CoverPicList" height="328px">
                        </v-card-media>
                    <!-- <v-card-title class="mt-1 py-1">
                            <h6 class="promoboxTitle text--black mb-0">{{ item.name }}</h6>
                        </v-card-title> -->
                    </v-card>
                </nuxt-link>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    data () {
        return {
            category: [
                { id: '', name: '分类1' },
                { id: '', name: '分类2' },
                { id: '', name: '分类3' },
                { id: '', name: '分类4' },
                { id: '', name: '分类5' },
                { id: '', name: '分类6' },
                { id: '', name: '分类7' },
                { id: '', name: '分类8' }
            ],
            magazines: [
                {
                    MagazineGuid: 'AD6FC478-80E2-4E63-99E4-02BE894398EA',
                    MagazineName: '三联生活周刊',
                    Year: 2017,
                    Issue: 33,
                    CodeName: 'slzk',
                    CoverPicList: 'http://img1.qikan.com/qkimages/slzk/slzk201733-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: 'EA265B17-0D79-4240-B3DB-0B4CF94DE08B',
                    MagazineName: '读者',
                    Year: 2017,
                    Issue: 17,
                    CodeName: 'duzh',
                    CoverPicList: 'http://img1.qikan.com/qkimages/duzh/duzh201717-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '65545C2E-BB1C-4F32-8CDF-5995EF0BD73F',
                    MagazineName: '看天下',
                    Year: 2017,
                    Issue: 21,
                    CodeName: 'katx',
                    CoverPicList: 'http://img1.qikan.com/qkimages/katx/katx201721-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '7E788766-77A0-4093-B1F1-E3F55DD55137',
                    MagazineName: '意林',
                    Year: 2017,
                    Issue: 14,
                    CodeName: 'yili',
                    CoverPicList: 'http://img1.qikan.com/qkimages/yili/yili201714-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '08DC3C17-262E-4F58-B7D9-932AB966E582',
                    MagazineName: '故事会',
                    Year: 2017,
                    Issue: 15,
                    CodeName: 'gshu',
                    CoverPicList: 'http://img1.qikan.com/qkimages/gshu/gshu201715-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '19FEB0F6-93A1-45E9-8542-8514FBCBDEC0',
                    MagazineName: '南都娱乐周刊',
                    Year: 2017,
                    Issue: 15,
                    CodeName: 'ndyl',
                    CoverPicList: 'http://img1.qikan.com/qkimages/ndyl/ndyl201715-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: 'AD6FC478-80E2-4E63-99E4-02BE894398EA',
                    MagazineName: '三联生活周刊',
                    Year: 2017,
                    Issue: 33,
                    CodeName: 'slzk',
                    CoverPicList: 'http://img1.qikan.com/qkimages/slzk/slzk201733-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: 'EA265B17-0D79-4240-B3DB-0B4CF94DE08B',
                    MagazineName: '读者',
                    Year: 2017,
                    Issue: 17,
                    CodeName: 'duzh',
                    CoverPicList: 'http://img1.qikan.com/qkimages/duzh/duzh201717-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '65545C2E-BB1C-4F32-8CDF-5995EF0BD73F',
                    MagazineName: '看天下',
                    Year: 2017,
                    Issue: 21,
                    CodeName: 'katx',
                    CoverPicList: 'http://img1.qikan.com/qkimages/katx/katx201721-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '7E788766-77A0-4093-B1F1-E3F55DD55137',
                    MagazineName: '意林',
                    Year: 2017,
                    Issue: 14,
                    CodeName: 'yili',
                    CoverPicList: 'http://img1.qikan.com/qkimages/yili/yili201714-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '08DC3C17-262E-4F58-B7D9-932AB966E582',
                    MagazineName: '故事会',
                    Year: 2017,
                    Issue: 15,
                    CodeName: 'gshu',
                    CoverPicList: 'http://img1.qikan.com/qkimages/gshu/gshu201715-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '19FEB0F6-93A1-45E9-8542-8514FBCBDEC0',
                    MagazineName: '南都娱乐周刊',
                    Year: 2017,
                    Issue: 15,
                    CodeName: 'ndyl',
                    CoverPicList: 'http://img1.qikan.com/qkimages/ndyl/ndyl201715-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: 'AD6FC478-80E2-4E63-99E4-02BE894398EA',
                    MagazineName: '三联生活周刊',
                    Year: 2017,
                    Issue: 33,
                    CodeName: 'slzk',
                    CoverPicList: 'http://img1.qikan.com/qkimages/slzk/slzk201733-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: 'EA265B17-0D79-4240-B3DB-0B4CF94DE08B',
                    MagazineName: '读者',
                    Year: 2017,
                    Issue: 17,
                    CodeName: 'duzh',
                    CoverPicList: 'http://img1.qikan.com/qkimages/duzh/duzh201717-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '65545C2E-BB1C-4F32-8CDF-5995EF0BD73F',
                    MagazineName: '看天下',
                    Year: 2017,
                    Issue: 21,
                    CodeName: 'katx',
                    CoverPicList: 'http://img1.qikan.com/qkimages/katx/katx201721-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '7E788766-77A0-4093-B1F1-E3F55DD55137',
                    MagazineName: '意林',
                    Year: 2017,
                    Issue: 14,
                    CodeName: 'yili',
                    CoverPicList: 'http://img1.qikan.com/qkimages/yili/yili201714-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '08DC3C17-262E-4F58-B7D9-932AB966E582',
                    MagazineName: '故事会',
                    Year: 2017,
                    Issue: 15,
                    CodeName: 'gshu',
                    CoverPicList: 'http://img1.qikan.com/qkimages/gshu/gshu201715-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }, {
                    MagazineGuid: '19FEB0F6-93A1-45E9-8542-8514FBCBDEC0',
                    MagazineName: '南都娱乐周刊',
                    Year: 2017,
                    Issue: 15,
                    CodeName: 'ndyl',
                    CoverPicList: 'http://img1.qikan.com/qkimages/ndyl/ndyl201715-z.jpg',
                    Price: 5.00,
                    DiscountPrice: 1.00
                }
            ]
        }
    }
}
</script>

<style scoped>

</style>


