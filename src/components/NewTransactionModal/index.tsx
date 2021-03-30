import { FormEvent, useState } from 'react';
import Modal from 'react-modal';
import closeImg from '../../assets/Vector.svg';
import incomeImg from '../../assets/Entradas.svg'
import outcomeImg from '../../assets/Saidas.svg';

import { api } from '../services/api';

import { Container, TransactionTypeContainer, RadioBox } from './styles'






interface newTransactionMOdalProps{
    isOpen: boolean;
    OnRequestClose: () => void;

}


export function NewTransactionModal({isOpen, OnRequestClose }: newTransactionMOdalProps){
  
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [categoty, setCategoty] = useState('');

  const [type, setType] = useState('deposit');
  
function handCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

   const data={
      title,
      value,
      categoty,
      type,

    };

    api.post('/transactions', data)
}
  
  return (
       
        <Modal 
           isOpen={isOpen} 
           onRequestClose ={OnRequestClose}
           overlayClassName="react-modal-overlay"
           className="react-modal-content"
          >

           <button 
             type="button" 
             onClick={OnRequestClose} 
             className="react-modal-close"
            >
          <img src={closeImg} alt="Fechar Modal"/>
           </button>

               <Container onSubmit={handCreateNewTransaction}>
                 <h2>Cadastrar Transacao</h2>

                <input 
                 placeholder="Titulo"
                 value={title}
                 onChange={event => setTitle(event.target.value)}
                />
                
                <input type="number"
                 placeholder="Valor" 
                 value={value}
                 onChange={event => setValue(Number(event.target.value))} 
                   />

                <TransactionTypeContainer>
                     <RadioBox
                      type="button"
                      onClick={() => {setType('deposit'); }} 
                      isActive={type === 'deposit'}
                      activeColor="green"
                      >
                      
                        <img src={incomeImg} alt="Entrada"/>
                        <span>Entrada</span>
                     </RadioBox>

                     <RadioBox
                      type="button" 
                      onClick={() => {setType('withdraw'); }} 
                      isActive={type === 'withdraw'}
                      activeColor="red"
                      >
                        <img src={outcomeImg} alt="Saida"/>
                        <span>Saida</span>
                     </RadioBox>

                </TransactionTypeContainer>
 

                <input 
                 placeholder="Categoria"
                 value={categoty}
                 onChange={event => setCategoty(event.target.value)}
                />   

                <button type="submit">
                   Cadastrar
                </button>



             </Container>
           </Modal>

    );
}