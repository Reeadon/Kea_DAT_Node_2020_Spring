const url = window.location.href;
let videoId = url.substr(url.lastIndexOf("/") + 1);

// todo: Use Ajax to get the json info about this specific video.

const player = `<video id="player" controls>
                    <source src="/${videoId}" >
                    Your browser does not support the video tag.
                </video>`;

$("#player").append(player);



