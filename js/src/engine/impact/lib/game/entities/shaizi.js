ig.module(
        'game.entities.shaizi'
    )
    .requires(
        'impact.entity'
    )
    .defines(function () {

        EntityShaizi = ig.Entity.extend({

            // The players (collision) size is a bit smaller than the animation
            // frames, so we have to move the collision box a bit (offset)
            size: {x: 15, y: 17},
            offset: {x: 4, y: 2},
            _wmScalable:true,
            maxVel: {x: 100, y: 200},
            friction: {x: 600, y: 0},

            type: ig.Entity.TYPE.B, // Player friendly group
            checkAgainst: ig.Entity.TYPE.NONE,
            collides: ig.Entity.COLLIDES.PASSIVE,

            animSheet: new ig.AnimationSheet('resources/images/anmi/shaizi.png', 90, 104),


            // These are our own properties. They are not defined in the base
            // ig.Entity class. We just use them internally for the Player
            flip: false,
            accelGround: 400,
            accelAir: 200,
            jump: 200,
            health: 10,

            init: function (x, y, settings) {
                this.parent(x, y, settings);
                // Add the animations
                this.addAnim('idle', 0.5, [0,1,2,3,4,5]);
               // this.addAnim('run', 0.07, [0, 1, 2, 3, 4, 5]);
               // this.addAnim('jump', 1, [9]);
               // this.addAnim('fall', 0.4, [6, 7]);
            },


            update: function () {



                // shoot


                // move!
                this.parent();
            }
        });
    })


