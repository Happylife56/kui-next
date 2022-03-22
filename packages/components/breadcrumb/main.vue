<template>
  <div class="k-breadcrumb flex-between">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item v-for="item in list" :to="item.path ? { path: item.path } : ''" :key="item.path">
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'KBreadcrumb',
  props: {
    list: { type: Array, default: () => [] },
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss">
.k-breadcrumb {
    border-bottom: 1px solid #d8dce5;
    height: 50px;
    padding: 0 20px;
  }
.is-link {
  color: #409eff !important;
}
</style>
