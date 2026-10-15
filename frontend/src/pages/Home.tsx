import { useMemo } from 'react'
import About from '../components/About'
import Activities from '../components/Activities'
import Hero from '../components/Hero'
import Impact from '../components/Impact'
import JsonLd from '../components/JsonLd'
import PageLayout from '../components/PageLayout'
import Partners from '../components/Partners'
import { socialLinks } from '../data/socialLinks'
import { usePageSeo } from '../lib/seo'
import { DEFAULT_DESCRIPTION } from '../lib/site'
import { buildHomeStructuredData } from '../lib/structuredData'

export default function Home() {
    usePageSeo({
        title: 'Comunidade de Python para mulheres em Florianópolis',
        description: DEFAULT_DESCRIPTION,
        path: '/',
    })

    const structuredData = useMemo(
        () => buildHomeStructuredData(
            DEFAULT_DESCRIPTION,
            socialLinks.map((link) => link.href),
        ),
        [],
    )

    return (
        <>
            <JsonLd id="home" data={structuredData} />
            <PageLayout withGlows>
                <Hero />
                {/* <Events /> */}
                <About />
                <Activities />
                <Impact />
                <Partners />
            </PageLayout>
        </>
    )
}
