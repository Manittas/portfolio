let currentlyPlaying = null;
let currentlyPlayingAudio = null;

function createVinylCard(vinyl) {
    const card = document.createElement("article");
    card.classList.add("vinyl-card");

    card.innerHTML = `
        <div class="vinyl-player">
            <div class="album-wrapper">
                <img class="album-cover"
                    src="${vinyl.cover}"
                    alt="${vinyl.title} by ${vinyl.artist}">
            </div>

            <div class="vinyl-record">
                <div class="vinyl-label">
                    <span>
                        ${vinyl.artist}
                    </span>
                </div>
                <div class="vinyl-center"></div>
            </div>
        </div>

        <div class="vinyl-information">
            <h3>
                ${vinyl.album}
            </h3>
            <p>
                ${vinyl.artist}
            </p>
            <small class="song-title">
                ♪ ${vinyl.song}
            </small>
        </div>
    `;

    card.addEventListener(
        "click",
        () => {
            toggleVinyl(card, vinyl);
        }
    );

    return card;
}

function toggleVinyl(card, vinyl) {
    // If another vinyl is playing, stop it first.
    if (currentlyPlaying && currentlyPlaying !== card) {
        currentlyPlaying.classList.remove("playing");
        stopCurrentAudio();
    }

    // If this vinyl is already playing, stop it.
    if (card.classList.contains("playing")) {
        card.classList.remove("playing");
        stopCurrentAudio();
        currentlyPlaying = null;
        return;
    }

    // Start animation.
    card.classList.add("playing");
    currentlyPlaying = card;


    // Start Apple preview if exists.
    if (vinyl.preview) {
        playPreview(vinyl.preview, card);
    }
}

function playPreview(source, card) {
    stopCurrentAudio();

    currentlyPlayingAudio = new Audio(source);
    currentlyPlayingAudio.volume = 0.8;

    currentlyPlayingAudio.play().catch(
            (error) => {
                console.error("Could not play preview:", error);
                card.classList.remove("playing");

                currentlyPlaying = null;
                currentlyPlayingAudio = null;
            }
        );


    // When the preview ends, stop the vinyl animation.
    currentlyPlayingAudio.addEventListener(
        "ended",
        () => {
            card.classList.remove("playing");
            currentlyPlaying = null;
            currentlyPlayingAudio = null;
        }
    );
}

function stopCurrentAudio() {
    if (!currentlyPlayingAudio) {
        return;
    }

    currentlyPlayingAudio.pause();
    currentlyPlayingAudio.currentTime = 0;
    currentlyPlayingAudio = null;
}

function loadVinyl(elementId) {
    const container = document.getElementById(elementId);

    if (!container) {
        return;
    }

    vinyls.forEach(
        (vinyl) => {
            const card = createVinylCard(vinyl);
            container.appendChild(card);
        }
    );
}