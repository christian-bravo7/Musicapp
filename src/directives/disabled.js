const disabledPlay = {};

function setDisabledPlay (el, binding) {
    if (!binding.value) {
        el.style.opacity = 0.2;
        el.title = 'Not available'
        el.style.cursor = 'not-allowed'
    } else {
        return;
    }
}

disabledPlay.install = function (Vue) {
    Vue.directive('disabledplay', {
        bind(el, binding) {
            setDisabledPlay(el, binding);
        }
    })
}

export default disabledPlay;
