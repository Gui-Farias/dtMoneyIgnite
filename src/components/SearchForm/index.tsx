import { MagnifyingGlass } from "phosphor-react";
import'./styles.scss';

export function SearchForm() {
  return (
    <div className="search-form">
      <input type="text" placeholder="Busque por transaçoes"/>

      <button type="submit">
        <MagnifyingGlass />
        Buscar
      </button>
    </div>
  )
}
