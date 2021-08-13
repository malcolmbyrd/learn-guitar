const fetchChordsLike = async (chord: string) => {
  return await fetch(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
    .then(response => {
      return response.json()
    })
}

const fetchChord = async (chord: string) => {
  return await fetch(`https://api.uberchord.com/v1/chords/${chord}`)
    .then(response => {
      return response.json()
    })
}

const UberChordService = {fetchChordsLike, fetchChord}

export default UberChordService
