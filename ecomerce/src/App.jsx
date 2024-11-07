import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import NavBar from "./components/NavBar/NavBar"

function App() {

  return (
    <>
      <h1>E-commerce</h1>
      <NavBar></NavBar>
      <hr />
      <ItemListContainer greeting="Bienvenido a mi e-comerce"/>
    </>
  )
}

export default App