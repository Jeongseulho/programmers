function solution(genres, plays) {
    const songObj = {}
    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i]
        const play = plays[i]
        if (genre in songObj){
            songObj[genre][0] += play
            songObj[genre].push(i)
        } else {
            songObj[genre] = [play, i]
        }
    }
    const songList = Object.values(songObj)
    songList.sort((a, b) => b[0] - a[0])
    const songIdList = songList.map((song) => song.slice(1))
    const sortedSongIdList = 
          songIdList.map((list) => list.sort((a, b) => {
              if (plays[b] === plays[a]) {
                  return a - b
              }
              return plays[b] - plays[a]
          }))
    const ans = []
    sortedSongIdList.forEach((list) => {
        ans.push(list[0])
        if (list.length >= 2){
            ans.push(list[1])
        }
    })
    return ans
}