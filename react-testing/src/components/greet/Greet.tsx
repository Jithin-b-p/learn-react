import { GreetProps } from './Greet.types'

const Greet = ({ name }: GreetProps) => {
  return <div>Hello, {name}</div>
}

export default Greet
