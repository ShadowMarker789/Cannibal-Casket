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

let youtubePlayer = { isReady: false };
let youtubePlayerState = 0;
let youtubePlayerDesiredState = 1;

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:


$_ready(() => {
    // 2. Inside the $_ready function:

    monogatari.init('#monogatari').then(() => {
        // 3. Inside the init function:

        // a.3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        try {
            console.log("Creating YT Player~");
            youtubePlayer = new YT.Player('youtube-player', {
                videoId: 'ppriAsvBlhI',
                playerVars: {
                    'playsinline': 1
                },
                events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange,
                    'onError': onPlayerError
                }
            });
        }
        catch (ex) {
            console.error(ex);
        }

        function onPlayerError(event) {
            console.error(event);
        }

        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            console.log("onPlayerReady fired~");
            youtubePlayer.isReady = true;
            // event.target.playVideo();
            // startVideo();

            setInterval(setYoutubeVolume, 1000);
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        function onPlayerStateChange(event) {
            console.log("onPlayerStateChange: ", event);
            youtubePlayerState = event.data;
            if (event.data == YT.PlayerState.PLAYING) {
                // TODO: Do something if it's playing 
            }
        }

        function setYoutubeVolume() {
            try {
                if (!youtubePlayer.isReady) return;

                // 0.0 .. 1.0 
                const musicVol = monogatari.preference('Volume').Music;
                youtubePlayer.setVolume(musicVol * 100.0);
            }
            catch (ex) {
                console.error(ex);
            }
        }
    });
});

function stopVideo() {
    try {
        if (!youtubePlayer.isReady) return;
        youtubePlayer.stopVideo();
    }
    catch (ex) {
        console.error(ex);
    }
}

function startVideo() {
    try {
        console.log('Youtube player start requested!');
        if (!youtubePlayer.isReady) return;
        youtubePlayer.playVideo();
    }
    catch (ex) {
        console.error(ex);
    }
}

function cueVideo(videoId) {
    try {
        if (!youtubePlayer.isReady) return;
        youtubePlayer.cueVideoById(videoId);
    }
    catch (ex) {
        console.error(ex);
    }
}

