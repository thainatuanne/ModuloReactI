import imageHome from '../assets/imageHome.jpeg'
import { Description } from '../components/Title/Description'
import { Image } from '../components/Image/ImageStyled'
import { SectionStyled } from '../components/Section/SectionStyled'

const Home: React.FC = () => {
    return (
        <main>
            <SectionStyled>
                <div>
                    <h1>Flow CasaCoffeColab</h1>
                    <Description>
                        Bem-vindo ao Flow CasaCoffeColab, um espaço onde paixão por café e
                        criatividade se encontram.
                    </Description>
                    <Description>
                        Aqui, você pode saborear cafés artesanais, colaborar com mentes criativas e
                        aproveitar um ambiente único que inspira produtividade e inovação.
                    </Description>
                </div>

                <Image src={imageHome} alt="Ambiente colaborativo cafeteria" />
            </SectionStyled>
        </main>
    )
}

export default Home
