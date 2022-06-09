import { BlackLine } from "../../object/Line"
import { SubTitle, SubTitleH3 } from "../../object/SubTitle"
import BonusCard from "./BonusCard"
import ModuleCard from "./ModuleCard"
import { BonusContent, CardGrid, Container } from "./styles"
import Button from '../../object/Button'

const moduleCard = [
    {
        title: "Módulo 1",
        subTitle: "apresentação/ conceito de organização / diferença de arrumar x organizar / 5 passos para organizar",
        description: ""
    },
    {
        title: "Módulo 2",
        subTitle: "Sala",
        description: "como deixar bem organizada e funcional"
    },
    {
        title: "Módulo 3",
        subTitle: "Cozinha",
        description: "introdução, organização de cada parte  do ambiente e da geladeira"
    },
    {
        title: "Módulo 4",
        subTitle: "Lavanderia",
        description: "conhecendo os produtos, espaços e formas de organizar"
    },
    {
        title: "Módulo 5",
        subTitle: "Roupas e Calçados",
        description: "o que dobrar, o que pendurar, como dobrar cada tipo de roupa e seus organizadores"
    },
    {
        title: "Módulo 6",
        subTitle: "Banheiro",
        description: "organização dos produtos de higiene, formas de organização"
    },
    {
        title: "Módulo 7",
        subTitle: "Acessórios e Maquiagens",
        description: "maneiras de organizar os acessórios de cabelo, cintos, bijuterias e maquiagens"
    },
    {
        title: "Módulo 8",
        subTitle: "Rouparia",
        description: "organização de lençol, toalhas de banho, rosto e cobertores"
    },
    {
        title: "Módulo 9",
        subTitle: "Escritório",
        description: "como organizar a papelaria, objetos e fios"
    },
    {
        title: "Módulo 10",
        subTitle: "Brinquedos",
        description: "passo a passo da organização dos brinquedos e idéias de produtos organizadores"
    },
    {
        title: "Módulo 11",
        subTitle: "Produtos Organizadores",
        description: "conhecendo os produtos organizadores e suas formas de usar"
    },
    {
        title: "Módulo 12",
        subTitle: "Molde para Roupas",
        description: "conheça os tamanhos e medidas para os moldes de dobras de roupas"
    },
]

const bonusCard = [
    {
        title: "Planejamento e Organização Alimentar",
        description: "com Camila Bataglini - Nutricionista",
        image: "/images/camila.jpg",
        alt: "Nutricionista Camila Bataglini"
    },
    {
        title: "Estilo e Imagem Pessoal",
        description: "com Juliana Meneguetti - Consultora de imagem e estilo",
        image: "/images/juliana.jpg",
        alt: "Consultora de Imagem Juliana Meneguetti"
    },
    {
        title: "Automaquiagem",
        description: "com Lorena Ravalli - Maquiadora profissional",
        image: "/images/lorena.jpg",
        alt: "Maquiadora Lorena Ravalli"
    },
]

export default function CourseContent() {
    return (
        <Container>
            <SubTitle>O que você vai ver no curso:</SubTitle>
            <BlackLine />

            <CardGrid>
                {moduleCard.map(({ title, subTitle, description }, index) => (
                    <li key={index}>
                        <ModuleCard
                            title={title}
                            subTitle={subTitle}
                            description={description}
                        />
                    </li>
                )
                )}
            </CardGrid>

            <SubTitleH3 as="h3">Receba esses Bônus Incríveis:</SubTitleH3>
            <BlackLine />

            <BonusContent>
                {bonusCard.map(({ title, description, image, alt }, index) => (
                    <li key={index}>
                        <BonusCard
                            title={title}
                            description={description}
                            image={image}
                            alt={alt}
                        />
                    </li>
                ))}
            </BonusContent>

            <Button>Eu quero Agora</Button>
        </Container>
    )
}

