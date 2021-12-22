import { ButtonHTMLAttributes } from "react"

import { ButtonComponent } from './styles'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>

export const Button = (props : ButtonProps) => {
  return <ButtonComponent {...props}></ButtonComponent>
}
