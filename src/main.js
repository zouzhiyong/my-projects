// import Vue from 'vue'
// import App from './App.vue'

// // 引入自定义组件。index.js是组件的默认入口
// import Loading from './'
// Vue.use(Loading);

// new Vue({
//     el: '#app',
//     data() {
//         return {
//             curvalue: 'Welcome to Your Vue.js weqew'
//         }
//     },
//     render: h => h(App)
// })

import Loading from './index.js';

const components = [
    Loading
]

const install = function(Vue, opts = {}) {
    /* istanbul ignore if */
    if (install.installed) return;
    components.map(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
};

module.exports = {
    Loading
};