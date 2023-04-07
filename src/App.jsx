import './App.css'

import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <>
      <p>This is a normal p jsx tag</p>
      <Header />
      <Main>
        <p style={{ color: 'red' }}>I am a child of the Main component</p>
      </Main>
      <Footer value={'Something else'} value2={'second value'} />
    </>
  )
}

export default App
