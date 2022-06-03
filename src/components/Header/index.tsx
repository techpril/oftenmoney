import { useState } from 'react'
import Modal from 'react-modal'
import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

export function Header() {

    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        setIsNewTransactionModalOpen(false);
    }

    return (
        <Container>
            <Content>
                <div className="align-div">
                    <img src={logoImg} alt="oftenmoney" className="svg"/>
                    <h1 className="title_logo">OftenMoney</h1>
                </div>
                
                <button type="button" onClick={handleOpenNewTransactionModal}>
                    Nova transação
                </button>

                <Modal 
                    isOpen={isNewTransactionModalOpen}
                    onRequestClose={handleCloseNewTransactionModal}
                >
                    <h2>Cadastrar transação</h2>
                </Modal>
            </Content>
            
        </Container>
    )
}