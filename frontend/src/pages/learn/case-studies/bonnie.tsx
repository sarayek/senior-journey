import { FC } from 'react'

import { GetServerSideProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'

import { LearnPageLayout } from '../../../components/LearnPageLayout'
import { getDCTermsTitle } from '../../../utils/seo-utils'

const Bonnie: FC = () => {
  const { t, i18n } = useTranslation('learn/case-studies/bonnie')
  const en = i18n.getFixedT('en', 'learn/case-studies/bonnie')
  const fr = i18n.getFixedT('fr', 'learn/case-studies/bonnie')

  return (
    <>
      <NextSeo title={t('header')} additionalMetaTags={[getDCTermsTitle(en('header'), fr('header'))]} />
      <LearnPageLayout header={t('header')} breadcrumbItems={[]}>
        Content here
      </LearnPageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'default', ['common', 'learn/case-studies/bonnie'], null, [
        'en',
        'fr',
      ])),
    },
  }
}

export default Bonnie