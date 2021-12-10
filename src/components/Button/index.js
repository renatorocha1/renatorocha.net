import React from "react"

import SButton from "./styled"

const Button = ({ children, ...rest }) => {
  return <SButton {...rest}>{children}</SButton>
}

export default Button
