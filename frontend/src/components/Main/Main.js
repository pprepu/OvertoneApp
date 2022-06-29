import React from 'react'
import Overtones from '../Overtones'
import {
  SubPage,
  Text,
} from '../../globalStyles'
import { TextContainer } from './Main.elements'

const Main = () => {
  return (
    <SubPage>
      <TextContainer>
        <Text>
            Pressing a key on the piano creates the harmonic series from that note.
            The partials of this series will be shown on the keyboard with different colors
            expressing differing levels of distance between the actual note in the harmonic series and the note
            shown on the piano. Lighter colors mean smaller, even imperceptible deviations, while darker colors mean
            noticeable, dissonant sounding differences if those notes would be played together.
        </Text>
      </TextContainer>
      <Overtones />
    </SubPage>
  )
}

export default Main