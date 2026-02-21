/* global monogatari */

monogatari.storage({
    closeness: 0.0,
    passion: 0.0,
    anger: 0.0
});

// Modify the Main Menu

// Set new template
monogatari.component('main-screen').template(() => {
    return `
        <h1>Cannibal Casket</h1>
		<subtitle>(Still a work in progress!)</subtitle>
        <main-menu></main-menu>
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
        'title': 'The Coffin of Andy and Leyley on Steam',
        subtitle: 'It\'s good, go buy it and play it.',
        body: `
		<div>
		<a href="https://store.steampowered.com/app/2378900/The_Coffin_of_Andy_and_Leyley/" target="_blank">
		<p>
		Buy The Coffin of Andy and Leyley. (Steam Store Page)
		</p>
		</a>
		</div>
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

});

// Define the voice files used in the game.
monogatari.assets('voices', {

});

// Define the sounds used in the game.
monogatari.assets('sounds', {

});

// Define the videos used in the game.
monogatari.assets('videos', {

});

// Define the images used in the game.
monogatari.assets('images', {

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
        color: '#E18BC9'
    },
    'and': {
        name: 'Andrew',
        color: '#81D174'
    },
    'dev': {
        name: 'Developer',
        color: 'white'
    },
    'warden': {
        name: 'Warden'
    }
});

