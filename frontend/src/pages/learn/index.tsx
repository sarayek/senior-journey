import { FC, useId } from 'react'

import { Button, Card, CardActionArea, CardContent } from '@mui/material'
import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'

import bonnieDelaysToReduceTheSavingsSheNeedsSmImage from '../../../public/assets/bonnie-delays-to-reduce-the-savings-she-needs-sm.jpg'
import decidingWhenToStartYourPublicPensionsSmImage from '../../../public/assets/deciding-when-to-start-your-public-pensions-sm.jpg'
import fredDecidesWhenToTakeHisPensionsSmImage from '../../../public/assets/fred-decides-when-to-take-his-pensions-sm.jpg'
import goingFromWorkToRetirementSmImage from '../../../public/assets/going-from-work-to-retirement-sm.jpg'
import keithCombinesHisWorkWithHisPublicPensionsSmImage from '../../../public/assets/keith-combines-his-work-with-his-public-pensions-sm.jpg'
import learnBannerImage from '../../../public/assets/learn-banner.jpg'
import mainSourcesOfRetirementIncomeSmImage from '../../../public/assets/main-sources-of-retirement-income-sm.jpg'
import planningToSaveForRetirementSmImage from '../../../public/assets/planning-to-save-for-retirement-sm.jpg'
import rulesOfThumbForPublicPensionsSmImage from '../../../public/assets/rules-of-thumb-for-public-pensions-sm.jpg'
import { HeroBanner } from '../../components/HeroBanner'
import Layout from '../../components/Layout'
import { getDCTermsTitle } from '../../utils/seo-utils'

interface LearnCardProps {
  desciption: string
  href: string
  id: string
  imageSrc: StaticImageData
  minRead: number
  title: string
}

const LearnCard: FC<LearnCardProps> = ({ desciption, href, id, imageSrc, minRead, title }) => {
  const { t } = useTranslation('learn')
  const uniqueId = useId()
  return (
    <Card id={`${uniqueId}-card-${id}`} className="h-full hover:shadow-md hover:shadow-gray-400 duration-100">
      <CardActionArea component={Link} href={href} className="h-full" aria-describedby={`${uniqueId}-card-${id}-title`}>
        <div className="relative h-64 ">
          <Image
            alt=""
            className="object-cover"
            fill
            placeholder="blur"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            src={imageSrc}
          />
          <Image src="/assets/bottom-top.svg" width={34} height={360} className="absolute bottom-0 w-full" alt="" />
        </div>
        <CardContent className="mt-4 p-8">
          <p className="mb-4 font-display text-sm font-light tracking-widest">{t('min-read', { minRead })}</p>
          <h3 className="h4 my-4" id={`${uniqueId}-card-${id}-title`}>
            {title}
          </h3>
          <p className="m-0 text-black/60">{desciption}</p>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

interface LearnSectionProps {
  cards: ReadonlyArray<LearnCardProps>
  desciption: string
  id: string
  title: string
}

const LearnSection: FC<LearnSectionProps> = ({ cards, desciption, id, title }) => {
  const uniqueId = useId()
  return (
    <section id={`${uniqueId}-section-${id}`}>
      <h2 className="h2 h2-gutter text-primary-700">{title}</h2>
      <p className="mb-8">{desciption}</p>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {cards.map((cardProps) => (
          <LearnCard key={cardProps.id} {...cardProps} />
        ))}
      </div>
    </section>
  )
}

const Learn: FC = () => {
  const { t } = useTranslation('learn')

  const sections: ReadonlyArray<LearnSectionProps> = [
    {
      id: 'learn-about',
      title: t('sections.learn-about.title'),
      desciption: t('sections.learn-about.body'),
      cards: [
        {
          desciption: t(`sections.learn-about.cards.sources-of-income.body`),
          href: '/learn/main-sources-of-retirement-income',
          id: 'sources-of-income',
          imageSrc: mainSourcesOfRetirementIncomeSmImage,
          minRead: 15,
          title: t(`sections.learn-about.cards.sources-of-income.title`),
        },
        {
          desciption: t(`sections.learn-about.cards.planning-to-save.body`),
          href: '/learn/planning-to-save-for-retirement',
          id: 'planning-to-save',
          imageSrc: planningToSaveForRetirementSmImage,
          minRead: 5,
          title: t(`sections.learn-about.cards.planning-to-save.title`),
        },
      ],
    },
    {
      id: 'making-decisions',
      title: t('sections.making-decisions.title'),
      desciption: t('sections.making-decisions.body'),
      cards: [
        {
          desciption: t(`sections.making-decisions.cards.when-to-start.body`),
          href: '/learn/deciding-when-to-start-your-public-pensions',
          id: 'when-to-start',
          imageSrc: decidingWhenToStartYourPublicPensionsSmImage,
          minRead: 15,
          title: t(`sections.making-decisions.cards.when-to-start.title`),
        },
        {
          desciption: t(`sections.making-decisions.cards.from-work-to-retirement.body`),
          href: '/learn/going-from-work-to-retirement',
          id: 'from-work-to-retirement',
          imageSrc: goingFromWorkToRetirementSmImage,
          minRead: 10,
          title: t(`sections.making-decisions.cards.from-work-to-retirement.title`),
        },
        {
          desciption: t(`sections.making-decisions.cards.rules-of-thumb.body`),
          href: '/learn/rules-of-thumb-for-public-pensions',
          id: 'rules-of-thumb',
          imageSrc: rulesOfThumbForPublicPensionsSmImage,
          minRead: 9,
          title: t(`sections.making-decisions.cards.rules-of-thumb.title`),
        },
      ],
    },
    {
      id: 'stories',
      title: t('sections.stories.title'),
      desciption: t('sections.stories.body'),
      cards: [
        {
          desciption: t(`sections.stories.cards.fred.body`),
          href: '/learn/case-studies/fred',
          id: 'fred',
          imageSrc: fredDecidesWhenToTakeHisPensionsSmImage,
          minRead: 17,
          title: t(`sections.stories.cards.fred.title`),
        },
        {
          desciption: t(`sections.stories.cards.bonnie.body`),
          href: '/learn/case-studies/bonnie',
          id: 'bonnie',
          imageSrc: bonnieDelaysToReduceTheSavingsSheNeedsSmImage,
          minRead: 20,
          title: t(`sections.stories.cards.bonnie.title`),
        },
        {
          desciption: t(`sections.stories.cards.keith.body`),
          href: '/learn/case-studies/keith',
          id: 'keith',
          imageSrc: keithCombinesHisWorkWithHisPublicPensionsSmImage,
          minRead: 17,
          title: t(`sections.stories.cards.keith.title`),
        },
      ],
    },
  ]

  return (
    <>
      <NextSeo
        title={t('header')}
        description={t('meta.description')}
        additionalMetaTags={[getDCTermsTitle(t('header'))]}
      />
      <Layout
        breadcrumbItems={[
          {
            link: '/',
            text: t('common:application-name'),
          },
        ]}
      >
        <HeroBanner imageProps={{ className: 'md:object-right-bottom', src: learnBannerImage }}>
          <h1 className="h1 mb-2 text-primary-700 md:mb-4">{t('banner.title')}</h1>
          <p>{t('banner.text')}</p>
          <Button component={Link} id="quiz-dialog-link" size="large" href="/quiz" className="text-center">
            {t('banner.quiz')}
          </Button>
        </HeroBanner>
        {sections.map((sectionProps, index) => (
          <LearnSection key={sectionProps.id} {...sectionProps} />
        ))}
      </Layout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'default', ['common', 'learn'])),
    },
  }
}

export default Learn
