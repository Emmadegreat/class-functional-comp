import './App.css'

import Count from './functionalComponent'
import ExampleClassComponen from './classcomponent'

function App() {

  return (
    <>
      <div>
        <h2>changing react class component to functional component</h2>
        <p>class componet</p>

        <ExampleClassComponen />

        <p>functional component</p>
        <Count /><br />
      </div>

    </>
  )
}

export default App
