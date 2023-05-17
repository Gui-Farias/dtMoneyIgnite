import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

import './styles.scss';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';


export function NewTransactionModal() {
  return (
    <Dialog.Portal className='dialog'>
      <Dialog.Overlay className='dialog__overlay'/>
      <Dialog.Content className='dialog__content'>
        <Dialog.Close className='dialog__close'> <X size={24}/> </Dialog.Close>
        <Dialog.Title>Nova transação</Dialog.Title>
        <form action="" className='dialog__form'>
          <input type="text" placeholder='Descricao' required/>
          <input type="text" placeholder='Preço' required/>
          <input type="text" placeholder='Categoria' required/>

          <RadioGroup.Root className="dialog__type">
            <RadioGroup.Item  className="btn-input" value='input'>
              <ArrowCircleUp size={24}/> Entrada
            </RadioGroup.Item>
            <RadioGroup.Item  className="btn-output" value='output'>
              <ArrowCircleDown size={24}/> Saida
            </RadioGroup.Item>
          </RadioGroup.Root>

          <button type="submit">Cadastrar</button>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  )
}
