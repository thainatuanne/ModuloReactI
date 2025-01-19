import { SectionStyled } from '../components/Section/SectionStyled'
import { Description } from '../components/Title/Description'
import { Image } from '../components/Image/ImageStyled'
import imageMenu from '../assets/menu.jpg'

const About: React.FC = () => {
    return (
        <SectionStyled>
            <div>
                <h2>Sobre nós</h2>
                <Description>
                    A Flow CasaCoffeColab é mais do que apenas uma cafeteria. Somos um espaço
                    colaborativo onde a paixão pelo café e pela criatividade se encontram.
                </Description>
                <Description>
                    Nosso objetivo é oferecer um ambiente acolhedor, com cafés artesanais de alta
                    qualidade e um espaço inspirador para criar, trabalhar e socializar.
                </Description>
            </div>

            <div>
                <h3>O que oferecemos</h3>

                <ul>
                    <li>Cafés artesanais com grãos selecionados.</li>
                    <li>Espaços colaborativos para freelancers e equipes.</li>
                    <li>Workshops e eventos para mentes criativas.</li>
                    <li>Wi-fi de alta velocidade e tomadas individuais.</li>
                </ul>
            </div>

            <div>
                <h3>Nosso Cardápio</h3>
                <Description>
                    Explore o melhor do nosso menu com opções de cafés, lanches e sobremesas
                    artesanais. Sinta-se à vontade para saborear enquanto trabalha ou relaxa.
                </Description>
            </div>

            <Image src={imageMenu} alt="Cardápio da cafeteria" />
        </SectionStyled>
    )
}

export default About
