define(function () {

    var rules = [];
    var host = this.location.host;
    rules.push(function (url) {
        if (url.indexOf('h5g/project/public/js/app') > 0) {
            url = url.replace('kj/h5g/project/public', '');
            url = url.replace(host, 'd.com/h5g');
        }
        return url;
    });
    // set map rules
    seajs.config({'map': rules});
});
