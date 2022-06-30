import { useState } from 'react'
import overtoneService from '../../services/overtones'
import noteService from '../../services/notes'

import {
  Container,
  Text,
  Button,
} from '../../globalStyles'

import {
  White,
  Black,
  FancyDiv,
  SpecialContainer,
  KbContainer,
} from './Overtones.elements'


const Overtones = () => {

  // const [note, setNote] = useState('')
  const [activePianoNotes, setActivePianoNotes] = useState({})
  const [noteHovered, setNoteHovered] = useState('')
  const [partials, setPartials] = useState(12)

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

  return (
    <>
      <Container>
        <Text height='5px'>
          {
            noteHovered &&
            `note: ${noteHovered}, cents: ${Math.round(activePianoNotes[noteHovered] * 100)}`
          }
        </Text>
      </Container>
      <KbContainer>
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
      </KbContainer>
      <Container>
        partials
      </Container>
      <SpecialContainer>
        <Button big fontBig onClick={() => partialsDown()}>-</Button>
        <FancyDiv>{partials}</FancyDiv>
        <Button big fontBig onClick={() => partialsUp()}>+</Button>
      </SpecialContainer>
    </>
  )
}

export default Overtones