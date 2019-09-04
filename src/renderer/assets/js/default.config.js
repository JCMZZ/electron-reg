const DefaultConfig = {};
DefaultConfig.install = function (Vue, [ElementUI]) {
    const GLOBAL_CONFIG = {
        /* 信息提示框时间 */
        MSG_DURATION: 1500,
        MSG_CENTER: true
    }
    // 1. 添加全局方法或属性
    Vue.myGlobalMethod = function () {
      // 逻辑...
    }
  
    // 2. 添加全局资源
    Vue.directive('my-directive', {
      bind (el, binding, vnode, oldVnode) {
        // 逻辑...
      }
    })
  
    // 3. 注入组件选项
    Vue.mixin({
      created: function () {
        // 逻辑...
      }
    })
  
    // 4. 添加实例方法
    function Message(option){
        return ElementUI.Message({
            duration: GLOBAL_CONFIG.MSG_DURATION, 
            center: GLOBAL_CONFIG.MSG_CENTER, 
            ...option
        })
    };
    ['success', 'warning', 'info', 'error'].forEach(type => {
        Message[type] = message => {
            return ElementUI.Message({
                duration: GLOBAL_CONFIG.MSG_DURATION,
                center: GLOBAL_CONFIG.MSG_CENTER,
                message,
                type
            });
        };
    });
    Vue.prototype.$elmsg = Message;
    Vue.prototype.global = GLOBAL_CONFIG;
  }
  export default DefaultConfig;