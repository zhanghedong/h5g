define(function () {

    var rules = [];
    var host = this.location.host;
    rules.push(function (url) {
        if (url.indexOf('public/js/src') > 0) {
            url = url.replace('public/js', 'js');
            url = url.replace(host, 'local.com/h5game/h5g');
        }
        return url;
    });
    // set map rules
    seajs.config({'map': rules});
});
