<template>
    <v-layout row>
        <!-- BEGIN of Back button -->
        <v-flex xs1>
            <v-btn fab dark class="blue ml-5" @click="goBack">
                <v-icon>arrow_back</v-icon>
            </v-btn>
        </v-flex>
        <!-- END of Back button -->

        <!-- BEGIN of book section and comments section -->
        <v-flex xs5>
            <!-- BEGIN of book information -->
            <v-flex d-flex>
                <v-layout>

                    <!-- BEGIN of book cover -->
                    <v-flex xs5>
                        <v-card class="darken-2 promobox elevation-5 mt-2">
                            <v-card-media class="white--text" :src="book.CoverPicList" height="388px">
                            </v-card-media>
                        </v-card>
                    </v-flex>
                    <!-- END of book cover -->

                    <!-- BEGIN of information section -->
                    <v-flex d-flex xs6 class="mt-3">
                        <!-- BEGIN of book information -->
                        <v-flex class="headline"><strong>{{book.BookName}}</strong></v-flex>
                        <v-flex class="grey--text darken-5 mt-4">南土受菜碃！查智间言白年视增！车雪重故！南土受菜碃！查智间言白年视增！车雪重故！南土受菜碃！查智间言白年视增！车雪重故！</v-flex>
                        <v-flex class="mt-5"><h5 class="red--text">折扣价：￥1.00</h5></v-flex>
                        <!-- END of book information -->

                        <!-- BEGIN of action buttons -->
                        <v-layout>
                            <v-flex xs6>
                                <v-dialog v-model="dialog" width="50%">
                                    <v-btn slot="activator">购买单本</v-btn>
                                    <book-dialog :book="book"></book-dialog>
                                </v-dialog>
                            </v-flex>
                        </v-layout>
                        <!-- END of action buttons -->
                    </v-flex>
                    <!-- END of information section -->

                </v-layout>
            </v-flex>
            <!-- END of book information -->

            <!-- BEGIN of comments section -->
            <v-flex d-flex class="mt-4">
                <h5>精彩书评</h5>
            </v-flex>
            <!-- BEGIN of comments -->
            <v-flex d-flex>
                    <v-list three-line>
                        <template v-for="item in comments">
                            <v-subheader v-if="item.header" v-text="item.header" v-bind:key="item.title"></v-subheader>
                            <v-divider v-else-if="item.divider" v-bind:inset="item.inset" v-bind:key="item.title"></v-divider>
                            <v-list-tile avatar v-else v-bind:key="item.title">
                                <v-list-tile-avatar>
                                    <img :src="item.avatar" alt="">
                                </v-list-tile-avatar>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="item.title"></v-list-tile-title>
                                    <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                                </v-list-tile-content>
                            </v-list-tile>
                        </template>
                    </v-list>
            </v-flex>
            <!-- END of book section -->
        </v-flex>
        <!-- END of book section -->

        <!-- BEGIN of related books -->
        <v-flex xs6>
            <v-flex d-flex class="mt-5">
                <h5>猜你喜欢</h5>
            </v-flex>
            <!-- BEGIN of related books -->
            <v-flex d-flex>
                <v-layout row wrap>
                    <v-flex xs3 v-for="item in related" v-bind:key="item.id">
                        <v-card class="darken=2 promobox elevation-5 mt-2">
                            <v-card-media class="white--text" :src="item.CoverPicList" height="280px"></v-card-media>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-flex>
            <!-- END of related books -->
        </v-flex>
        <!-- END of related books -->
    </v-layout>
</template>

<script>
import BookDialog from '../../components/dlgBookDetail'

const books =
    [{
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
    }]

const comments = [
    {
        avatar: '/images/avatar.png',
        title: '喜勒香州度狗跑共？任专重在士革型方妙气。',
        subtitle: '判科质黑礼斯而左窢记元不天跳质恩老总十？香体忍景夏请张科授变登身集即选衣接！班格喊友盖时团落答？街了字伯林未果汽长目统祖获血买房？份活丽票顶统冰宫恶树脚！次因并见因哥银系日山整塞！死备局充石场色欢夜！民致穿欧问幸戏内！计图候微弄！将睡病李吧正诉秘纸令男广？练成官春臓乎迹言遇乐异！机商务带办职什阵识三名天？科词随骨而般围式共素温作计！付规灵森钱伊草沉重？熟进默青自属。围用将随坦藸？入府皇总词巨未公。'
    },
    { divider: true, inset: true },
    {
        avatar: '/images/avatar.png',
        title: '太趣将总恩神喝短孩米态烧代！各真至地信。',
        subtitle: '牌规取莱处争面负纳张表部席。尼吗还丝挥元引近梦警请。弟雨微趣李毫药章尔们调火汉让红。暗四委团需深害？推梦着伦使女妻候叫变客秘卡据似。趣趣康牙反宝遗欢街教然力止弟！悲设告轻抱排？先敢引剧死通！八导待丈各责于依传继公利跳德做贝义局牙？玛若和装衣阿席。波穿护妻包伊显七交往精差众十馆联败。妹兴首姑举岛退角住姐过笔内群就进世！属报塞研共伤歌宫脱幸依以！闻始败民电差床击量名中演。办恩阳角妹刘调尽委随征杀迷妹！'
    },
    { divider: true, inset: true },
    {
        avatar: '/images/avatar.png',
        title: '市专科另台及幸段况姆就洋轻早相。父城兵！',
        subtitle: '帮背升春快跳人纪？克胜离印州部课族鞋下唱实贝？团其买嘴以门区雪独夜余图即精。往值夜毛醒然算于治红置满秋争。部条乐间鸟福密多境证适某句山注佛本座友？舞孤哪做种光远眼守据费项又旅京候日？何对莫书界！府喊奶戴汽何理济些领唱识气洛拉脚北料。斯圣言堂考参罗风洗别技洲掉？住钟追始念抱处与全熟清象江举交号灯！友两愿卡外？录适坚著村感责追轻吉。为换经给农死弄满别外路整角雨幸。整弟否望悲笔烟制用守打？令建台景言！？'
    },
    { divider: true, inset: true },
    {
        avatar: '/images/avatar.png',
        title: '收军守万党台孤照玩！名开哥别沉建高闻？！',
        subtitle: '计轻雨警盛知村研酒种候恶忘？习他先统片！亮去爸听戏劳冲某计毫喊局！牙浪市吸马怀热黄列汉诗！天醒莫枪牙皇些器期！共明族候质著童术玛调怕。靠产妻礼南图诺伯尽全拿甚话身儿烈？之像围静艺事伤领压放品属查意？争格慢收皮阿故丈兰层再花父谈升。耳兰琴束波做律时。科此研充九啊程急白节恶早担默节着来。木南叶轻决运两术功段明起副北袋精。算盖型业社？从加险端姑般非却日房乱团笔根鸟夜说？香向公管王力生没。术琴群预突呢法！'
    }
]

export default {
    async asyncData ({ params, error }) {
        let data = {}
        try {
            const book = books.find((bk) => { return bk.BookGuid === params.id })
            const related = []
            for (let i = 0; i < 8; i += 1) {
                related.push(books[i])
            }
            data = { book, related, comments }
            return data
        } catch (e) {
            error({ message: 'not found', statusCode: 404 })
        }
        return data
    },

    data () {
        return {
            dialog: false
        }
    },

    components: {
        BookDialog
    },

    methods: {
        goBack () {
            this.$router.go(-1)
        },
        closeDlg () {
            this.dialog = false
        }
    }
}
</script>

<style>

</style>
