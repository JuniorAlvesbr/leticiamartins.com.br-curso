import styled from 'styled-components'

const Text = styled.p`
    font-weight: ${({ italic }) => italic ? '400' : '700'};
    font-style: ${({ italic }) => italic && 'italic'};
`

export default Text