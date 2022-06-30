import { useState } from 'react'

import {
  FooterContainer,
  FooterElement,
  PopupText
} from './Footer.elements'

import { SubPage, Text } from '../../globalStyles'

const Footer = () => {
  const [showPopup, setShowPopup] = useState('')
  return (
    <SubPage>

      <PopupText onClick={() => setShowPopup('')} show={showPopup === 'what'} >
        <Text>
          The purpose of this application is to find overtones for a single note and calculate the distances of these overtones to
          actual notes found in an equal temperament tuning system.
        </Text>
      </PopupText>

      <PopupText onClick={() => setShowPopup('')} show={showPopup === 'how'} >
        <Text>
          This application was built with React, styled-components and GraphQL.
        </Text>
        <Text>
          More text, something more and finally a little bit more. There probably could be even more said about something else.
        </Text>
      </PopupText>

      <PopupText onClick={() => setShowPopup('')} show={showPopup === 'why'} >
        <Text>
          Why is the harmonic series emerging from a singular note interesting and potentially even valuable?
        </Text>
        <Text>
          First of all, connecting a note with its partials can be used to harmonize chords, which can be especially powerful in an
          orchestral setting, where it is possible to play instrumental sounds in vastly different registers. This provides an opportunity
          to choose voicings for a chord that consist of frequencies, that are actually found in the harmonic series when the basenote
          would be played.
        </Text>
        <Text>
          Thus, this application can be used as a compositional tool to help harmonizing songs in a way, that takes the interconnected
          nature of chordal notes into account.
        </Text>
      </PopupText>

      <FooterContainer>
        <FooterElement onClick={showPopup !== 'what' ? () => setShowPopup('what') : () => setShowPopup('')}>
          What
        </FooterElement>
        <FooterElement onClick={showPopup !== 'how' ? () => setShowPopup('how') : () => setShowPopup('')}>
          How
        </FooterElement>
        <FooterElement onClick={showPopup !== 'why' ? () => setShowPopup('why') : () => setShowPopup('')}>
          Why
        </FooterElement>
      </FooterContainer>
    </SubPage>
  )
}

export default Footer