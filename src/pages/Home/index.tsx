import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Summary } from "../../components/Summary";
import './styles.scss'

export function Home() {
  return (
    <div>
      <Header />
      <Summary />

      <div className="container">
        <SearchForm />
        <table className="table">
          <tbody>
            <tr>
              <td width='40%'>Desenvolvimento de site</td>
              <td width='20%' className="income">R$ 12.000.000</td>
              <td width='20%'>Venda</td>
              <td width='20%'>13/04/2022</td>
            </tr>
            <tr>
              <td width='40%'>Hamburguer</td>
              <td width='20%' className="outcome">R$ 70,00</td>
              <td width='20%'>Alimentaçao</td>
              <td width='20%'>10/04/2022</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
