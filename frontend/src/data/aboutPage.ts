import { signupFormUrl, speakerFormUrl } from './links'
import { getStackImagesByIds } from './photos'

export const aboutStats = [
    { value: '200+', label: 'mulheres na comunidade' },
    { value: '90+', label: 'atividades realizadas' },
    { value: '10+', label: 'projetos e iniciativas' },
] as const

export const aboutTimeline = [
    {
        year: '2015',
        title: 'PyLadies Floripa: estreia oficial',
        description:
            'Em dezembro de 2015 a PyLadies Floripa ganhou vida. O primeiro encontro de uma história incrível.',
    },
    {
        year: '2016',
        title: 'Fortalecendo os laços na ilha',
        description:
            'Criamos um espaço vivo de trocas, estudos práticos e acolhimento para mulheres na tecnologia, fortalecidas com a parceria do movimento Anitas.',
    },
    {
        year: '2017',
        title: 'Comunidade em expansão',
        description:
            'Tivemos a alegria de apoiar o surgimento do capítulo PyLadies Blumenau, impulsionando a presença feminina na TI além das nossas fronteiras.',
    },
    {
        year: '2019',
        title: '1° PyCinema Pyladies Floripa',
        description:
            'Levamos nossas conversas sobre tecnologia, cinema e protagonismo feminino para fora das telas. Unimos pipoca, debate profundo e comunidade no nosso primeiro PyCinema.',
    },
    {
        year: '2022',
        title: 'Retomada e reconexão',
        description:
            'De um pybr de Manaus, uma troca de ideias somada a atitude de algumas pyladies, retomam e agitam as atividades da comunidade',
    },
    {
        year: '2024',
        title: 'Um ano de encontros e impacto',
        description:
            'Mais de 90 encontros realizados, com workshops, palestras, confraternizações e participação ativa em eventos da comunidade tech.',
    },
    {
        year: '2025',
        title: 'Escola PyLadies Floripa',
        description:
            'Seleção no programa #ChamaAsMina da LINUXtips abre caminho para trilhas em Python, Linux, Docker, AWS e formação técnica contínua.',
    },
    {
        year: '2026',
        title: 'Juntas na Python Brasil',
        description:
            'Mobilização e campanha de arrecadação que garantiu ingressos para que mulheres da nossa comunidade pudessem participar da Python Brasil, fortalecendo e impulsionando a presença feminina na tecnologia.',
    },
] as const

export const aboutPillars = [
    {
        title: 'Missão',
        description:
            'Empoderar mulheres por meio da tecnologia, do compartilhamento de conhecimento e de espaços seguros para aprender e liderar.',
    },
    {
        title: 'Visão',
        description:
            'Ser referência em formação e acolhimento de mulheres em programação em Florianópolis e região.',
    },
    {
        title: 'Valores',
        description:
            'Diversidade, sororidade, educação aberta, acessibilidade e protagonismo feminino guiam cada decisão e cada encontro.',
    },
] as const

export const joinPaths = [
    {
        title: 'Entre para a comunidade',
        description:
            'Receba novidades, participe dos grupos e conheça outras mulheres que estão aprendendo e trabalhando com tecnologia.',
        href: signupFormUrl,
        external: true,
        cta: 'Entrar na lista da comunidade',
    },
    {
        title: 'Proponha uma palestra',
        description:
            'Tem uma experiência para compartilhar? A gente adora receber novas palestrantes.',
        href: speakerFormUrl,
        external: true,
        cta: 'Quero palestrar',
    },
    //   {
    //     title: 'Participe dos eventos',
    //     description:
    //       'Workshops, meetups e encontros acontecem ao longo do ano. Confira a agenda.',
    //     href: '/eventos',
    //     external: false,
    //     cta: 'Ver eventos',
    //   },
    {
        title: 'Colabore com projetos',
        description:
            'PyBook, inclusão digital, open source e outros projetos. Confira a agenda e participe.',
        href: '/eventos',
        external: false,
        cta: 'Ver projetos e eventos',
    },
] as const

export const aboutProjects = [
    {
        name: 'PyBook',
        description: 'Clube do livro técnico com leituras em grupo e discussões sobre carreira e tecnologia.',
        tag: 'Comunidade',
    },
    {
        name: 'Escola PyLadies',
        description: 'Trilhas de formação em Python, Linux, Docker e cloud com apoio do programa #ChamaAsMina.',
        tag: 'Formação',
    },
    {
        name: 'Inclusão Digital',
        description: 'Ações para ampliar acesso e oportunidades para mulheres na tecnologia.',
        tag: 'Impacto',
    },
    {
        name: 'Open Source',
        description: 'Contribuições em projetos abertos para mulheres que querem colaborar com código.',
        tag: 'Prática',
    },
    {
        name: 'Curso Básico de Python',
        description: 'Turmas introdutórias para mulheres que estão começando do zero, com ritmo acolhedor e mão na massa.',
        tag: 'Iniciantes',
    },
    {
        name: 'Workshop Semanal',
        description: 'Encontros recorrentes com temas de programação, carreira e mercado de trabalho.',
        tag: 'Recorrente',
    },
] as const

export const aboutGalleryPhotos = getStackImagesByIds([
    'festa-junina',
    'grupo-externo-coelhinha',
    'grupo-cafe-mesa',
    'grupo-escultura-externo',
    'grupo-janelas-crianca',
    'grupo-bleachers-selfie',
])
