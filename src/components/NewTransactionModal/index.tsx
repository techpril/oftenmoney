import Modal from 'react-modal';
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg'
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button type='button' className="react-modal-close" onClick={onRequestClose}>
                <img src={closeImg} alt="" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder='Título'/>
                <input type="number" placeholder='Valor'/>

                <TransactionTypeContainer>
                    <button type='button'>
                        <img src={IncomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>

                    <button type='button'>
                        <img src={OutcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </button>

                </TransactionTypeContainer>

                <input type="text" placeholder='Categoria'/>

                <button type="submit">Cadastrar</button>


            </Container>
        </Modal>
    );
}