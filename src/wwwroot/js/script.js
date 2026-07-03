/* global monogatari */

// monogatari.debug.level(5);

monogatari.storage({
    closeness: 0.0,
    passion: 0.0,
    anger: 0.0,
    playfulness: 0.0
});

// songs for the Youtube API

youtubeSongs = {
    JestersPity: 'EVMdW5RgBjo',
    TwistedClowns: 'FRF4s-F1tRA',
    Forest: 'FPZnSQoN6PE',
    JealousDoll: 'kvdMNuQMslk',
    GuardTree: 'KKedfOBRmyA',
    DreamDance: '6QIgtUIQVNg',
    DarkBells: 'WdWoAyX1ZMo',
    WanderingWizard: 'cvVwacvn-hY',
    PictureBook: 'qjUi4kc-Lpc',
    DreamingInjection: 'Un0TCzDuDH8',
    HallucinationConnect: 'r0VAUONNM8c',
    SheepSway: 'kaNycPi2VCI',
    Cupid: 'dJaekUyad88',
    TeddyBear: 'WuwAKdK89ys',
    CloudChiptune: '_cq2SwYyVDw',
    HalloweenChiptune: 'EOjx3k08WVw',
    OldFairyTales: 'wOEld9xzphY',
    PandoraSyndrome: 'E0M59SFVt-8',
    PastelVirus: 'bViCZkI96UI',
    SecretRooms: 'cvyjfeGocc4',
    SmallMagicBook: 'MgdUw93s8fU',
    SnailEyes: 'QJfRtuRJCX4',
    CultistInside: 'rG_XlVBHhCA',
    CultistOutside: 'rufrGjwsDvg',
    TickTock: 'bifRbpY-30c',
    Club: '5zcwZBgUsP4',

}

// Modify the Main Menu

// Set new template
monogatari.component('main-screen').template(() => {
    return `
        <h1>Cannibal Casket</h1>
		<subtitle>(Still a work in progress!)</subtitle>
        <div style="position:fixed;background:black;width:100vw;height:100vh;">
            <img src="./assets/images/cannibal-casket-title-background.jpg" style="object-fit: contain; width: 100%; height: 100%;"/>
        </div>
    `;
});

// Define the messages used in the game.
monogatari.action('message').messages({
    'Help': {
        title: 'Help',
        subtitle: 'Some useful Links',
        body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
    },
    'TCOAAL': {
        'title': 'The Coffin of Andy and Leyley',
        subtitle: 'It\'s good, go buy it and play it.',
        body: `
        <a href="https://store.steampowered.com/app/2378900/The_Coffin_of_Andy_and_Leyley/" target="_blank" alt="Buy The Coffin of Andy and Leyley. (Steam Store Page)">
        <img style="width:75%;position:unset;display:block;margin-right:auto;margin-left:auto;" src="https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2378900/0badd5423ec8cb36d543b7b156121ac2d38ef330/header.jpg?t=1774434375"/>
        </a>
		`
    }
});

// Define the notifications used in the game
monogatari.action('notification').notifications({
    'Welcome': {
        title: 'Welcome',
        body: 'This is the Monogatari VN Engine',
        icon: ''
    }
});

// Define the Particles JS Configurations used in the game
monogatari.action('particles').particles({

});

