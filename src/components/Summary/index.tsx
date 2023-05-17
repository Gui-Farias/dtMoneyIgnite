import './styles.scss';
import { ArrowCircleUp, ArrowCircleDown ,CurrencyDollar } from 'phosphor-react'

export function Summary() {
  return (
    <section className="summary">
      <div className="container">
        <div className="summary__box">
          <header>
            <span>Entradas</span>
            <ArrowCircleUp size={32} color='#00b37e' />
          </header>
          <strong>
            R$ 17.400,00
          </strong>
        </div>
        <div className="summary__box">
          <header>
            <span>Saidas</span>
            <ArrowCircleDown size={32} color='#f75a68' />
          </header>
          <strong>
            R$ 1.259,00
          </strong>
        </div>
        <div className="summary__box">
          <header>
            <span>Total</span>
            <CurrencyDollar size={32} color='#FFFFFF' />
          </header>
          <strong>
            R$ 16.141,00
          </strong>
        </div>
      </div>
    </section>
  )
}
