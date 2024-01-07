function solve(arr){
    class Song {
        constructor (typeList, name, time){
            this.typeList = typeList
            this.name = name
            this.time = time
        }
    }
    let numberOfSongs = Number (arr[0])
    let songs = []
    for (let i = 1; i <= numberOfSongs; i++){
        let [type, song, duration] = arr[i].split("_")
        songs.push(new Song(type, song, duration))

    }

    let searchedType = arr[arr.length - 1]
    if (searchedType === "all") {
        songs.forEach(song => console.log(song.name));
    } else {
        let filteredSongs = songs.filter(song => song.typeList === searchedType);
        filteredSongs.forEach(song => console.log(song.name));
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )