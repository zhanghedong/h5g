ig.module(
        'game.main'
    )
    .requires(
        'impact.game',
        'impact.font',
        'impact.input',
        'game.entities.player',
        'game.levels.level1',
        'impact.debug.debug'
    )
    .defines(function () {

        MyGame = ig.Game.extend({

            init: function () {
                // Initialize your game here; bind keys etc.
                // Bind keys1
                ig.input.bind( ig.KEY.LEFT_ARROW, 'left' );
                ig.input.bind( ig.KEY.RIGHT_ARROW, 'right' );
                ig.input.bind( ig.KEY.X, 'jump' );
                ig.input.bind( ig.KEY.C, 'shoot' );
                this.loadLevel(LevelLevel1);
            },

            update: function () {
                this.parent();
            },

            draw: function () {
                // Draw all entities and backgroundMaps
                this.parent();
            }
        });
// Start the Game with 60fps, a resolution of 320x240, scaled
// up by a factor of 2
        ig.main('#canvas', MyGame, 60, 480, 320, 1);
    });
