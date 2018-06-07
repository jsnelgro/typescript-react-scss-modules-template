import * as React from 'react'
import { render } from 'react-dom'

// custom components
import Button from './components/Button/Button'


const App = () => (
  <div>
    <Button>Click me</Button>
  </div>
)
render(<App />, document.getElementById('root'))