monogatari.script({
    // The game starts here.
    'English': {
        'Start': [
            'dev: This game is intended for mature audiences. Viewer discretion is advised. ',
            {
                'Choice': {
                    'Dialog': 'dev: Did you play The Coffin of Andy and Leyley?',
                    'Yes': {
                        'Text': 'Yes',
                        'Do': 'dev: Good.'
                    },
                    'No': {
                        'Text': 'No',
                        'Do': 'jump ch1_didNotPlayTCOAAL'
                    },
                    'Advance': true
                }
            },
            {
                'Choice': {
                    'Dialog': 'dev: ... Did you pay for it?',
                    'Yes': {
                        'Text': 'Yes',
                        'Do': 'dev: Good.'
                    },
                    'No': {
                        'Text': 'No',
                        Do: 'jump ch1_didNotPayForTCOAAL'
                    }
                }
            },
            'dev: Then we can begin.',
            '...',
            'You stride into the neighbor\'s apartment as fast as your little legs can carry you, mop in hand. ',
            'ash: .....',
            'ash: WHY IS THERE SO MUCH BLOOD?!',
            'The cultist\'s blood is everywhere, all over the floor.',
            'There\'s a large streak of it leading towards the freezer that houses the head and torso.',
            'You start mopping the cultist\'s blood off the floor furiously as Andrew\'s \'negotiations\' eek through the walls.',
            'ash: Come on, faster!',
            'The mopping intensifies.',
            'ash: ... Did Andy not clean ANY of this up?!',
            'Your knuckles whiten as you grip the mop. A particularly dry patch stays stubbornly attached to the floor.',
            'ash: ... And this mop sucks! Argh!',
            'The blood on the floor has attachment issues.',
            {
                Choice: {
                    hard: {
                        Text: 'Scrub Harder',
                        Do: 'jump ch1_beforeClosetMoppingScrubHard'
                    },
                    soft: {
                        Text: 'Scrub Softer',
                        Do: 'jump ch1_beforeClosetMoppingScrubSoft'
                    }
                }
            },
        ],
        'ch1_beforeClosetMoppingScrubHard': [
            'Gritting your teeth, you smash the head of the mop into the bloodstain like a chisle.',
            'Your muscles burn from the effort, but the stain resists your valiant efforts to cover up your comrade\'s crimes.',
            'jump ch1_beforeClosetHideUnifiedChoice'
        ],
        'ch1_beforeClosetMoppingScrubSoft': [
            'You give a big sigh as you mop with more care, slowly and deliberately swirling the head of the mop into the bloody mess.',
            'You can\'t relax, not with the warden right on your tail.',
            'With how tense you are you\'re literally shaking as you mop.',
            'jump ch1_beforeClosetHideUnifiedChoice'
        ],
        'ch1_beforeClosetHideUnifiedChoice': [
            'ash: Please, please, please!',
            'The blood finally yields to your amazing mopping skills, the ugly brown fading enough to pretend that everything is fine.',
            'There\'s even blood under the fridge of all places.',
            'And on the fridge. Probably in the fridge too.',
            'If the warden checks inside the fridge you\'re both done for.',
            'and: Ashley! The warden is coming!!',
            'Shit. Fuck.',
            'You grab the mop and dash for the balcony.',
            'It feels farther than before. If you were smarter you would have started with the fridge first, mopping your way towards the balcony.',
            'Unfortunately, it appears that your immense intelligence is solely dedicated towards self-deprecation, self-loathing, and regret.',
            'In a moment of panic, you spot the wardrobe. It\'s closer.',
            'jump ch1_closetHideChoiceBeforeChoose'
        ],
        'ch1_closetHideChoiceBeforeChoose': [
            {
                'Choice': {
                    'Dialog': 'QUICK!',
                    'hide': {
                        Text: 'Hide in the closet!',
                        Do: 'jump ch1_closetHideChoiceHideInCloset'
                    },
                    'run': {
                        Text: 'Pray and run!',
                        Do: 'jump ch1_closetHideChoiceRunFaster'
                    }
                }
            },
            'Hrmm.',
            'end'
        ],
        'ch1_closetHideChoiceHideInCloset': [
            'You hide in the closet.',
            'dev: ..... Which puts you on the same route as the base game. ',
            'dev: Want to find out what happens?',
            'show message TCOAAL',
            'dev: ... Okay, you can make the other choice now.',
            'jump ch1_closetHideChoiceBeforeChoose'
        ],
        'ch1_closetHideChoiceRunFaster': [
            'You run faster. ',
            '... and you pray.',
            'Which is odd for you, because really - what sort of god or goddess would take pity on you, of all things?',
            'But then there\'s a loud clonk from the front door, followed by expletives and shouting.',
            'warden: <b>ARGH! MY FOOT!</b>',
            '... Did your prayers actually reach someone? Something?',
            'You don\'t stop to give thanks. You bolt down the balcony, picking up the plank as you go just before the door opens.',
            'Your pace slows as you reach Andrew. You cover your panting mouth with your hands after slowly putting down the plank and mop to keep quiet.',
            'Andrew has his ear planted against the wall, listening.',
            'You join him there. ',
            'warden: Greetings and salutations!',
            'The warden\'s loud voice almost makes you jump.',
            'His footsteps can be heard creaking the floor as he moves around the apartment.',
            'The walls are criminally thin here, they must be made of cardboard. Reinforced with plastic.',
            'warden: ..... Huh?',
            'warden: Anybody home?',
            'There\'s a long stretch of silence, Andrew\'s eyes dart to yours for a moment.',
            'You can almost feel him silently judging, hoping that you did well enough at mopping up.',
            'Naturally, your mopping skills are stupendous. Despite the shabby equipment, you cleaned that up really well.',
            'warden: ..... Oh, great. Another suicide.',
            'You can visibly see the relief wash over Andrew, that sigh of his preceeds your own, but you\'re just happy to see him happy.',
            'Well, happier... He\'s not exactly smiling. It\'s getting harder to see him smile these days.',
            'You can hear more footsteps as the warden paces and searches the neighbor\'s room.',
            'There\'s the sound of the closet opening and closing - you definitely would have been caught if you tried to hide in there.',
            'Good thing you didn\'t, huh?',
            'The warden\'s search continues, you can hear footsteps, desks being bumped against, chairs moving...',
            '... He\'s searching for a body ...',
            'Wait ... Oh no. There\'s no body for him to find. What is he going to do?',
            'You might still be fucked.',
            '... It worked before, so...',
            '... You silently pray once more, to whoever or whatever it was that answered you last time.',
            'warden: <b>OH GOD THAT REEKS!</b>',
            'Ah.',
            'Yes.',
            'That room.',
            'It smelled so awful that you did not dare venture into that room.',
            'There\'s an audible click before the warden starts talking again.',
            'warden: Yeah, we\'ve got another suicide.',
            'warden: The weirdo from before, B type.',
            'warden: ... Yeah, I checked. Look, I gotta get out of here before I puke, the smell is awful.',
            'warden: The cleanup crew can deal with this, I am not touching that.',
            'warden: ... Fine, I\'ll file the paperwork, happy?',
            'To your relief, the warden can be heard leaving the room, a small wooden clonk audible before his footsteps fade off into the distance.',
            'You\'ve finally caught your breath, no longer panting like a bitch in heat.',
            'and: Oh God that was too close...',
            'Andrew breathes another sigh of relief, almost collapsing against the wall that he flops against, the tension leaving his body.',
            'and: I was so sure we were screwed.',
            {
                Choice: {
                    Dialog: 'How do you respond?',
                    fight: {
                        Text: 'Blame Andrew for making such a bloody mess and not cleaning it up',
                        Do: 'jump ch1_postWardenPickFight'
                    },
                    gloat: {
                        Text: 'Gloat about how you saved the day',
                        Do: 'jump ch1_postWardenGloat'
                    },
                    team: {
                        Text: 'Emphasize your teamwork, try to bond over it',
                        Do: 'jump ch1_postWardenBond'
                    }
                }
            },
            'end'
        ],
        'ch1_postWardenPickFight': [
            () => {
                let anger = monogatari.storage('anger');
                anger = anger + 0.1;
                monogatari.storage({ anger: anger });
            },
            'Your limbs still burn from the exhaustion of mopping up all that blood.',
            'And you have perfect verbal punching bag right here.',
            'ash: YES! Because YOU made such a mess of things I barely had enough time to get out!',
            'ash: You didn\'t clean ANY of it up! Not a single towel or rag!',
            'ash: If the warden hadn\'t dropped the bar on his foot I would have had to hide in the closet!',
            'Andrew\'s scowl returns, removing all semblance of what might have been a smile.',
            'and: Well, maybe YOU should try carving up an entire person without making a mess!',
            'and: And it was YOUR idea to carve him up for food!',
            'ash: Yeah, because we were STARVING!',
            'ash: Did you forget that we were routinely collapsing from hunger?',
            'and: No, because I would always carry you over to the bed or the couch when you did!',
            'and: Didn\'t hear thanks from you for my trouble either!',
            'and: Maybe I should have left you on the floor instead!',
            '... Well, fuck. That\'s true, he\'s got you there.',
            '... But you\'re in too deep to back out now - you\'re not a quitter.',
            'ash: Well, screw you too.',
            'ash: Because I did all the work while you just yapped to the warden.',
            'ash: My arms are STILL burning from mopping up all that dried blood!',
            'ash: You even got it UNDER the fridge of all places!',
            'ash: How did you even manage that?!',
            'and: <b>IT WAS DRIPPING BECAUSE IT WAS FRESH AND IT HAD TO GET IN THERE BEFORE IT STARTED TO SMELL!</b>',
            'He\'s yelling now, you\'ve really done a good job riling him up.',
            'and: Ugh, whatever, I\'m done with this.',
            'Andrew gets up, and you notice his fists clenched tightly.',
            'and: I still feel sick from last night\'s \'food\'.',
            'He walks over to the bedroom, pausing to glare at you before he leaves.',
            'and: Good night, Ashley.',
            'The bedroom door closes with finality before you can respond.',
            'Well, shit.',
            'Too late to have regrets, not that you do, but you do.',
            'He still deserved it. And worse.',
            'The least he could do is be grateful for your efforts, and he wasn\'t.',
            'Whatever.',
            'You pick yourself off the floor, shaking a little as you get up.',
            'You\'re going to feel this tomorrow, definitely.',
            'Going straight from starvation to slaving away.',
            'But at least you have food now. Not that Andrew seems to appreciate it.',
            'Nor did he appreciate your cooking yesterday either.',
            'So today\'s unappreciation is just more of the same from him.',
            'It doesn\'t bother you, except that it does.',
            'The growl of your stomach interrupts your thoughts - TODO: FINISH THIS TRAIN OF THOUGHT',
            'end'
        ],
        'ch1_postWardenGloat': [
            () => {
                monogatari.storage.anger + 0.05;
                monogatari.storage.closeness + 0.05;
            },
            'You totally saved his ass.',
            'Gloating time~',
            'ash: And thanks to my amazing mopping skills, we aren\'t!',
            'You bring your hand to your chest that you puff out dramatically.',
            'Or at least try to - your breathing isn\'t quite all there yet.',
            'ash: You can thank me now!',
            'TODO: Finish this train of thought',
            'end'
        ],
        'ch1_postWardenBond': [
            () => {
                let closeness = monogatari.storage('closeness');
                closeness = closeness + 0.1;
                monogatari.storage({ closeness: closeness });
            },
            'ash: Yeah, it was really close...',
            'You pout sheepishly at him, putting on your best cute face.',
            'ash: I almost had to hide in the closet.',
            'ash: Which probably wouldn\'t have gone well...',
            'and: Yeah, the closet would have been the FIRST place the warden would have looked.',
            'ash: And then I would have been screwed...',
            'ash: What would you have done then? Would you come rescue little ol\' me?',
            'and: Yes. ',
            'There\'s a surprising seriousness in his tone as he nods affirmatively.',
            'and: I would have.',
            'ash: ... Really? What would you have even done?',
            'ash: Surely you wouldn\'t have come in swinging that cleaver around, right?',
            'and: No, that\'s definitely what I would have done.',
            'Oh, he genuinely would have come to your rescue?',
            'The idea sends a thrill through you.',
            '... But you can only imagine how unthrilled he would have been to have had to rescue you.',
            'ash: Gee, really? With your stick-figure form?',
            'ash: Would that have even done anything?',
            'and: ... I assure you, the neck is surprisingly fragile.',
            'That\'s right - he did literally carve up the cultist.',
            'With that very same cleaver, too.',
            'ash: Well... thanks, I guess...',
            'and: You\'re welcome, and thanks for mopping.',
            'Oh, would you look at that. He CAN thank you.',
            'ash: It was good teamwork! Now how about dinner?',
            'Nope, Andrew\'s face wrinkles instantly.',
            'and: No thanks, I\'ll pass.',
            'ash: Huh?! You need food if you\'re going to recover after being starved!',
            'and: I can\'t stomach any more of that. Not yet at least.',
            '... He did have trouble with it last night...',
            'You did have to make him swallow it.',
            '... Maybe you\'re being too harsh on him, he\'s been through a lot.',
            'Like putting up with you.',
            'Andrew slowly walks over to the bedroom, genuinely looking tired.',
            'He pauses by the doorway, looking back at you with tired eyes.',
            'and: Good night, Ashley.',
            'ash: ... Good night.',
            'The bedroom door clicks shut softly, maybe this little adventure did bring you closer?',
            'It\'s hard to tell, sometimes. He feels closer sometimes, then doesn\'t.',
            'You pick yourself up off the ground, shaking a little bit as you do.',
            'The adrenaline has worn off, with a hungry exhaustion taking its place.',
            'Still, you worked hard today, and your diligent efforts paid off.',
            '... But they did work up an appetite.',
            'You don\'t have the energy to cook a whole meal, not without Andrew to motivate you.',
            'So instead you microwave the leftovers from last night.',
            'It\'s definitely missing something - company.',
            'ash: There\'s always tomorrow.',
            'There\'s always been a tomorrow.',
            'Always will be.',
            'That\'s what makes it such a great excuse for your inadequacies, for your mistakes, and for your shortcomings.',
            'Of which there are plenty.',
            'You wash your dishes in silence, your mind wondering...',
            'You\'re still stuck here, the two of you. That hasn\'t changed.',
            'But now you\'re fed at least. For now.',
            'You\'re almost tempted to call that hope.',
            'But you know better than to have that.',
            'You\'re tired, and you head to bed, softly opening the bedroom door, just in case Andrew\'s awake.',
            'He\'s got his back turned to you, but you can tell he\'s still awake.',
            {
                Choice: {
                    Dialog: 'Say something?',
                    'good-night': {
                        Text: 'Say good night',
                        Do: 'jump ch1_earlyWishAndrewGoodNight'
                    },
                    'just-sleep': {
                        Text: 'Just go to sleep',
                        Do: 'jump ch1_earlyJustGoToBed'
                    }
                }
            },
            'end'
        ],
        'ch1_earlyJustGoToBed': [
            () => {
                monogatari.storage().closeness -= 0.05;
                monogatari.storage().passion -= 0.05;
            },
            'You turn away from Andrew\'s back, pretending that you\'re not hurt by it.',

        ],
        'ch1_earlyWishAndrewGoodNight': [
            () => monogatari.storage().passion += 0.1,
            'You pause before you sit down on your bed, looking at Andrew\'s back.'
        ],
        'ch1_earlyCannibalismYumYum': [

        ],
        'ch1_didNotPlayTCOAAL': [
            'dev: Well, go play it!',
            'show message TCOAAL',
            'end'
        ],
        'ch1_didNotPayForTCOAAL': [
            'dev: Well, go buy it!',
            'show message TCOAAL',
            'end'
        ]
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