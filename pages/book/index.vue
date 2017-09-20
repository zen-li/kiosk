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
            <v-flex xs2 v-for="item in books" v-bind:key="item.guid">
                <nuxt-link :to="`./book/${item.BookGuid}`">
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
            books: [
                {
                    BookGuid: '0197adbe-cf31-47e9-aff5-4f3b5a039f11',
                    BookName: '重新定义公司：谷歌是如何运营的',
                    CodeName: 'ds030551',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030551.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'edf516a4-0a20-42a5-bf1a-d2f6a8a219e6',
                    BookName: '未来简史（完整图文版）',
                    CodeName: 'ds030554',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030554.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '80b4e610-d3d1-482f-ae1f-b060243c4aad',
                    BookName: '人类简史',
                    CodeName: 'ds030561',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030561.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '4be2776f-3f2a-46d8-825f-b7ecca12e87b',
                    BookName: '历史的教训',
                    CodeName: 'ds030563',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030563.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '7055b5ee-6782-4987-85b8-071a4cb4d3e9',
                    BookName: '大国崛起',
                    CodeName: 'ds030564',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030564.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '9cb46029-9a54-45fa-afdc-b0ab50613e3d',
                    BookName: '丝绸之路：一部全新的世界史',
                    CodeName: 'ds030560',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030560.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '074d8891-8ebb-4f4c-805c-39129b73159b',
                    BookName: '曾国藩的正面与侧面(独立作者)',
                    CodeName: 'ds030549',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030549.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '5738f220-e623-4d57-97b4-2184d0b59879',
                    BookName: '大道之行：中国共产党与中国社会主义',
                    CodeName: 'ds030565',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030565.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '1d6bb6ae-2786-49a4-91a7-40dc4c9c9e4c',
                    BookName: '岛上书店',
                    CodeName: 'ds030566',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030566.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '23442ccd-3b88-4492-a345-1e6e90be4102',
                    BookName: '红顶商人胡雪岩珍藏版大全集（套装共6册）',
                    CodeName: 'ds030555',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030555.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '10f6334c-22e4-4ca8-858b-d5946d4ad72d',
                    BookName: '华杉讲透《论语》',
                    CodeName: 'ds030562',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030562.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'a67c4111-5413-4563-b178-26acf9eb5d96',
                    BookName: '蒋介石与现代中国',
                    CodeName: 'ds030558',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030558.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '23a9502c-ecf2-4b37-aeaf-fba20b09ddbd',
                    BookName: '解忧杂货店',
                    CodeName: 'ds030559',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030559.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '53f6f49a-ae97-48e4-92a4-dd54849d395a',
                    BookName: '罗辑思维：中国为什么有前途',
                    CodeName: 'ds030556',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030556.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '09edb6f1-39dc-4d38-bdcb-228d88c34699',
                    BookName: '腾讯传1998—2016',
                    CodeName: 'ds030557',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030557.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'c88899e9-1e56-46d7-8b60-7a1fd38500e4',
                    BookName: '学习之道',
                    CodeName: 'ds030553',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030553.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'ed3a6fd3-cbc6-4822-97d5-889fae5f2355',
                    BookName: '杨绛传（追思纪念版）',
                    CodeName: 'ds030568',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030568.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'ca87cf59-f68a-496a-b9f5-314f7b50af3b',
                    BookName: '一个人的朝圣(大鱼读品系列)（1）',
                    CodeName: 'ds030550',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030550.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '8134af3e-875e-4cf2-b077-4c320c63f221',
                    BookName: '战天京：晚清军政传信录',
                    CodeName: 'ds030567',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030567.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'e4dd5f90-0e25-46b3-975a-cdaf52546c27',
                    BookName: '只有医生知道（套装全3册）',
                    CodeName: 'ds030552',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds030552.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'B92A170A-A382-452A-8B00-1D0E2711985E',
                    BookName: '隐藏在深层次的历史真相',
                    CodeName: 'ds020267',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds020267.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '7F5A53FE-495D-4570-985F-C2487F8A6BD2',
                    BookName: '与仓央嘉措一起修行',
                    CodeName: 'ds029158',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029158.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'C6F8011E-DFE4-4C49-934C-93E0071663CA',
                    BookName: '世界是部金融史：全新修订典藏版',
                    CodeName: 'ds029141',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029141.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '574EAB4E-10B5-45F0-9AA6-C6856028D333',
                    BookName: '于丹趣品人生',
                    CodeName: 'ds012720',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds012720.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'E70D236F-C2CC-4C03-9853-9D2D8C3B1FC4',
                    BookName: '年轻人要熟知的2个文化常识',
                    CodeName: 'ds029167',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029167.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '0E13A194-3D9A-4FAC-8AF6-5A96AF6356E4',
                    BookName: '跟曾国藩学做官,跟胡雪岩学经商 (紫图书库·成功励志：04)',
                    CodeName: 'ds029020',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029020.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'D9D21898-CB93-4377-AD44-A417DF08CC8D',
                    BookName: '哈佛大学·幸福课',
                    CodeName: 'ds029104',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029104.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'AB7D555E-297A-47B5-82D7-2D1187D8A025',
                    BookName: '流血的仕途：李斯与秦始皇（下）',
                    CodeName: 'ds029035',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029035.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '5C87AE29-65CB-41E6-898D-D1A9F3142D0D',
                    BookName: '习惯成就未来：一个“三无”教师的心力笔记',
                    CodeName: 'ds029619',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029619.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '54E8A8A3-53D6-4EC4-978F-035228E63726',
                    BookName: '图解世界战争战法：装备、作战技能和战术.古代公元前3年～公元500年',
                    CodeName: 'ds029606',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029606.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: 'C3322864-B2E7-4A6E-85BF-B2A8CF8188F3',
                    BookName: '曼哈顿的中国村',
                    CodeName: 'ds029601',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029601.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }, {
                    BookGuid: '7FE6A3D6-4FA8-42C2-9725-DA119BABAC78',
                    BookName: '世界简史',
                    CodeName: 'ds029052',
                    CoverPicList: 'http://ebook.qikan.com/bookpicture/ds029052.jpg',
                    Price: 39.99,
                    DiscountPrice: 19.99
                }
            ]
        }
    }
}
</script>

<style>

</style>



