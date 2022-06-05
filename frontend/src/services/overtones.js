import noteService from './notes'

const testAction = () => {
  // console.log(noteService.frequencies['c0'])
  // console.log(noteService.frequencies['db0'])

  for (let key in noteService.frequencies) {
    console.log(`${key}: ${noteService.frequencies[key]}`)
  }
}

const calculateFrequencies = (noteFreq, partials = 5) => {
  if (isNaN(partials)) {
    throw new Error('partials should be a number')
  }
  if (partials < 1) {
    throw new Error('partials should be higher than zero')
  }

  const overtoneFrequencies = []
  for (let i = 1; i <= partials; i++) {
    // overtoneFrequencies.push(Math.round(noteFreq * i * 100) / 100)
    let freqOfPartial = noteFreq * i
    overtoneFrequencies.push(+freqOfPartial.toFixed(2))
  }

  return overtoneFrequencies
}

export default {
  testAction,
  calculateFrequencies
}