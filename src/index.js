// import MyLoading from './Loading.vue'
// // 这里是重点
// const Loading = {
//     install: function(Vue) {
//         Vue.component('Loading', MyLoading)
//     }
// }

// // 导出组件
// export default Loading


import MyLoading from './Loading.vue';

if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.component(MyLoading.name, MyLoading);
};

export default MyLoading;