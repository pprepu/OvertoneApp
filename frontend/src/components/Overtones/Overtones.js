import { useState } from 'react'
import overtoneService from '../../services/overtones'
import noteService from '../../services/notes'

import {
  Container,
  Text,
  Button
} from '../../globalStyles'

import {
  White,
  Black,
  FancyDiv,
  SpecialContainer
} from './Overtones.elements'


const Overtones = () => {

  // const [note, setNote] = useState('')
  const [activePianoNotes, setActivePianoNotes] = useState({})
  const [noteHovered, setNoteHovered] = useState('')
  const [partials, setPartials] = useState(12)

  // const handleNoteChange = event => {
  //   setNote(event.target.value)
  // }

  // const doButtonStuff = () => {
  //   console.log(overtoneService.calculateFrequencies(100))
  //   console.log(overtoneService.calculateFrequencies(50, 10))
  //   console.log(overtoneService.calculateFrequencies(16.35, 8))
  // }

  // const doButtonStuff2 = () => {
  //   overtoneService.testAction()
  //   console.log('----')
  //   console.log('highest:', noteService.HIGHEST_NOTE_FREQ)
  // }

  // const pianoNotes = () => {
  //   const notesFound = noteService.pianoNotes
  //   console.log(notesFound.map(note => noteService.findNoteName(note)))
  // }

  // const doButtonStuff3 = () => {
  //   overtoneService.showReversed()
  // }

  // const doButtonStuff4 = () => {
  //   overtoneService.showKeysAndValues()
  // }

  // const findFreq = () => {
  //   const randomNoteFreq = Math.floor(Math.random() * 1000) + 17
  //   const noteFound = overtoneService.findClosestFreq(randomNoteFreq)
  //   console.log(`orig freq: ${randomNoteFreq}, note found: ${noteFound[0]}, distance: ${noteFound[1]}`)
  // }

  // const findFreqFixed = () => {
  //   // const myNoteFreq = 114.46
  //   const myNoteFreq = 49.05
  //   const noteFound = overtoneService.findClosestFreq(myNoteFreq)
  //   console.log(`orig freq: ${myNoteFreq}, note found: ${noteFound[0]}, distance: ${noteFound[1]}`)
  // }

  // const findFrequency = () => {
  //   if (!overtoneService.frequencies[note]) {
  //     console.log('note invalid')
  //     return
  //   }

  //   const noteFound = overtoneService.findClosestFreq(overtoneService.frequencies[note])
  //   console.log(`note ${note}, note found: ${noteFound[0]}, distance: ${noteFound[1]}`)
  // }

  // const findOvertones = () => {
  //   if (!overtoneService.frequencies[note]) {
  //     console.log('note invalid')
  //     return
  //   }

  //   const notesReceived = overtoneService.findOvertones(overtoneService.frequencies[note], 8)

  //   console.log(notesReceived.map(note => note[0]))
  //   console.log(notesReceived.map(note => note[1]))
  // }

  // const handleClick = note => {
  //   console.log('test', note)
  //   setActivePianoNotes({ [note]: noteService.frequencies[note] })
  //   console.log(activePianoNotes)
  // }

  const handleClick = note => {
    const overtonesFound = overtoneService.findOvertones(noteService.frequencies[note], partials)
    setActivePianoNotes(overtonesFound)
    // console.log(overtonesFound)
  }

  const partialsUp = () => {
    if (partials >= 20) {
      return
    }

    setPartials(partials + 1)
  }

  const partialsDown = () => {
    if (partials <= 1) {
      return
    }

    setPartials(partials + -1)
  }

  /*
  Seuraavaks:
  pianon luominen .mapilla ->
  1. notes.js, pianonotes array, josta mäpätään key
  2. note[1] === 'b' ? <White blaablaa /> : <Black blaablaa />
  3. useStateen overtoneservice.findovertonesin palauttamat notet
  4. löydetyt notet esim. .map(keyName => <White keyName freqDist=notesFound[keyName] />) <- freqDist on undefined (falsy)
  5. ylläolevan perusteella löydettyjen sävelten erilainen ilme piirretyssä pianossa
  */

  return (
    <Container>
      {/* <StyledInput value={note} onChange={handleNoteChange}/>
      <Text>current note: {note}</Text>
      <Container>
        <Button onClick={() => doButtonStuff()}>calcOtones</Button>
        <Button onClick={() => doButtonStuff2()}>noteFreqs</Button>
        <Button onClick={() => pianoNotes()}>notesPiano</Button>
      </Container>
      <Container>
        <Button onClick={() => doButtonStuff3()}>reverse</Button>
        <Button onClick={() => doButtonStuff4()}>keys&values</Button>
      </Container>
      <Container>
        <Button onClick={() => findFreq()}>freqFinding</Button>
        <Button onClick={() => findFreqFixed()}>freqFindingFIXED</Button>
      </Container>
      <Container>
        <Button onClick={() => findFrequency()}>testFunc</Button>
        <Button onClick={() => findOvertones()}>OVERTONES</Button>
      </Container> */}
      <Container>
        <Text>
          Pressing a key on the piano creates the harmonic series from that note.
          The partials of this series will be shown on the keyboard with different colors
          expressing differing levels of distance between the actual note in the harmonic series and the note
          shown on the piano. Lighter colors mean smaller, even imperceptible deviations, while darker colors mean
          noticeable, dissonant sounding differences if those notes would be played together.
        </Text>
        {
          noteService.pianoNotes.map(note =>
            note[1] === 'b'
              ?
              <Black
                key={note}
                keyName={noteService.findNoteName(note)}
                onClick={() => handleClick(note)}
                distanceFromNote={activePianoNotes[note]}
                onMouseEnter={activePianoNotes[note] !== undefined ? () => setNoteHovered(note) : () => setNoteHovered('')}
                onMouseLeave={() => setNoteHovered('')}
              />
              :
              <White
                key={note}
                keyName={noteService.findNoteName(note)}
                onClick={() => handleClick(note)}
                distanceFromNote={activePianoNotes[note]}
                onMouseEnter={activePianoNotes[note] !== undefined ? () => setNoteHovered(note) : () => setNoteHovered('')}
                onMouseLeave={() => setNoteHovered('')}
              />
          )
        }
      </Container>
      <SpecialContainer>
        <Button onClick={() => partialsDown()}>-</Button>
        <FancyDiv>{partials}</FancyDiv>
        <Button onClick={() => partialsUp()}>+</Button>
      </SpecialContainer>
      <Container>
        {noteHovered &&
        <Text>
          note: {noteHovered},
          cents: {Math.round(activePianoNotes[noteHovered] * 100)}
        </Text>
        }
      </Container>
    </Container>
  )
}

export default Overtones