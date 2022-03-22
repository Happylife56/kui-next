export function useAddGoods() {
  // 添加商品操作
  const addGoodsHandle = (row) => {
    console.log('row: ', row);
  };

  return { addGoodsHandle };
}
