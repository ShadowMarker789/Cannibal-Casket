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
            () => {
                cueVideo(youtubeSongs.HallucinationConnect);
            },
            'This is a collaborative fanwork, designed to pay respects to the game known as The Coffin of Andy and Leyley.',
            'The Coffin of Andy and Leyley is published by Kit9 Studio and is unaffiliated with this project.',
            'All visual assets herein are created from the community\'s artists and are original works.',
            'Music you may hear is hosted on Youtube, played through the Youtube IFrame API.',
            'This fanwork does not seek to compete with nor replace its inspiring title.',
            'As a fanwork, this is distinctly non-canon.',
            'Please view this as an interactive fanfiction.',
            'play sound cannibal-casket-chapter-transition-music-box with volume 50',
            'show image cannibal-casket-chapter-1-intro with fadeIn duration 2s',
            'hide-textbox:hide-textbox a.',
            'hide image cannibal-casket-chapter-1-intro with fadeOut duration 2s',
            'wait 2000',
            '...',
            () => {
                startVideo();
            },
            '...',
            'show character ash 1 at left with slideInLeft',
            'You stride into the neighbor\'s apartment as fast as your little legs can carry you, mop in hand. ',
            'ash: .....',
            'show character ash 5 at left with flipped',
            'ash: WHY IS THERE SO MUCH BLOOD?!',
            'The cultist\'s blood is everywhere, all over the floor.',
            'There\'s a large streak of it leading towards the freezer that houses the head and torso.',
            'play sound wet-squish-1',
            'show character ash 1 at left',
            'You start mopping the cultist\'s blood off the floor furiously as Andrew\'s \'negotiations\' eek through the walls.',
            'play sound wet-squish-2',
            'ash: Oh, this is gross!',
            'play sound wet-squish-3',
            'The blood has thoroughly coagulated, having spent an entire day and night becoming one with the floor.',
            'play sound wet-squish-4',
            'Your progress on the blood is slow, you don\'t have much time.',
            'show character ash 1 at center',
            'play sound wet-squish-5',
            'ash: Come on, faster!',
            'The mopping intensifies.',
            'play sound wet-squish-1',
            'play sound wet-squish-2',
            'play sound wet-squish-3',
            'play sound wet-squish-4',
            'play sound wet-squish-5',
            'ash: ... Did Andy not clean ANY of this up?!',
            'play sound wet-squish-2',
            'Your knuckles whiten as you grip the mop. A particularly thick dry patch stays stubbornly attached to the floor.',
            'ash: ... And this mop sucks! Argh!',
            'play sound wet-squish-4',
            'The blood on the floor has attachment issues.',
            'play sound decision',
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
            'No! There\'s only room here for ONE stubborn bitch with attachment issues!',
            'play sound Blow2',
            'Gritting your teeth, you smash the head of the mop into the bloodstain like a chisle.',
            'play sound Blow1',
            'Your muscles burn from the effort, but the stain resists your valiant efforts to cover up your comrade\'s crimes.',
            'jump ch1_beforeClosetHideUnifiedChoice'
        ],
        'ch1_beforeClosetMoppingScrubSoft': [
            'show character ash 7 with flipped-horizontal',
            'You find yourself relating to the ugly smudge on the floor.',
            'It\'s not the only one here that stubbornly refuses to let go.',
            'play sound wet-squish-1',
            'You give a big sigh as you mop with more care, slowly and deliberately swirling the head of the mop into the bloody mess.',
            'play sound wet-squish-3',
            'You can\'t relax, not with the warden right on your tail.',
            'play sound wet-squish-4',
            'show character ash 1 at right with flipped-horizontal',
            'With how tense you are you\'re literally shaking as you mop.',
            'play sound wet-squish-5',
            'jump ch1_beforeClosetHideUnifiedChoice'
        ],
        'ch1_beforeClosetHideUnifiedChoice': [
            'ash: Please, please, please!',
            'play sound wet-squish-1',
            'play sound wet-squish-2',
            'play sound wet-squish-3',
            'play sound wet-squish-4',
            'play sound wet-squish-5',
            'The blood finally yields to your amazing mopping skills, the ugly brown fading enough to pretend that everything is fine.',
            'play sound wet-squish-1',
            'There\'s even blood under the fridge of all places.',
            'play sound wet-squish-2',
            'And on the fridge. Probably in the fridge too.',
            'play sound wet-squish-3',
            'If the warden checks inside the fridge you\'re both done for.',
            () => {
                stopVideo();
                cueVideo(youtubeSongs.Cupid);
            },
            'and: Ashley! The warden is coming!!',
            () => {
                startVideo();
            },
            'Shit. Fuck.',
            'hide character ash with fadeOut',
            'play sound walk-out',
            'show image ch1-run-from-warden-run-pray with fadeIn',
            'You grab the mop and dash for the balcony.',
            'It feels farther than before. If you were smarter you would have started with the fridge first, mopping your way towards the balcony.',
            'Unfortunately, it appears that your immense intellect is solely dedicated towards self-deprecation, self-loathing, and regret.',
            'show image ch1-run-from-warden-look-closet with fadeIn',
            'In a moment of panic, you spot the wardrobe. It\'s closer.',
            'hide image ch1-run-from-warden-run-pray',
            () => {
                stopVideo();
            },
            'jump ch1_closetHideChoiceBeforeChoose'
        ],
        'ch1_closetHideChoiceBeforeChoose': [
            'play sound decision',
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
            'hide image ch1-run-from-warden-look-closet',
            'play sound closet-close',
            'You hide in the closet.',
            'dev: ..... Which puts you on the same route as the base game. ',
            'dev: Want to find out what happens?',
            'show message TCOAAL',
            'dev: ... Okay, you can make the other choice now.',
            'show image ch1-run-from-warden-look-closet',
            'jump ch1_closetHideChoiceBeforeChoose'
        ],
        'ch1_closetHideChoiceRunFaster': [
            'play sound walk-out',
            'hide image ch1-run-from-warden-look-closet',
            'show image ch1-run-from-warden-run-pray',
            'You run faster. ',
            '... and you pray.',
            'Which is odd for you, because really - what sort of god or goddess would take pity on you, of all things?',
            'hide image ch1-run-from-warden-run-pray',
            'show image ch1-run-from-warden-run-pray with shakeY',
            'play sound Earth1',
            'But then there\'s a loud clonk from the front door, followed by expletives and shouting.',
            'hide image ch1-run-from-warden-run-pray with fadeOut',
            'show image ch1-run-from-warden-out-door with fadeIn',
            'play sound Blow1',
            'warden: <b>ARGH! MY FOOT!</b>',
            '... Did your prayers actually reach someone? Something?',
            'You don\'t stop to give thanks. You bolt out back door, picking up the plank as you go just before the door opens.',
            'Your pace slows as you reach Andrew. You cover your panting mouth with your hands after slowly putting down the plank and mop to keep quiet.',
            () => {
                cueVideo(youtubeSongs.SheepSway);
            },
            'hide image ch1-run-from-warden-out-door with fadeOut',
            'show image ch1-hide-background-frame with fadeIn',
            'show image ch1-hide-background-box with fadeIn',
            'show image ch1-hide-background-door with fadeIn',
            'show image ch1-hide-background-wall with fadeIn',
            'show image ch1-hide-staredrew-straight with fadeIn',
            'Andrew is hiding right by the balcony, listening.',
            'show image ch1-hide-closeshley with fadeIn',
            'hide image ch1-hide-staredrew-straight',
            'show image ch1-hide-staredrew-right',
            'You join him there. ',
            () => {
                startVideo();
            },
            'warden: Greetings and salutations!',
            'hide image ch1-hide-staredrew-right',
            'show image ch1-hide-bitedrew',
            'hide image ch1-hide-closeshley',
            'show image ch1-hide-closeshley with headShake',
            'The warden\'s loud voice almost makes you jump.',
            'His footsteps can be heard creaking the floor as he moves around the apartment.',
            'hide image ch1-hide-bitedrew',
            'show image ch1-hide-staredrew-straight',
            'The walls are criminally thin here, they must be made of cardboard. Reinforced with plastic.',
            'hide image ch1-hide-staredrew-straight',
            'show image ch1-hide-bitedrew',
            'warden: ..... Huh?',
            'warden: Anybody home?',
            'hide image ch1-hide-bitedrew',
            'show image ch1-hide-staredrew-right',
            'hide image ch1-hide-closeshley',
            'show image ch1-hide-closeshley-left',
            'There\'s a long stretch of silence, Andrew\'s eyes dart to yours for a moment.',
            'You can almost feel him silently judging, hoping that you did well enough at mopping up.',
            'Naturally, your mopping skills are stupendous. Despite the shabby equipment, you cleaned that up really well.',
            'warden: ..... Oh, great. Another suicide.',
            'hide image ch1-hide-staredrew-right',
            'show image ch1-hide-relievedrew',
            'You can visibly see the relief wash over Andrew, that sigh of his preceeds your own, but you\'re just happy to see him happy.',
            'hide image ch1-hide-closeshley-left',
            'show image ch1-hide-relievedshley',
            'Well, happier... He\'s not exactly smiling. It\'s getting harder to see him smile these days.',
            'hide image ch1-hide-relievedrew',
            'show image ch1-hide-bitedrew',
            'You can hear more footsteps as the warden paces and searches the neighbor\'s room.',
            'hide image ch1-hide-relievedshley',
            'show image ch1-hide-sushley',
            'There\'s the sound of the closet opening and closing - you definitely would have been caught if you tried to hide in there.',
            'Good thing you didn\'t, huh?',
            'The warden\'s search continues, you can hear footsteps, desks being bumped against, chairs moving...',
            // Note to self - there HAS to be a better way to layer images!!
            'hide image ch1-hide-background-door',
            'hide image ch1-hide-background-wall',
            'hide image ch1-hide-sushley',
            'hide image ch1-hide-bitedrew',
            'show image ch1-hide-warden-2',
            'show image ch1-hide-background-door',
            'show image ch1-hide-background-wall',
            'show image ch1-hide-sushley',
            'show image ch1-hide-bitedrew',
            '... He\'s searching for a body ...',
            'Wait ... Oh no. There\'s no body for him to find. What is he going to do?',
            'hide image ch1-hide-warden-2',
            'show image ch1-hide-warden-3',
            'hide image ch1-hide-background-door',
            'hide image ch1-hide-background-wall',
            'hide image ch1-hide-sushley',
            'hide image ch1-hide-bitedrew',
            'show image ch1-hide-background-door',
            'show image ch1-hide-background-wall',
            'show image ch1-hide-sushley',
            'show image ch1-hide-bitedrew',
            'You might still be fucked.',
            '... It worked before, so...',
            'hide image ch1-hide-warden-3',
            'hide image ch1-hide-sushley',
            'show image ch1-hide-preyshey',
            '... You silently pray once more, to whoever or whatever it was that answered you last time.',
            '.....',
            'hide image ch1-hide-preyshey',
            'show image ch1-hide-closeshley with headShake',
            'play sound Blow1',
            'warden: <b>OH GOD THAT REEKS!</b>',
            'Ah.',
            'Yes.',
            'That room.',
            'It smelled so awful that you did not dare venture into that room.',
            'There\'s an audible click before the warden starts talking again.',
            'hide image ch1-hide-closeshley',
            'show image ch1-hide-sushley',
            'warden: Yeah, we\'ve got another suicide.',
            'warden: The weirdo from before, B type.',
            'warden: ... Yeah, I checked. Look, I gotta get out of here before I puke, the smell is awful.',
            'warden: The cleanup crew can deal with this, I am not touching that.',
            'warden: ... Fine, I\'ll file the paperwork, happy?',
            'hide image ch1-hide-bitedrew',
            'show image ch1-hide-relievedrew',
            'To your relief, the warden can be heard leaving the room, a small wooden clonk audible before his footsteps fade off into the distance.',
            'You\'ve finally caught your breath, no longer panting like a bitch in heat.',
            'and: Oh God that was too close...',
            'Andrew breathes another sigh of relief, almost collapsing against the wall that he flops against, the tension leaving his body.',
            'He runs his hand through his hair, now slick with sweat as he slides down the wall.',
            'hide image ch1-hide-background-frame with fadeOut',
            'hide image ch1-hide-background-door with fadeOut',
            'hide image ch1-hide-background-wall with fadeOut',
            'hide image ch1-hide-background-box with fadeOut',
            'hide image ch1-hide-relievedrew',
            'hide image ch1-hide-sushley',
            'TODO: Return to character portraits here!!',
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
                    },
                    nearMiss: {
                        Text: 'Garner sympathy by how close you were to being caught',
                        Do: 'jump ch1_postWardenNearMiss'
                    }
                }
            },
            'end'
        ],
        'ch1_postWardenPickFight': [
            () => {
                monogatari.storage.anger += 0.1;
                monogatari.storage.ch1_postWardenPickFight = true;
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
            'show image ch1-andrew-door-2 with fadeIn',
            'He walks over to the bedroom, pausing to glare at you before he leaves.',
            'and: Good night, Ashley.',
            'play sound closet-close',
            'hide image ch1-andrew-door-2',
            'The bedroom door closes with finality before you can respond.',
            'Well, shit.',
            'Too late to have regrets, not that you do, but you do.',
            'Everything seems to be going wrong as of late.',
            'You don\'t even feel better after that.',
            'Whatever.',
            'You pick yourself off the floor, shaking a little as you get up.',
            'You\'re going to feel this tomorrow, definitely.',
            'Going straight from starvation to slaving away.',
            'But at least you have food now. Not that Andrew seems to appreciate it.',
            'Nor did he appreciate your cooking yesterday either.',
            'So today\'s unappreciation is just more of the same from him.',
            'It doesn\'t bother you, except that it does.',
            'The growl of your stomach interrupts your thoughts.',
            '\'Nutrients Required!\' it barks at you.',
            'Everything and everyone is barking at you these days.',
            'You don\'t have the energy to cook, but you still have leftovers in the fridge that you can microwave.',
            'TODO: play microwave sound',
            'With a huff, you place the leftovers in the microwave and begin reheating it.',
            'It gives you some time to reflect, not that you want to.',
            'What are you even doing?',
            'Not just this, not just being locked in the apartment.',
            'You don\'t have any plans. Never did, if you were honest with yourself. Which you never are.',
            'To that end, being quarantined has been a godsend for you.',
            '... aside from the starvation, running out of essentials...',
            'It\'s been rough, but you genuinely enjoyed being close to your Andy.',
            '... Well, most of the time at least...',
            'You had hope that you\'d get closer to Andy over time.',
            'Especially considering that there\'s literally nothing else to do here.',
            'But it seems that every time you think you\'re making progress you open your dang mouth and ruin it all again.',
            'TODO: play microwave ding sound and stop microwave loop',
            'Your food\'s ready. You can stop reflecting.',
            'TODO: play sfx of plates or clinking or whatnot',
            'show image ch1-hikari-ashley-eat-sad',
            'You try to stop, distracting yourself with your food.',
            'It doesn\'t taste as good as it did yesterday.',
            'It\'s missing something.',
            'Company. Andy\'s.',
            'ash: There\'s always tomorrow.',
            'There\'s always been a tomorrow.',
            'Always will be.',
            'That\'s what makes it such a great excuse for your inadequacies, for your mistakes, and for your shortcomings.',
            'Of which there are plenty.',
            'You sorry excuse for a human.',
            'Off to bed with you. You\'re too tired to do anything but mope, clearly.',
            'You rinse off your plate, stacking it up to dry with a sigh.',
            '',
            'end'
        ],
        'ch1_postWardenGloat': [
            () => {
                monogatari.storage.closeness += 0.05;
                monogatari.storage.playfulness += 0.1;
                monogatari.storage.ch1_postWardenGloat = true;
            },
            'You totally saved his ass.',
            'Gloating time~',
            'ash: And thanks to my amazing mopping skills, we aren\'t!',
            'You bring your hand to your chest that you puff out dramatically.',
            'Or at least try to - your breathing isn\'t quite all there yet.',
            'ash: You can thank me now!',
            'You wait for Andrew\'s response, having difficulty keeping your chest puffed up. ',
            'and: ... Alright, thanks, Ashley.',
            'and: Good job with the mopping.',
            '... Ashley? ASHLEY?!',
            'Why not leyley?!',
            {
                Choice: {
                    Dialog: 'Make a big deal out of it?',
                    yes: {
                        Text: 'Yes!',
                        Do: 'jump ch1_postWardenGloatYesLeyley',
                    },
                    no: {
                        Text: 'No...',
                        Do: 'jump ch1_postWardenGloatNoLeyley',
                    }
                }
            },
            'end'
        ],
        'ch1_postWardenGloatYesLeyley': [
            'TODO: Finish this train of thought! SORRY GAME ISN\'T DONE YET!',
            'end'
        ],
        'ch1_postWardenGloatNoLeyley': [
            'TODO: Finish this train of thought! SORRY GAME ISN\'T DONE YET!',
            'end'
        ],

        'ch1_postWardenNearMiss': [
            () => {
                monogatari.storage.closeness += 0.05;
                monogatari.storage.passion += 0.05;
                monogatari.storage.ch1_postWardenNearMiss = true;
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
            'His praise sends a warm rush through you.',
            'Oh, the things you\'d do for him if he\'d only ask, say please, and thank you for it.',
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
            'show image ch1-andrew-door-1',
            'He pauses by the doorway, looking back at you with tired eyes.',
            'and: Good night, Ashley.',
            'ash: ... Good night.',
            'hide image ch1-andrew-door-1',
            'The bedroom door clicks shut softly.',
            'Maybe this little adventure did bring you closer?',
            'It\'s hard to tell, sometimes. He feels closer sometimes, then doesn\'t.',
            'You pick yourself up off the ground, shaking a little bit as you do.',
            'The adrenaline has worn off, with a hungry exhaustion taking its place.',
            'Still, you worked hard today, and your diligent efforts paid off.',
            '... But they did work up an appetite.',
            '\'Nutrients Required!\' your stomach barks at you.',
            'A familiar bark. One that you can actually satisfy for a change.',
            'You don\'t have the energy to cook a whole meal, not without Andrew to motivate you.',
            'So instead you microwave the leftovers from last night.',
            'TODO: Microwave sfx loop begin here',
            'TODO: Show happier Ashley microwave',
            'While the microwave nukes your \'food\' you have some time to reflect.',
            'You\'re still stuck here, the two of you. That hasn\'t changed.',
            'But you\'ve been feeling closer to your Andy lately.',
            'Don\'t they say that near-death experiences bring people closer?',
            'You can only imagine what would have happened if the warden caught you.',
            'So this definitely counts, right?',
            'The ding of the microwave interrupts your train of thought for a moment, signaling that your nutrients are ready.',
            'TODO: Play dish clink sounds',
            'YUM YUM CANNIBALISM YUM YUM!',
            'show image ch1-hikari-ashley-eat-hopeful with fadeIn',
            'Somehow the \'food\' doesn\'t taste the same as yesterday.',
            'It\'s definitely missing something - company.',
            'Still, all things considered, you\'re doing well the both of you.',
            'You have food. That\'s good. ',
            'You could survive for maybe another month if you stretch out the \'supplies\'. ',
            'You\'re feeling pretty hopeful, actually. ',
            'Which is rare for you. ',
            'Normally, you would know better than to be hopeful. ',
            'But you can\'t resist - your smile just won\'t go away, not yet.',
            'TODO: play dish clink sounds',
            'TODO: delay',
            'TODO: play dish washing sfx',
            'Since you actually expect to have food later, you wash your dishes up this time instead of leaving them in the sink.',
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
        'ch1_postWardenBond': [
            () => {
                monogatari.storage.closeness += 0.05;
                monogatari.storage.passion += 0.05;
                monogatari.storage.ch1_postWardenBond = true;
            },
            'You feel a warm little spark in your chest.',
            'He looks so cute when he\'s all rattled like this.',
            'Time to remind him why he never has to worry when it\'s just the two of you.',
            'ash: Aww, Andy~ Look at you - all sweaty and dramatic!',
            'You bounce on your toes a little bit, closing the distance until you\'re right in his personal space.',
            'You can smell the stress on him mixed in with the scent of his sweat.',
            '... And you\'d be lying if you said you didn\'t like it.',
            'ash: We\'re a good team, Andy - the best team!',
            'ash: You distract the warden, I clean up the evidence!',
            'ash: It\'s like an episode - Andy and Leyley and the magic trick!',
            'You put on your best cute face, looking up at Andrew expectantly.',
            'and: ... ?',
            'Andrew isn\'t buying this at all. ',
            'That raised eyebrow of his does not indicate success of your bonding attempt. ',
            'and: ... What are you doing? ',
            'This isn\'t working at all. ',
            'Why do you even bother with him? ',
            'Oh, yeah, that\'s right - he\'s the only person who ever gave a shit about you. ',
            'He\'s also the only person you care about too. ',
            'ash: ... I am trying to bond with you. ',
            'and: ... Over cleaning up our neighbor\'s blood??',
            'ash: ... Yes. ',
            'You\'re in too deep to bail out now - and you\'re not a quitter!',
            'ash: ... Is that so strange?',
            'and: Yes!',
            'ash: ... Well, nothing\'s been going right lately!',
            'ash: This is the only success we\'ve had since we got locked down!',
            'and: ... Can\'t you just be normal about this?',
            'ash: No. ',
            'ash: I\'ve seen what normal means for you, and it sucks!',
            'and: I would appreciate some normalcy from you, even if it\'s just an act. ',
            '... You\'ve never been normal.',
            '... And his normal IS an act.',
            'An act that you never understood why he kept it up in the first place.',
            'ash: Aren\'t we done with normal?',
            'ash: We\'ve literally cut up our neighbor into bits, ate some of him, and hid the evidence.',
            'ash: Didn\'t you say that there\'s no way we wouldn\'t get caught once they finally let us out?',
            'ash: How are we not done with normal yet??',
            'and: ... Well...',
            'There he goes again. He\'s thinking. ',
            'You resist the temptation of rolling your eyes at him.',
            'So many thoughts he has, yet he doesn\'t deem you worthy of sharing most of them.',
            'You\'re on the outside, trying to get in.',
            'Oh, how you\'d love to be able to peek into his overthinking brain.',
            'See all those things he hides from you.',
            'But no, he shuts you out, locks the door, and you can see jack-shit through the blinds.',
            'Only what HE deems acceptable for you to see, after he\'s finished ruminating on it.',
            'and: They don\'t know that we\'ve done this. Not yet, at least...',
            'and: .....',
            'and: ... We\'re never going to be able to dispose of the bones...',
            'and: ... We\'re still so screwed...',
            'This isn\'t working at all!',
            'Now he\'s stressing out again!',
            'ash: Can\'t we just burn the bones?',
            'ash: Don\'t they dispose of bodies that way?',
            'and: ... You mean cremation?',
            'ash: Yes! That!',
            'and: Do you have any idea what temperature crematories run at?',
            'ash: ... Uh...',
            {
                Choice: {
                    Dialog: 'Andy\'s asking if you know what temperature crematories run at.',
                    wayTooLow: {
                        Text: '180°C / 356°F',
                        Do: 'and: What?? No! That\'s deep-fryer temperature!',
                    },
                    stillTooLow: {
                        Text: '360°C / 680°F',
                        Do: 'and: No, that\'s far too low to cremate.',
                    },
                    correct: {
                        Text: '760°C / 1400°F',
                        Do: 'and: ... Huh, how\'d you know that?'
                    },
                    tooHigh: {
                        Text: '1370°C / 2500°F',
                        Do: 'and: ... No, that\'s high enough to melt steel!',
                    },
                    wayToohigh: {
                        Text: '2000°C / 3632°F',
                        Do: 'and: ...??? That\'s nuclear meltdown temperature!!',
                    },
                },
            },
            'and: Anyway! The optimal temperature for cremation is around [ 871°C / 1600°F ], which is beyond what we can do in our kitchen.',
            'and: So no, we can\'t cremate in our kitchen.',
            'and: Even if we had a fireplace it STILL wouldn\'t get hot enough, probably.',
            'ash: ... Since when are you an expert at disposing of corpses??',
            'and: ... If you can believe it, I used to be interested in the sciences.',
            'and: ... Not anymore, I might add.',
            'This conversation has completely derailed. ',
            'Absolutely nothing ever goes right for you.',
            'FUCK!',
            'That warm spark from before fizzles out, quickly replaced by a cold emptiness.',
            'Your head hangs low, and your gaze falls downward as a defeated sigh escapes your lips. ',
            'Fuck, indeed.',
            'There is exactly one person you want to get along with. ',
            'And you can\'t even manage that. ',
            'You absolute failure of a human. ',
            '...',
            'Before your lamentations can finish, you feel the weight of Andrew\'s hand on your head.',
            '... Followed by his warmth.',
            'and: Look, I\'ll... I\'ll think of something. ',
            'and: We\'re okay for now... for now. ',
            'and: You might be messed up in the head, but you\'re trying...',
            'and: Even if it\'s in your own weird little way. ',
            'and: ... Thanks for cleaning up the blood.',
            'That warm spark in your chest from earlier reignites, ',
            'TODO: FINISH THIS TRAIN OF THOUGHT',
            'end'
        ],
        'ch1_earlyJustGoToBed': [
            () => {
                monogatari.storage().closeness -= 0.05;
                monogatari.storage().passion -= 0.05;
            },
            'You turn away from Andrew\'s back, pretending that you\'re not hurt by it.',
            'TODO: Finish this',
            'end'
        ],
        'ch1_earlyWishAndrewGoodNight': [
            () => monogatari.storage().passion += 0.1,
            'You pause before you sit down on your bed, looking at Andrew\'s back.',
            'TODO: FInish this',
            'end'
        ],
        'ch1_earlyCannibalismYumYum': [
            'YUM YUM CANNIBALISM YUM YUM!',
            'end'
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