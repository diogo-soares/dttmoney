import Modal from 'react-modal';
import closeImg from '../../assets/Vector.svg';
import { Container } from './styles'




interface newTransactionMOdalProps{
    isOpen: boolean;
    OnRequestClose: () => void;

}


export function NewTransactionModal({isOpen, OnRequestClose }: newTransactionMOdalProps){
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

               <Container>
                 <h2>Cadastrar Transacao</h2>

                <input 
                 placeholder="Titulo"
                />
                
                <input type="number"
                 placeholder="Valor"  
                   />

                <input 
                 placeholder="Categoria"
                />   

                <button type="submit">
                   Cadastrar
                </button>



             </Container>
           </Modal>

    );
}