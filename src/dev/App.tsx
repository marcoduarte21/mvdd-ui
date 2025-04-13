import { Button } from '../components/Button/Button'
import { Container } from '../components/Container/Container'

function App() {
  return (
    <Container>
      <Button onClick={() => alert('Button clicked!')}>Click Me!</Button>
    </Container>
  )
}

export default App
