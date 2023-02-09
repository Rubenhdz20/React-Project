import { Link } from 'react-router-dom'
import './Cripto.css'

const Cripto = ({id, name, priceUSD, symbol, changePercent24Hr}) => {
  return(
    <div className='cripto'>
      <h2>{name}</h2>
      <div className="info">
        <p><span className="label">Precio: </span>${parseFloat(priceUSD).toFixed(3)}</p>
        <p><span className="label">Codigo: </span>{symbol}</p>
        <p>
          <span className="label">Variacion 24hrs: </span>
          <span className={parseFloat(changePercent24Hr) > 0 ? 'positivo' : 'negativo'}>
            {parseFloat(changePercent24Hr).toFixed(3)}%
          </span>
        </p>
        <Link to={`/criptomonedas/${id}`}>Ver detalles</Link>
      </div>
    </div>
  )
}

export default Cripto