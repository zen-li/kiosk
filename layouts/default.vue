<template>
  <v-app light>
     <!-- top navigation bar -->
    <v-toolbar dark class="primary">
        <!-- title and logo -->
        <v-btn class="pink mr-5" light large absolute bottom right fab>
            <v-icon light>local_grocery_store</v-icon>
        </v-btn>
        <v-toolbar-title>数字书刊亭 · Next</v-toolbar-title>
        <v-spacer></v-spacer>
        <!-- navigation buttons -->
        <v-btn icon to="/">
            <v-icon>home</v-icon>
        </v-btn>
        <v-toolbar-items class="ml-5">
            <v-btn to="/book" flat class="title">新知图书</v-btn>
            <v-btn to="/magazine" flat class="title">名刊会</v-btn>
            <v-btn to="/merchandise" flat class="title">文化周边</v-btn>
            <v-btn to="/postcard" flat class="title">自助明信片</v-btn>
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

<style>
html
{
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
             SimSun, sans-serif;;
  font-size: 16px;
  word-spacing: 1px;
  background-color: #eeeeee;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
</style>
