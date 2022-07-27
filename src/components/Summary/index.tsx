import incomeImg from '../../assets/receita.svg'
import outcomeImg from '../../assets/despesa.svg'
import totalImg from '../../assets/carteira.svg'


import { Container } from "./styles";

export function Summary () {
    return (
        <Container>
            <div>
                <header>
                    <p>Receita</p>
                    <img src={incomeImg} alt="" />
                </header>
                <strong>R$1000,<span>00</span></strong>
            </div>

            <div>
                <header>
                    <p>Despesas</p>
                    <img src={outcomeImg} alt="" />
                </header>
                <strong>R$250,<span>00</span></strong>
            </div>

            <div className='highlight-background'>
                <header>
                    <p>Entradas</p>
                    <img src={totalImg} alt="" />
                </header>
                <strong>R$750,<span>00</span></strong>
            </div>

        </Container>
    )
}