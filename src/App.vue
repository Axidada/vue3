<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Nav />
        </el-aside>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Header from '../src/components/Header/Header.vue'
import Nav from '../src/components/Nav/MenuItem.vue'
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.el-header {
  background: #545c64;
  line-height: var(--el-header-height);
}
.el-aside {
  background: #545c64;
  height: 100vh;
}
</style>
