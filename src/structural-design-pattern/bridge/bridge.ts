interface MediaPlayerImplementation {
    playAudio(): void;
    playVideo(): void;
}

class WindowsMediaPlayer implements MediaPlayerImplementation {
    public playAudio(): void {
        console.log('Play Audio - Windows MediaPlayer');
    }
    public playVideo(): void {
        console.log('Play Video - Windows MediaPlayer');
    }
}


class MacOSMediaPlayer implements MediaPlayerImplementation {
    public playAudio(): void {
        console.log('Play Audio - MacOS MediaPlayer');
    }
    public playVideo(): void {
        console.log('Play Video - MacOS MediaPlayer');
    }
}


abstract class MediaPlayerAbstraction {
    constructor(protected implementation: MediaPlayerImplementation) {}

    abstract playFile(): void;
}

class AudioPlayer extends MediaPlayerAbstraction {
    public playFile(): void {
        this.implementation.playAudio();
    }
}

class VideoPlayer extends MediaPlayerAbstraction {
    public playFile(): void {
        this.implementation.playVideo();
    }
}

// Client code
let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
windowsAudioPlayer.playFile();

let macOSVideoPlayer = new VideoPlayer(new MacOSMediaPlayer());
macOSVideoPlayer.playFile();