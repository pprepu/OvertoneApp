import styled from 'styled-components'

import { Container } from '../../globalStyles'

export const StyledInput = styled.input`
  width: 100px;
  font-size: 18px;
  border-radius: 8px;
`

// Responsive Sizing
// (currently optimized for horizontal scaling)
// const $keyboard_Width =  80
// const $keyboard_Height = $keyboard_Width * 0.18
// const $border_Width =    $keyboard_Width * 0.0015
// const $whiteKey_Count =  8
// const $whiteKey_Height = $keyboard_Height
// const $whiteKey_Width = $keyboard_Width / $whiteKey_Count
// const $blackKey_Height = $whiteKey_Height * 0.55
// const $blackKey_Width =  $whiteKey_Width  * 0.55
// const $blackKey_Offset = -($blackKey_Width / 2) - $border_Width

// const $whiteKey_Color = '#CBCBCB'
// const $blackKey_Color = '#222222'
// const $blackKey_BorderColor = '#000000'
// const $whiteKey_BorderColor = '#AAAAAA'

export const KbContainer = styled(Container)`
	background-color: black;
	width: 100%;
	height: 5em;
	display: flex;
	justify-content: center;
	margin-bottom: 30px;
	margin-top: 60px;
`

const offsetKeys = ['a', 'b', 'd', 'e', 'g']

const distanceToColor = dist => {
  const absoluteDist = Math.abs(dist)

  if (absoluteDist > 0.45) {
    return 'red'
  }

  if (absoluteDist > 0.3) {
    return '#000080'
  }

  if (absoluteDist > 0.15) {
    return '#0000CD'
  }

  if (absoluteDist > 0.1) {
    return '#4169E1'
  }

  if (absoluteDist > 0.05) {
    return '#1E90FF'
  }

  return '#ADD8E6'

}

export const SpecialContainer = styled(Container)`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
`

export const FancyDiv = styled.div`
  font-size: 1em;
	width: 100px;
`

export const White = styled.div`
  float: left;
	position: relative;
  height: 4em;
	width: 1em;
	z-index: 1;
	border-top: 1px solid #AAAAAA;
	border-bottom: 1px solid #AAAAAA;
	border-left: 1px solid #AAAAAA;
	background-color: ${props => props.distanceFromNote !== undefined ? distanceToColor(props.distanceFromNote) : '#F8F8F8'};
  margin: ${props => offsetKeys.includes(props.keyName) ? '0 0 0 -0.25em' : ''};

	&:hover {
		border: 1px solid #000000;
	}

`
export const Black = styled.div`
  float: left;
	position: relative;
  height: 2em;
	width: 0.5em;
	z-index: 2;
	border: 1px solid #000000;
	background-color: ${props => props.distanceFromNote !== undefined ? distanceToColor(props.distanceFromNote) : '#222222'};
  margin: 0 0 0 -0.25em;

	&:hover {
		border: 1px solid #AAAAAA;
	}
`
/* .a, .b, .d, .e, .g, .black{
	margin: 0 0 0 $blackKey_Offset;
}

#keyboard > .note:last-child{
	border-right: $border_Width solid $whiteKey_BorderColor;
} */
