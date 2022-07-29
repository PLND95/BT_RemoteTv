class Tv {
    
    constructor (channel, volume, status) {
        this.channel = channel;
        this.volume = volume;
        this.status = status;
    }
    setChannel(newChannel) {
        this.channel = newChannel
    }
    setVolume(newVolume) {
        this.volume = newVolume;
    }
}