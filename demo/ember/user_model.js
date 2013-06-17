define(function (require) {
    var Ember = require('emberData');
    App.User = DS.Model.extend({
        name: DS.attr('string'),
        email: DS.attr('string'),
        tel: DS.attr('string')
    });
    App.User.FIXTURES = [
        { id: 1, name: '张三', email: 'user1@example.com',tel:'134489795' },
        { id: 2, name: '李四', email: 'user2@example.com',tel:'134489725'  },
        { id: 3, name: '王五', email: 'user3@example.com',tel:'134482225'  },
        { id: 4, name: '傻逼', email: 'user4@example.com',tel:'134466665'  },
        { id: 5, name: '小时', email: 'user5@example.com',tel:'134999995'  }
    ];
});
