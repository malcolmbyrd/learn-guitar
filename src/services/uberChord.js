const fetchChordsLike = async (chord) => {
  return await fetch(`https://api.uberchord.com/v1/chords?nameLike=${chord}`)
    .then(response => {
      return response.json()
    })
}

const UberChordService = {fetchChordsLike}

export default UberChordService
