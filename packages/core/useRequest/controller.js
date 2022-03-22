function getSource(url) {
  if (url.includes('/admin/')) return 'admin'; // 后台操作
  if (url.includes('/erp/')) return 'erp';
  return '';
}

function interceptors(code, config) {
  const piniaSessions = JSON.parse(sessionStorage.getItem('pinia'));
  const source = getSource(config.url);
  if (code === 20001) { // cookie过期
    clearStorage();
    // eslint-disable-next-line no-restricted-globals
    if (source === 'admin') parent.window.postMessage('outLogin()', '*');
  }
  if (source === 'erp') {
    if (code === 32101) { // erp没有当班信息
      clearStorage();
      // 退出
      window.location.href = piniaSessions?.home.baseGlobal.webLoginOutUrl;
    }
  }
}

function clearStorage() {
  localStorage.clear();
  sessionStorage.clear();
}

export {
  getSource, clearStorage, interceptors,
};
