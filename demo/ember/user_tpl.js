define(function (require) {
    var users = [
        '<script type="text/x-handlebars" data-template-name="users">',
        ' <div class="list">',
        '     <ul>',
        '     {{#each controller}}',
        '         <li>{{#linkTo "user" this}}{{name}}{{/linkTo}}</li>',
        '     {{else}}',
        '          <li>no users yet...</li>',
        '      {{/each}}',
        '      </ul>',
        '   </div>',
        '   <div class="detail">{{outlet}}</div>',
        '</script>'
    ];
    var user = [
        ' <script type="text/x-handlebars" data-template-name="user">',
        '   <p>name: {{name}}</p>',
        '   <p>email: {{email}}</p>',
        '   <p>tel: {{tel}}</p>',
        '{{#if view.isEditing}}',
        '   <p>name: {{view Ember.TextField valueBinding="name"}}</p>',
        '   <p>email: {{view Ember.TextField valueBinding="email"}}</p>',
        '   <p>tel: {{view Ember.TextField valueBinding="tel"}}</p>',
        '   <button type="button" {{action finishEdit target="view"}}>Save</button>',
        '  {{else}}',
        '   <button type="button" class="btn-1"{{action edit target="view"}}>Edit</button>',
        '  {{/if}}',
        '</script>'
    ];
    return {
        users: users.join(''),
        user: user.join('')
    }
});
