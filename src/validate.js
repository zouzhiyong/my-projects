// export default {
//     install(Vue) {
//         Vue.prototype.$validate = "";
//         Vue.prototype.checkValue = function(value) {
//             if (/\w{6,20}/.test(value)) {
//                 return true;
//             } else {
//                 return false;
//             }
//         }

//         Vue.directive("validate",{
//             bind(){
//                 console.log("bind"); // 只会调用一次
//             },
//             update(el,binding,vnode){
//                 console.log(el);
//                 console.log(binding);
//                 console.log(vnode);
//             },
//         })
//     }
// }

var validate = {}
validate.install = function(Vue) {
    if (validate.installed) {
        return
    }

    Vue.prototype.$validate = "";
    Vue.prototype.checkValue = function(value) {
        if (/\w{6,20}/.test(value)) {
            return true;
        } else {
            return false;
        }
    }

    Vue.directive("validate", {
        bind(el, binding, vnode) {
            console.log(binding); // 只会调用一次
        },
        update(el, binding, vnode) {
            //console.log(el.getAttribute('class'));
            //console.log(binding);
            //console.log(vnode);
        },
    })
}

// 同样，Vue 作为全局变量时自动 install
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(validate)
}
export default validate