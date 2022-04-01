import { BlackLine } from "../../object/Line"
import { SubTitle, SubTitleH3 } from "../../object/SubTitle"
import BonusCard from "./BonusCard"
import ModuleCard from "./ModuleCard"
import { BonusContent, CardGrid, Container } from "./styles"
import Button from '../../object/Button'

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

            <SubTitleH3 as="h3">Receba esses Bônus Incriveis:</SubTitleH3>
            <BlackLine />

            <BonusContent>
                {bonusCard.map(({ title, description }, index) => (
                    <li key={index}>
                        <BonusCard
                            title={title}
                            description={description}
                        />
                    </li>
                ))}
            </BonusContent>

            <Button>Eu quero Agora</Button>
        </Container>
    )
}

const moduleCard = [
    {
        title: "Modulo 1",
        subTitle: "apresentação/ conceito de organização / diferença de arrumar x organizar / 5 passos para organizar",
        description: ""
    },
    {
        title: "Modulo 2",
        subTitle: "Sala",
        description: "como deixar bem organizada e funcional"
    },
    {
        title: "Modulo 3",
        subTitle: "Cozinha",
        description: "introdução, organização de cada parte  do ambiente e da geladeira"
    },
    {
        title: "Modulo 4",
        subTitle: "Lavanderia",
        description: "conhecendo os produtos, espaços e formas de organizar"
    },
    {
        title: "Modulo 5",
        subTitle: "Roupas e Calçados",
        description: "o que dobrar, o que pendurar, como dobrar cada tipo de roupa e seus organizadores"
    },
    {
        title: "Modulo 6",
        subTitle: "Banheiro",
        description: "organização dos produtos de higiene, formas de organização"
    },
    {
        title: "Modulo 7",
        subTitle: "Acessórios e Maquiagens",
        description: "maneiras de organizar os acessórios de cabelo, cintos, bijuterias e maquiagens"
    },
    {
        title: "Modulo 8",
        subTitle: "Rouparia",
        description: "organização de lençol, toalhas de banho, rosto e cobertores"
    },
    {
        title: "Modulo 9",
        subTitle: "Escritório",
        description: "como organizar a papelaria, objetos e fios"
    },
    {
        title: "Modulo 10",
        subTitle: "Brinquedos",
        description: "passo a passo da organização dos brinquedos e idéias de produtos organizadores"
    },
    {
        title: "Modulo 11",
        subTitle: "Produtos Organizadores",
        description: "conhecendo os produtos organizadores e suas formas de usar"
    },
    {
        title: "Modulo 12",
        subTitle: "Gabaritos para Roupas",
        description: "conheça os tamanhos e medidas para os molde de dobras de roupas"
    },
]

const bonusCard = [
    {
        title: "Dicas de Decoração para a casa",
        description: "com Mariane Dalpizzol - Designer de interiores"
    },
    {
        title: "Manipulação de Alimentos",
        description: "com Camila Bataglini - Nutricionista"
    },
    {
        title: "Estilo e Imagem Pessoal",
        description: "com Karen Arceni - Consultora de imagem e estilo"
    },
    {
        title: "Auto maquiagem",
        description: "com Lorena Navalli - Maquiadora"
    },
]