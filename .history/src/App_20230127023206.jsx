import { useEffect, useState } from 'react'

function App() {
  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(() => {
    fetch(`${API_URL}assets`)
      .then((response) => response.json())
      .then((data) => {
        setCriptos(data.data)
      })
      .catch(() => {
        console.error('La peticion fallo')
      })
  }, [])

  if(!criptos) return <span>Cargando...</span>

  return (
    <>
      <h1>Lista de Criptomonedas</h1>
      <ol>
        {criptos.map(({name, priceUsd}) => (
          <li>Nombre: {name} - Precio: {priceUsd}</li>
        ))}
      </ol>
    </>
  )
}

export default App
