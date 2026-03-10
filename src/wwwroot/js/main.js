'use strict';
/* global Monogatari */
/* global monogatari */

/**
 * =============================================================================
 * This is the file where you should put all your custom JavaScript code,
 * depending on what you want to do, there are 3 different places in this file
 * where you can add code.
 *
 * 1. Outside the $_ready function: At this point, the page may not be fully
 *    loaded yet, however you can interact with Monogatari to register new
 *    actions, components, labels, characters, etc.
 *
 * 2. Inside the $_ready function: At this point, the page has been loaded, and
 *    you can now interact with the HTML elements on it.
 *
 * 3. Inside the init function: At this point, Monogatari has been initialized,
 *    the event listeners for its inner workings have been registered, assets
 *    have been preloaded (if enabled) and your game is ready to be played.
 *
 * You should always keep the $_ready function as the last thing on this file.
 * =============================================================================
 **/

let youtubePlayer = {} ;

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready(() => {
    // 2. Inside the $_ready function:

    monogatari.init('#monogatari').then(() => {
        // 3. Inside the init function:

        // a.3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        youtubePlayer = new YT.Player('youtube-player', {
            videoId: 'ppriAsvBlhI',
            playerVars: {
                'playsinline': 1
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            console.log("onPlayerReady fired~");
            event.target.playVideo();
            youtubePlayer.playVideo();
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.PLAYING && !done) {
                // TODO: Do something 
            }
        }
        function stopVideo() {
            youtubePlayer.stopVideo();
        }

        setTimeout(youtubePlayer.playVideo, 1000);
    });
});
