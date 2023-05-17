import * as Dialog from '@radix-ui/react-dialog';
import './styles.scss';

import logoImg from '../../assets/logo-dtMoney.svg'
import { NewTransactionModal } from '../NewTranactionModal';

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <img src={logoImg} alt="" />

        <Dialog.Root>
          <Dialog.Trigger asChild>
            <button className='btn'>Nova transação</button>
          </Dialog.Trigger>

          <NewTransactionModal />
        </Dialog.Root>
      </div>
    </header>
  )
}
