import logoImg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal} : HeaderProps) {
    return (
        <Container>
            <Content>
                <div className="align-div">
                    <img src={logoImg} alt="oftenmoney" className="svg"/>
                    <h1 className="title_logo">OftenMoney</h1>
                </div>
                
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>

            </Content>
            
        </Container>
    )
}