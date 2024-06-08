import { Container } from "./components/Container"
import { Header } from "./components/Header"

function App() {

  return (
    <>
      <Header />
      <Container>
        <div className="w-full flex justify-center items-center h-96 bg-blue-200">
          Hello
        </div>
        <div className="w-full flex justify-center items-center h-96 bg-blue-100">
          Hello
        </div>
        <div className="w-full flex justify-center items-center h-96 bg-blue-200">
          Hello
        </div>
        <div className="w-full flex justify-center items-center h-96 bg-blue-100">
          Hello
        </div>
      </Container>
    </>
  )
}

export default App
