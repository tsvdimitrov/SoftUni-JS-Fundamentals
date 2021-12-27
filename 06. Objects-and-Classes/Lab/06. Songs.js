function songs(input) {

    let numberOfSongs = Number(input.shift());
    let typeOfSongs = input.pop();
    let songs = [];
    let currentSong = [];
    let type = "";
    let name = "";
    let time = 0;

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < numberOfSongs; i++) {
        currentSong = input[i].split("_");
        type = currentSong[0];
        name = currentSong[1];
        time = currentSong[2];
        let song = new Song(type, name, time);
        songs.push(song);
    }

    if (typeOfSongs == "all") {
        songs.forEach((element) => console.log(element.name));
    } else {
        let filtered = songs.filter((element) => element.typeList == typeOfSongs);
        filtered.forEach((element) => console.log(element.name));
    }
}
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);