import noteService from './notes'

const allNoteFreqs = Object.entries(noteService.frequencies)

const MAX_PARTIALS = 20

const findClosestFreq = freqSent => {
  let prevFreqArray, curFreqArray

  for (let noteFreqArray of allNoteFreqs) {

    if (freqSent > noteFreqArray[1]) {
      curFreqArray = noteFreqArray
      continue
    }

    if (freqSent === noteFreqArray[1]) {
      // answer was clear, so we can return it straight away
      return [ noteFreqArray[0], 0 ]
    }

    prevFreqArray = curFreqArray
    curFreqArray = noteFreqArray

    // to convert the distance between freqSent and the closest note into 'cents',
    // I compare it to the distance of a semitone (in Hz) between the two closest notes
    const semitoneDistance = Math.abs(curFreqArray[1] - prevFreqArray[1])

    const distanceToPrev = freqSent - prevFreqArray[1]
    const distanceToCur = freqSent - curFreqArray[1]

    return Math.abs(distanceToPrev) < Math.abs(distanceToCur)
      ? [ prevFreqArray[0], distanceToPrev/semitoneDistance ]
      : [ curFreqArray[0], distanceToCur/semitoneDistance ]
  }

}

const testAction = () => {
  // console.log(noteService.frequencies['c0'])
  // console.log(noteService.frequencies['db0'])

  for (let key in noteService.frequencies) {
    console.log(`${key}: ${noteService.frequencies[key]}`)
  }
}

const showReversed = () => {
  // console.log(noteService.frequencies['c0'])
  // console.log(noteService.frequencies['db0'])

  let newObj = noteService.reverseObject(noteService.frequencies)

  for (let key in newObj) {
    console.log(`${key}: ${newObj[key]}`)
  }
}

const showKeysAndValues = () => {
  console.log(Object.keys(noteService.frequencies))
  console.log('-----')
  console.log(Object.values(noteService.frequencies))
  console.log('-----')
  console.log(Object.entries(noteService.frequencies))
}

const calculateFrequencies = (freqSent, partials = 5) => {
  if (isNaN(partials) || isNaN(freqSent)) {
    throw new Error('parameters should be a numbers')
  }
  if (partials < 1) {
    throw new Error('partials should be higher than zero')
  }

  const overtoneFrequencies = []
  for (let i = 1; i <= partials; i++) {
    // overtoneFrequencies.push(Math.round(freqSent * i * 100) / 100)
    let freqOfPartial = freqSent * i
    overtoneFrequencies.push(+freqOfPartial.toFixed(2))
  }
  // cannot include frequencies, that are higher than allowed (=higher than the highest freq in noteService.frequencies)
  return overtoneFrequencies.filter(freq => freq <= noteService.HIGHEST_NOTE_FREQ)
}

const findOvertones = (freqSent, partials = 5) => {
  if (isNaN(partials) || isNaN(freqSent)) {
    throw new Error('parameters should be numbers')
  }
  if (partials < 1) {
    throw new Error('partials -parameter should be higher than zero')
  }
  if (partials > MAX_PARTIALS) {
    throw new Error('partials -parameter should be lower than', MAX_PARTIALS + 1)
  }
  // calculate partials from the base frequency, find the closest note-frequencies to all these partials
  // and finally turn this information from a 2d-array into an object
  return Object.fromEntries(calculateFrequencies(freqSent, partials)
    .map(freq => findClosestFreq(freq)))
}

export default {
  testAction,
  calculateFrequencies,
  showReversed,
  showKeysAndValues,
  findClosestFreq,
  frequencies: noteService.frequencies,
  findOvertones
}