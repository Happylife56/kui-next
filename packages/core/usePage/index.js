import { ref } from 'vue';

export function usePage() {
  const totalPage = ref(1);
  const totalRecord = ref(1);
  const currentPage = ref(1);
  const listData = ref([]);
  const tableData = ref([]);

  // 删除判断是否跳转上一页
  const getNowPage = (list = listData.value) => {
    const isLastPage = currentPage.value > 1 && list.length === 1;
    if (isLastPage) currentPage.value--;
    return currentPage.value;
  };

  const setListAndPage = (result = {}) => {
    const {
      records = [], totalPage: totalPages = 1, pageNo = 1, totalRecord: totalElements = 1,
    } = result;
    listData.value = records;
    tableData.value = records;
    totalPage.value = totalPages;
    totalRecord.value = totalElements;
    currentPage.value = pageNo;
  };

  return {
    totalPage, totalRecord, currentPage, listData, tableData, getNowPage, setListAndPage,
  };
}
