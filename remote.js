class Remote {
    constructor(id) {
        this.id = id;
    }
    changeChannel(newChannel, tv) {
        //goi phuong thuc thay doi kenh cua tv
        tv.setChannel(newChannel);

    }
    changeVolume(newVolume, tv) {
        //goi phuong thuc thay doi am luong cua tv
        tv.setVolume(newVolume);
    }
}