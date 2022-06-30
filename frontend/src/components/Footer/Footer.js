import { useState } from 'react'

import {
  FooterContainer,
  FooterElement,
  PopupText
} from './Footer.elements'

import { SubPage, TextParagraph, Link } from '../../globalStyles'

const Footer = () => {
  const [showPopup, setShowPopup] = useState('')
  return (
    <SubPage>

      <PopupText onClick={() => setShowPopup('')} show={showPopup === 'what'} >
        <TextParagraph>
          The purpose of this application is to find overtones emerging from a single note and calculate the distances of these overtones to
          actual notes found in an equal temperament tuning system.
        </TextParagraph>
        <TextParagraph>
          For further information about why the emerging overtones aren't landing neatly on existing notes found on the chosen tuning system
          I recommend reading this short explanation <Link href="https://en.wikipedia.org/wiki/Harmonic_series_(music)#Harmonics_and_tuning" target="_blank">in Wikipedia</Link>
        </TextParagraph>
      </PopupText>

      <PopupText onClick={() => setShowPopup('')} show={showPopup === 'how'} >
        <TextParagraph>
          The backend for this app was built with Node.js using Apollo-Server to create a GraphQL API.
          The database of users is a MongoDB database managed with Mongoose, an ODM library for Node.js
          (and MongoDB). Also, user administration is implemented with tools, such as bcrypt for password
          security management and JSON web tokens for token based authentication.
        </TextParagraph>
        <TextParagraph>
          The frontend was built with the React-library using hooks to control the component states.
          Communication with the backend is established with the Apollo-client. Styles were implemented
          using the Styled-components library built for creating component level styling.
        </TextParagraph>
        <TextParagraph>
          More information about the technologies and the codebase can be found on <Link href="https://github.com/pprepu/OvertoneApp" target="_blank">the github repository.</Link>
        </TextParagraph>
      </PopupText>

      <PopupText onClick={() => setShowPopup('')} show={showPopup === 'why'} >
        <TextParagraph>
          Why is the harmonic series emerging from a singular note interesting and how can exploring it be valuable?
        </TextParagraph>
        <TextParagraph>
          Connecting a note with its partials can be used to harmonize chords, which can be especially powerful in an
          orchestral setting, where it is possible to play instrumental sounds in vastly different registers. This provides an opportunity
          to choose voicings for a chord that consist of frequencies, that are actually found in the harmonic series when the basenote
          would be played.
        </TextParagraph>
        <TextParagraph>
          Thus, this application can be used as a compositional tool to help harmonizing songs in a way, that takes the interconnected
          nature of chordal notes into account. Also, analyzing existing music with the app can provide understanding about orchestration
          techniques or harmonic voicings in general.
        </TextParagraph>
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