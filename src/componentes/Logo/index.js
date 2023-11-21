import logo from "../../imagens/logo.png"
import styled from "styled-components"

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`
const LogoImagem = styled.img`
    margin-right: 10px;
    padding: 0 5px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImagem 
                src={logo}
                alt="logo"
                className="logo-img"
            ></LogoImagem>
            <p><strong>ETHEREUM</strong> Asset</p>
        </LogoContainer>
    )
}

export default Logo