// Define the canvas objects used in the game
monogatari.action('canvas').objects({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets('gallery', {

});

// Define the music used in the game.
monogatari.assets('music', {
    'main-menu-theme': 'Twisted-Clowns-Nemlei-Kit9-Studios-TCOAAL.mp3'
});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {
    'wet-squish-1': 'Squish - Wet Slide Fast-001.wav',
    'wet-squish-2': 'Squish - Wet Slide Fast-002.wav',
    'wet-squish-3': 'Squish - Wet Slide Fast-003.wav',
    'wet-squish-4': 'Squish - Wet Slide Fast-004.wav',
    'wet-squish-5': 'Squish - Wet Slide Fast-005.wav',
    'Blow1': 'Blow1.flac',
    'Blow2': 'Blow2.flac',
    'Blow3': 'Blow3.flac',
    'Blow4': 'Blow4.flac',
    'Blow5': 'Blow5.flac',
    'Blow6': 'Blow6.flac',
    'Blow7': 'Blow7.flac',
    'Earth1': 'Earth1.flac',
    'Earth3': 'Earth3.flac',
    'Earth5': 'Earth5.flac',
    'Earth7': 'Earth7.flac',
    'cannibal-casket-chapter-transition-music-box': 'cannibal-casket-chapter-transition-music-box.wav',
    'decision': 'decision.flac',
    'walk-out': 'walk-out.flac',
    'closet-close': 'closet-close.flac',
    'single-footstep': 'single-footstep.flac',
});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {
    'ch1-andrew-door-1': 'Andrew_door_1.jpg',
    'ch1-andrew-door-2': 'Andrew_door_2.jpg',
    'ch1-nearly-caught-test-1': 'rclisk324-test-1.jpg',
    'ch1-hide-background': 'ch1-hide-background.png',
    'ch1-hide-background-door': 'ch1-hide-background-door.png',
    'ch1-hide-background-box': 'ch1-hide-background-box.png',
    'ch1-hide-background-frame': 'ch1-hide-background-frame.png',
    'ch1-hide-background-wall': 'ch1-hide-background-wall.png',
    'ch1-hide-bitedrew': 'ch1-hide-bitedrew.png',
    'ch1-hide-staredrew-straight': 'ch1-hide-staredrew-straight.png',
    'ch1-hide-staredrew-right': 'ch1-hide-staredrew-right.png',
    'ch1-hide-sushley': 'ch1-hide-sushley.png',
    'ch1-hide-closeshley': 'ch1-hide-closeshley.png',
    'ch1-hide-closeshley-left': 'ch1-hide-closeshley-left.png',
    'ch1-hide-relievedrew': 'ch1-hide-relievedrew.png',
    'ch1-hide-relievedshley': 'ch1-hide-relievedshley.png',
    'ch1-hide-preyshey': 'ch1-hide-preyshey.png',
    'ch1-hide-warden-2': 'ch1-hide-warden-2.png',
    'ch1-hide-warden-3': 'ch1-hide-warden-3.png',
    'cannibal-casket-chapter-1-intro': 'cannibal-casket-chapter-1-intro.png',
    'ch1-run-from-warden-look-closet': 'ch1-run-from-warden-look-closet.jpg',
    'ch1-run-from-warden-out-door': 'ch1-run-from-warden-out-door.jpg',
    'ch1-run-from-warden-run-pray': 'ch1-run-from-warden-run-pray.jpg',
    'ch1-hikari-ashley-eat-sad': 'ch1-hikari-ashley-eat-sad.png',
    'ch1-hikari-ashley-eat-hopeful': 'ch1-hikari-ashley-eat-hopeful.png',
});

// Define the backgrounds for each scene.
monogatari.assets('scenes', {

});


// Define the Characters
monogatari.characters({
    'y': {
        name: 'Yui',
        color: '#5bcaff'
    },
    'ash': {
        name: 'Ashley',
        color: '#E18BC9',
        directory: 'ash',
        sprites: {
            1: '1.png',
            2: '2.png',
            3: '3.png',
            4: '4.png',
            5: '5.png',
            6: '6.png',
            7: '7.png',
            8: '8.png',
        }
    },
    'and': {
        name: 'Andrew',
        directory: 'and',
        color: '#81D174',
        sprites: {
            1: '1.png',
            2: '2.png',
            3: '3.png',
            4: '4.png',
            5: '5.png',
            6: '6.png',
            7: '7.png',
            8: '8.png',
        },
    },
    'dev': {
        name: 'Developer',
        color: 'white'
    },
    'warden': {
        name: 'Warden'
    },
    'hide-textbox': {
        name: '',
        color: '#00000000'
    }
});

/*

'Start': [
        'show scene #f7f6f6 with fadeIn',
        'show notification Welcome',
        {
            'Input': {
                'Text': 'What is your name?',
                'Validation': function (input) {
                    return input.trim ().length > 0;
                },
                'Save': function (input) {
                    this.storage ({
                        player: {
                            name: input
                        }
                    });
                    return true;
                },
                'Revert': function () {
                    this.storage ({
                        player: {
                            name: ''
                        }
                    });
                },
                'Warning': 'You must enter a name!'
            }
        },
        'y Hi {{player.name}} Welcome to Monogatari!',
        {
            'Choice': {
                'Dialog': 'y Have you already read some documentation?',
                'Yes': {
                    'Text': 'Yes',
                    'Do': 'jump Yes'
                },
                'No': {
                    'Text': 'No',
                    'Do': 'jump No'
                }
            }
        }
    ],

    'Yes': [
        'y Thats awesome!',
        'y Then you are ready to go ahead and create an amazing Game!',
        'y I can’t wait to see what story you’ll tell!',
        'end'
    ],

    'No': [

        'y You can do it now.',

        'show message Help',

        'y Go ahead and create an amazing Game!',
        'y I can’t wait to see what story you’ll tell!',
        'end'
    ]

*/