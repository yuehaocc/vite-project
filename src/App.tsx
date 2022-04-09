import { useState } from 'react'
import Header from './components/Header'
import StyledComponent from './components/StyledComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <StyledComponent />
    </div>
  )
}

export default App
