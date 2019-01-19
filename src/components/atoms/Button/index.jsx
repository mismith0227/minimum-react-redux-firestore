import React, { type Node } from 'react'
import styled from 'styled-components'

type Props = {
  onClick?: Function,
  children: Node,
}

const ButtonInner = styled.button`
  background: #55c500;
  color: #fff;
  font-size: 16px;
  height: 60px;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`

const Button = ({ onClick, children }: Props) => (
  <ButtonInner onClick={onClick}>{children}</ButtonInner>
)

export default Button
