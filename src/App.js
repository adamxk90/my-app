import logo from './logo.svg'
import './App.css'
import { Container, Button, Alert, Card, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container>
        <Form>
          <Form.Group>
            <Form.Label>Email Adress</Form.Label>
            <Form.Control type="email" placeholder="Example@gmail.com" />
            <Form.Text className="text-muted">
              Enter your Email to get our newsletter
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control type="Password" placeholder="Password1234" />
            <Form.Text className="text-muted">
              Enter your password
            </Form.Text>
          </Form.Group>
          <Button type='submit'>Login</Button>
        </Form>

        <Card className="mb-3" style={{ color: '#000' }}>
          <Card.Img src="https://gomycodewebsite.blob.core.windows.net/website/img/black_Logo_342868e838_129748d4cd.svg" />
          <Card.Body>
            <Card.Title>Card Example</Card.Title>
            <Card.Text>This is an example of React bootstrap cards</Card.Text>
            <Button>Read More</Button>
          </Card.Body>
        </Card>
        </Container>

        <Alert variant="success">This is a button</Alert>
        <Button>Test</Button>
      </header>
    </div>
  )
}

export default App
