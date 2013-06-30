ig.module(
        'game.config.resource'
    )
    .requires(
        'impact.image'
    )
    .defines(function () {
        var dev = true, baseurl = '';
        baseurl = 'http://d.com/h5g/public/';
        ig.Resource = {
            fire: baseurl + 'resources/images/animation/fire_x.png',
            shaizi: baseurl + 'resources/images/animation/shaizi.png',
            player: baseurl + 'resources/images/roles/Creature_Bluegirl_02.png'
        }
    })