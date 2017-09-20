<template>
    <v-container grid-list-md>
        <!-- BEGIN of main content -->
        <v-layout row wrap class="mt-3">
            <v-flex xs6 v-for="item in merchs" v-bind:key="item.id">
                <v-layout row class="mt-1">
                    <v-flex d-flex xs4 class="mt-1">
                        <v-card class="darken-2 promobox elevation-4 mr-5 mt-1">
                            <v-card-media class="white--text" :src="item.cover" height="228px">
                            </v-card-media>
                        </v-card>
                    </v-flex>
                    <v-flex d-flex xs8 class="pr-5">
                        <v-flex>
                            <span class="subheading"><strong>{{item.name}}</strong></span></v-flex>
                        <v-flex class="mt-3 descBox">{{item.description}}</v-flex>
                        <v-flex>
                            <v-layout row wrap class="mt-4">
                                <v-flex xs6>
                                    <v-btn class="primary white--text">
                                        <v-icon dark left>check_circle</v-icon>
                                        了解更多
                                    </v-btn>
                                </v-flex>
                                <v-flex xs6>
                                    <v-btn class="red white--text" @click="addCart(item)">
                                        <v-icon dark left>build</v-icon>
                                        立即购买
                                    </v-btn>
                                </v-flex>
                            </v-layout>
                        </v-flex>
                    </v-flex>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>

export default {
    methods: {
        addCart (item) {
            const cartItem = {
                id: item.id,
                picture: item.cover,
                title: item.name,
                price: item.price
            }
            this.$store.commit('addCart', cartItem)
        }
    },

    data () {
        return {
            merchs: [
                {
                    id: 'm001',
                    name: 'Moleskine限量版大眼萌小黄人蓝色硬面横间笔记本',
                    price: 208.00,
                    discountPrice: 199.99,
                    description: '由经典电影《超级奶爸》又名《卑鄙的我》（英文名Despicable Me）制作方美国环球影视Universal Studio官方授权，大眼萌小黄人系列限量版主题笔记本。始终走在追寻头号大坏蛋之旅的小黄人将会拥有怎样的鬼马奇思？打开Moleskine你就会发现。',
                    cover: 'http://ov0u4w5y1.bkt.clouddn.com/mo_0_0.jpg',
                    detailPics: ['http://ov0u4w5y1.bkt.clouddn.com/mo_0_0.jpg', 'http://ov0u4w5y1.bkt.clouddn.com/mo_0_1.jpg']
                }, {
                    id: 'm002',
                    name: 'Moleskine笔记本商务办公黑色纯白软面记事本加大型',
                    price: 243.00,
                    discountPrice: 199.99,
                    description: '传承自文艺复兴时vintage的文化精髓。油性布封面无酸纸张都散发着那个时代独特又浓郁的怀旧气味，保存着永久不变的传世名作。而圆角书页，橡筋箍环，丝带书签亦倾诉着那个优雅岁月中累积的阅读习惯，表达出简约实用的内在精神。在时光的打磨中，这些成为了Moleskine标志性设计，也成为每一位Moleskine书写者们的专属印记。',
                    cover: 'http://ov0u4w5y1.bkt.clouddn.com/mo_1_0.jpg',
                    detailPics: ['http://ov0u4w5y1.bkt.clouddn.com/mo_1_0.jpg', 'http://ov0u4w5y1.bkt.clouddn.com/mo_1_1.jpg']
                }, {
                    id: 'm003',
                    name: 'Moleskine 经典胶杆宝珠笔Plus 0.7mm',
                    price: 187.00,
                    discountPrice: 99.00,
                    description: '延续Moleskine的简约优雅风格，以笔记本的矩形为原型，设计出别具特色的经典方形笔身。采用专为Moleskine纸张而设计的墨水，并附上笔架，让笔简洁地夹在笔记本封面，成为笔记本的伴侣，无论何时都能轻松携带。',
                    cover: 'http://ov0u4w5y1.bkt.clouddn.com/mo_2_0.jpg',
                    detailPics: ['http://ov0u4w5y1.bkt.clouddn.com/mo_2_0.jpg', 'http://ov0u4w5y1.bkt.clouddn.com/mo_2_1.jpg']
                }, {
                    id: 'm004',
                    name: 'Moleskine Toolbelt笔记本工具袋（口袋型）',
                    price: 248.00,
                    discountPrice: 199.99,
                    description: '传承自文艺复兴时vintage的文化精髓。油性布封面无酸纸张都散发着那个时代独特又浓郁的怀旧气味，保存着永久不变的传世名作。而圆角书页，橡筋箍环，丝带书签亦倾诉着那个优雅岁月中累积的阅读习惯，表达出简约实用的内在精神。在时光的打磨中，这些成为了Moleskine标志性设计，也成为每一位Moleskine书写者们的专属印记。',
                    cover: 'http://ov0u4w5y1.bkt.clouddn.com/mo_3_0.jpg',
                    detailPics: ['http://ov0u4w5y1.bkt.clouddn.com/mo_3_0.jpg', 'http://ov0u4w5y1.bkt.clouddn.com/mo_3_1.jpg']
                }, {
                    id: 'm005',
                    name: 'LEUCHTTURM1917灯塔德国口袋型A6经典无格笔记本红色硬封皮',
                    price: 129.00,
                    discountPrice: 99.00,
                    description: 'Leuchtturm1917, 德国公司，成立于1917年，拥有超过90年的生产高品质文具的历史。Leuchtturm1917纸制品以其精湛的纸品制作工艺，严格的品质要求，使其在欧洲文具纸品界享有非凡的名声，其中Leuchtturm1917绑带型写字本，更是在欧洲奢侈级别的写字本中占据高地。',
                    cover: 'http://ov0u4w5y1.bkt.clouddn.com/mo_4_0.jpg',
                    detailPics: ['http://ov0u4w5y1.bkt.clouddn.com/mo_4_0.jpg', 'http://ov0u4w5y1.bkt.clouddn.com/mo_4_1.jpg']
                }, {
                    id: 'm006',
                    name: 'LEUCHTTURM1917灯塔德国中开A5双色笔记本烟灰色加浅蓝色绷带硬封皮',
                    price: 227.00,
                    discountPrice: 99.00,
                    description: 'Leuchtturm1917, 德国公司，成立于1917年，拥有超过90年的生产高品质文具的历史。Leuchtturm1917纸制品以其精湛的纸品制作工艺，严格的品质要求，使其在欧洲文具纸品界享有非凡的名声，其中Leuchtturm1917绑带型写字本，更是在欧洲奢侈级别的写字本中占据高地。',
                    cover: 'http://ov0u4w5y1.bkt.clouddn.com/mo_5_0.jpg',
                    detailPics: ['http://ov0u4w5y1.bkt.clouddn.com/mo_5_0.jpg', 'http://ov0u4w5y1.bkt.clouddn.com/mo_5_1.jpg']
                }]
        }
    }
}
</script>

<style>
.descBox {
    height: 100px;
    overflow: hidden;
}
</style>
