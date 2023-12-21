function gramophoneFunction(band, album, song){
    /**
     * (albumName.length * bandName.length) * song-name.length / 2
     */
    let songDuration = ((album.length * band.length) * song.length / 2) / 2.5
    let output = `The plate was rotated ${Math.ceil(songDuration)} times.`
    console.log(output)
}

gramophoneFunction('Black Sabbath', 'Paranoid', 'War Pigs')
gramophoneFunction('Rammstein', 'Sehnsucht', 'Engel')