import React from 'react';

const Song = ({currentSong, isPlaying}) => {
    return(
        <div className='song-container'>
            <img  style={{animation: `spin ${isPlaying ? "65" : "0"}s linear infinite`}} alt={currentSong.name} src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;