function songs(array) {
    let songs = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numOfSongs = array.shift();
    let lastParameter = array.pop();

    for (let index = 0; index < numOfSongs; index++) {
        let [typeList, name, time] = array[index].split('_');
        let newSong = new Song(typeList, name, time);
        songs.push(newSong);
    }

    if (lastParameter === "all") {
        songs.forEach((entry) => console.log(entry.name));
    } else {
        let filteredSongs = songs.filter((entry) => entry.typeList === lastParameter);
        filteredSongs.forEach((entry) => console.log(entry.name));
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']);
songs([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']);

