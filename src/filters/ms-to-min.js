const msToMin = {};

msToMin.install = function (Vue) {
    Vue.filter('ms-to-min', (val) => {

        const min = Math.trunc(val / 60000);
        const sec = Math.round((val - (min * 60000)) / 1000);

        if (sec < 10) {
            return `${min}:0${sec}`;
        }

        return `${min}:${sec}`
    })
}

export default msToMin;
