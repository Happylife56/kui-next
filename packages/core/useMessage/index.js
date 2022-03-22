import { ElMessage, ElMessageBox } from 'element-plus';

export function useMessage() {
  const setOption = (text, type) => {
    ElMessage.closeAll();
    ElMessage({ message: text, type });
  };
  const message = {
    error: (text) => setOption(text, 'error'),
    success: (text) => setOption(text, 'success'),
    warning: (text) => setOption(text, 'warning'),
    info: (text) => setOption(text, 'info'),
  };
  const messageBox = {
    confirm: ({ msg, title = '提示', type = 'warning' }) => new Promise((resolve) => {
      // eslint-disable-next-line no-restricted-globals
      parent.window.postMessage('openMask()', '*');
      window.top.postMessage('openMask()', '*');
      ElMessageBox.confirm(msg, title, {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        buttonSize: '',
        type,
      }).then(() => resolve(true))
        .catch(() => { }).finally(() => {
          // eslint-disable-next-line no-restricted-globals
          parent.window.postMessage('closeMask()', '*');
          window.top.postMessage('closeMask()', '*');
        });
    }),
  };

  return { message, messageBox };
}
