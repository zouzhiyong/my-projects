export default {
    install(Vue) {
        Vue.prototype.$validate = "";
        Vue.prototype.checkValue = function(value) {
            if (/\w{6,20}/.test(value)) {
                return true;
            } else {
                return false;
            }
        }
    }
}