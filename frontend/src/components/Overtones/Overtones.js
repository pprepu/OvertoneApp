import { useState } from 'react'
import overtoneService from '../../services/overtones'

import {
  Container,
  Text,
  Button
} from '../../globalStyles'

import { StyledInput } from './Overtones.elements'

const Overtones = () => {

  const [note, setNote] = useState('')

  const handleNoteChange = event => {
    setNote(event.target.value)
  }

  const doButtonStuff = () => {
    console.log(overtoneService.calculateFrequencies(100))
    console.log(overtoneService.calculateFrequencies(50, 10))
    console.log(overtoneService.calculateFrequencies(16.35, 8))
  }

  const doButtonStuff2 = () => {
    overtoneService.testAction()
  }
  return (
    <Container>
      <StyledInput value={note} onChange={handleNoteChange}/>
      <Text>current note: {note}</Text>
      <Button onClick={() => doButtonStuff()}>test</Button>
      <Button onClick={() => doButtonStuff2()}>test2</Button>
    </Container>
  )
}

export default Overtones