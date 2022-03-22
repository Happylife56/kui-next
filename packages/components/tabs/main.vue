<template>
  <div class="k-tabs" :class="{'style-card':!type}">
    <el-tabs class="flex-tabs" :type="type" v-bind="$attrs" v-model="activeName" @tab-click="handleClick">
      <el-tab-pane v-for="item in tabsList" :label="item.label" :name="item.name" :key="item.name" />
    </el-tabs>
    <div class="tabs-right ml10">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, computed, defineComponent } from 'vue';
import { useRoute, useRouter } from 'vue-router';

export default defineComponent({
  name: 'KTabs',
  props: {
    type: { type: String, default: '' },
    path: { type: String, default: 'user' },
    tabsList: {
      type: Array,
      default: () => [
        { label: '全部', name: 'all' },
        { label: '正常', name: 'normal' },
        { label: '已拉黑', name: 'block' },
      ],
    },
  },
  emits: ['tab-click', 'change'],
  setup(props, { emit }) {
    const route = useRoute();
    const router = useRouter();
    const type = computed(() => route.params.type || route.name);

    const activeName = ref(type.value);

    const query = computed(() => route.query);
    const handleClick = (tab) => {
      if (props.path) {
        router.push({ path: `${tab.paneName}`, query: query.value });
      } else emit('tab-click', tab.paneName);
      emit('change');
    };
    return { activeName, handleClick };
  },
});

</script>

<style lang="scss">
.k-tabs {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color:  #d8dce5;
  }
  .flex-tabs {
    flex: 1;
    overflow: hidden;
  }
  .tabs-right {
    min-height: 40px;
    display: flex;
    align-items: center;
  }
  .el-tabs__nav-wrap {
    margin-bottom: -2px !important;
  }
  .el-tabs__header{
    margin-bottom: 0 !important;
  }
  .el-tabs--card {
    .is-active {
      border-bottom: 2px solid #fff !important;
    }
  }
}
.style-card {
  padding: 0 20px;
  position: relative;
  &:after {
    height: 2px;
  }
  .el-tabs__nav-wrap::after{
    background-color: transparent !important;
  }
  .el-tabs__nav-wrap {
    margin-bottom: -1px !important;
  }
  .tabs-right{
    border-width: 2px;
  }
  .el-tabs__header{
    margin-bottom: 1px !important;
  }
}
</style>
