import './styles.scss';

import logoImg from '../../assets/logo-dtMoney.svg'

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logoImg} alt="" />
        <button className='btn'>Nova tranasacao</button>
      </div>
    </header>
  )
}
