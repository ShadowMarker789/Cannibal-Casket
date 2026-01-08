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
monogatari.action ('message').messages ({
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
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {

});


// Define the Characters
monogatari.characters ({
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
			'ash: So close, yet so far away...',
			'You mop the cultist\'s blood off the floor furiously as Andrew\'s \'negotiations\' eek through the walls.',
			'ash: He\'s here, but he\'s not present...',
			'The mopping intensifies.',
			'ash: ... And he\'s making me do all the work, again.',
			'Your knuckles whiten as you grip the mop. A particularly dry patch stays stubbornly attached to the floor.',
			'ash: ... I wouldn\'t mind so much if he\'d just <i>THANK</i> me for it.',
			{
				Choice: {
					Dialog: 'The blood on the floor has attachment issues.',
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
			'Your muscles burn from the effort, but the stain resists your valiant efforts to cover up your crimes.',
			'jump ch1_beforeClosetHideUnifiedChoice'
		],
		'ch1_beforeClosetMoppingScrubSoft': [
			'You give a big sigh as you mop with more care, slowly and deliberately swirling the head of the mop into the bloody mess.',
			'You can\'t relax, not with the warden right on your tail, with how tense you are you\'re literally shaking as you mop.',
			'jump ch1_beforeClosetHideUnifiedChoice'
		],
		'ch1_beforeClosetHideUnifiedChoice': [
			'ash: But no - that\'s too much to ask!',
			'The blood finally yields to your amazing mopping skills, the ugly brown fading enough to pretend that everything is fine.',
			'There\'s even blood under the fridge of all places.',
			'And on the fridge. Probably in the fridge too.',
			'If the warden checks inside the fridge you\'re both goners.',
			'and: Ashley! The warden is coming!!',
			'Shit. Fuck.',
			'You grab the mop and dash for the balcony.',
			'It feels farther than before, if you were smarter you would have started with the fridge first, mopping your way towards the balcony.',
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
			'You hid in the closet.',
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
			'You don\'t stop to give thanks, you bolt down the balcony, picking up the plank as you go just before the door opens.',
			'Your pace slows as you reach Andrew. You cover your panting mouth with your hands after slowly putting down the plank and mop to keep quiet.',
			'Andrew has his ear planted against the wall, listening.',
			'You join him there. ',
			'warden: Greetings and salutations!',
			'?? Is the warden British? He doesn\'t sound like it.',
			'The warden\'s footsteps can be heard creaking the floor as he moves.',
			'The walls are criminally thin here, they must be made of cardboard. Reinforced with plastic.',
			'warden: ..... Huh?',
			'warden: Anybody home?',
			'There\'s a long stretch of silence, Andrew\'s eyes dart to yours for a moment.',
			'You can almost feel him silently judging, hoping that you did well enough at mopping up.',
			'Naturally, your mopping skills are stupendous. Not that he\'ll appreciate it, or if he does he\'ll never show it.',
			'warden: ..... Oh, great. Another suicide.',
			'You can visibly see the relief wash over Andrew, that sigh of his preceeds your own, but you\'re just happy to see him happy.',
			'Well, happier... He\'s not exactly smiling.',
			'You can hear more footsteps as the warden paces and searches the neighbor\'s room.',
			'There\'s the sound of the closet opening and closing - you definitely would have been caught if you tried to hide in there.',
			'Good thing you didn\'t, huh?',
			'The warden\'s search continues, you can hear footsteps, desks being bumped against, chairs moving...',
			'... Wait ... Oh no. There\'s no body for him to find. What is he going to do?',
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
			'To your relief, the warden can be heard leaving the room, putting the bar back on the door before his footsteps fade off into the distance.',
			'You\'ve finally caught your breath, no longer panting like a bitch in heat.',
			'and: Oh God that was too close...',
			'Andrew breaths another sigh of relief, almost collapsing against the wall that he flops against, the tension leaving his body.',
			'and: I was so sure we were screwed.',
			'ash: And thanks to my amazing mopping skills, we aren\'t!',
			'You bring your hand to your chest that you puff out dramatically.',
			'Or at least try to - your breathing isn\'t quite all there yet.',
			'ash: You can thank me now!',
			'and: Yeah, yeah, don\'t push it.',
			'And you called it.',
			'Of course he doesn\'t thank you for it.',
			'You slave away until your bones ache and your lungs burn and he doesn\'t even thank you for it.',
			'ash: Geez, would it kill you to be a little appreciative?',
			'ash: I thought we worked well as a team...',
			{
				Choice: {
					Dialog: 'and: Ashley, do you have any idea how close we were to being absolutely fucked?',
					fight: {
						Text: 'Pick a fight',
						Do: 'jump ch1_postWardenPickFight'
					},
					make: {
						Text: 'Yield and try to reconcile',
						Do: 'jump ch1_postWardenReconcile'
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
			'He\'s asking for it.',
			'And you have run out of sympathy for his ungrateful ass.',
			'ash: YES! Because YOU made such a mess of things I barely had enough time to get out!',
			'ash: If the warden hadn\'t dropped the bar on his foot I would have had to hide in the closet!',
			'Andrew\'s scowl returns, removing all semblance of what might have been a smile.',
			'and: Well, maybe YOU should try carving up an entire person without making a mess!',
			'and: And it was YOUR idea to carve him up for food!',
			'ash: Yeah because we were STARVING!',
			'ash: Did you forget that we were routinely collapsing from hunger?',
			'and: No, because I would always carry you over to the bed or the couch when you did!',
			'and: Didn\'t hear thanks from you for my trouble either!',
			'and: Maybe I should have left you on the floor instead!',
			'... Well, fuck. That\'s true, he\'s got you there.',
			'... But you\'re in too deep to back out now - you\'re not a quitter.',
			'ash: Well, screw you too.',
			'ash: Forget what I said about working well together as a team.',
			'ash: Because I did all the work while you just yapped to the warden.',
			'ash: My arms are STILL burning from mopping up all that dried blood!',
			'ash: You even got it UNDER the fridge of all places!',
			'and: <b>IT WAS DRIPPING BECAUSE IT WAS FRESH AND IT HAD TO GET IN THERE BEFORE IT STARTS TO SMELL!</b>',
			'He\'s yelling now, you\'ve really done a good job riling him up.',
			'and: Ugh, whatever, I\'m done with this.',
			'Andrew gets up, and you notice his fists clenched tightly.',
			'and: I still feel sick from last night\'s \'food\'.',
			'He walks over to the bedroom, pausing to glare at you before he leaves.',
			'and: Good night Ashley.',
			'The bedroom door closes with finality before you can respond.',
			'Well, shit.',
			'Too late to have regrets, not that you do, but you do.',
			'He still deserved it. And worse.',
			'The least he could do is be grateful, and he wasn\'t.',
			'Whatever.',
			'You pick yourself off the floor, shaking a little as you get up.',
			'You\'re going to feel this tomorrow, definitely.',
			'Going straight from starvation to slaving away.',
			'But at least you have food now. Not that Andrew seems to appreciate it.',
			'Nor did he appreciate your cooking yesterday either.',
			'So today\'s unappreciation is just more of the same from him.',
			'end'
		],
		'ch1_postWardenReconcile': [
			() => {
				let closeness = monogatari.storage('closeness');
				closeness = closeness + 0.1;
				monogatari.storage({ closeness: closeness });
			},
			'You\'d rather not pick a fight...',
			'Why is it so hard to make him happy?',
			'Or to keep him happy, for that matter?',
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
			'end'
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