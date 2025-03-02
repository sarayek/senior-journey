import { FC, Fragment, useMemo } from 'react'

import { NavigateNext } from '@mui/icons-material'
import { List, ListItem, ListItemButton, ListItemText, Link as MuiLink, useMediaQuery } from '@mui/material'
import { GetServerSideProps } from 'next'
import { Trans, useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import AccessibilityGraphContainer from '../../../components/AccessibilityGraphContainer'
import AlertCard from '../../../components/AlertCard'
import { LearnPageLayout } from '../../../components/LearnPageLayout'
import theme from '../../../theme'
import { getDCTermsTitle } from '../../../utils/seo-utils'

const Fred: FC = () => {
  const { locale } = useRouter()
  const { t } = useTranslation('learn/case-studies/fred')

  const mobile = useMediaQuery(theme.breakpoints.down('sm'))

  function getImageSrc(imagePrefix: string, extension: string = 'png') {
    return `/assets/${imagePrefix}-${mobile ? 'mobile' : 'desktop'}-${locale ?? 'en'}.${extension}`
  }

  const learnMoreLinks = useMemo(
    () => [
      {
        href: '/learn/deciding-when-to-start-your-public-pensions',
        primary: t('learn-more.deciding-when-to-take-your-pensions.header'),
        secondary: t('learn-more.deciding-when-to-take-your-pensions.description'),
      },
      {
        href: '/learn/rules-of-thumb-for-public-pensions',
        primary: t('learn-more.rules-of-thumb-for-public-pensions.header'),
        secondary: t('learn-more.rules-of-thumb-for-public-pensions.description'),
      },
      {
        href: t('learn-more.oas.href'),
        primary: t('learn-more.oas.header'),
        secondary: t('learn-more.oas.description'),
      },
      {
        href: t('learn-more.cpp.href'),
        primary: t('learn-more.cpp.header'),
        secondary: t('learn-more.cpp.description'),
      },
    ],
    [t]
  )

  return (
    <>
      <NextSeo
        title={t('header')}
        description={t('meta.description')}
        additionalMetaTags={[getDCTermsTitle(t('header'))]}
      />
      <LearnPageLayout
        header={t('header')}
        breadcrumbItems={[
          {
            link: '/',
            text: t('common:application-name'),
          },
          {
            link: '/learn',
            text: t('breadcrumbs.learn'),
          },
        ]}
      >
        <h2 id="key-takeaways" className="h2 h2-gutter-bottom">
          {t('key-takeaways.heading')}
        </h2>
        <List disablePadding>
          {[
            {
              primary: t('key-takeaways.li1'),
              secondary: t('key-takeaways.li2'),
            },
            {
              primary: t('key-takeaways.li3'),
              secondary: t('key-takeaways.li4'),
            },
            {
              primary: t('key-takeaways.li5'),
              secondary: t('key-takeaways.li6'),
            },
            {
              primary: t('key-takeaways.li7'),
              secondary: t('key-takeaways.li8'),
            },
          ].map(({ primary, secondary }) => (
            <ListItem key={primary} className="border-b">
              <ListItemText
                primary={primary}
                primaryTypographyProps={{ className: 'font-medium text-xl font-display my-2' }}
                secondary={secondary}
                secondaryTypographyProps={{ className: 'text-base' }}
              />
            </ListItem>
          ))}
        </List>
        <AlertCard type="tip" className="mt-5">
          <Trans
            ns="learn/case-studies/fred"
            i18nKey="key-takeaways.smart-tip"
            components={{
              a1: <MuiLink href={t('key-takeaways.a1')} />,
              a2: <MuiLink href={t('key-takeaways.a2')} />,
            }}
          />
        </AlertCard>

        <h2 id="overview" className="h2 h2-gutter">
          {t('overview.heading')}
        </h2>
        <p>{t('overview.p1')}</p>
        <AlertCard type="tip" className="my-5">
          <Trans
            ns="learn/case-studies/fred"
            i18nKey="overview.smart-tip"
            components={{
              a1: <MuiLink href={t('overview.a1')} />,
              a2: <MuiLink href={t('overview.a2')} />,
            }}
          />
        </AlertCard>
        <p>{t('overview.p2')}</p>
        <p>
          <Trans
            ns="learn/case-studies/fred"
            i18nKey="overview.p3"
            components={{
              a3: <MuiLink href={t('overview.a3')} />,
              a4: <MuiLink href={t('overview.a4')} />,
            }}
          />
        </p>
        <p>{t('overview.p4')}</p>
        <p>{t('overview.p5')}</p>

        <h2 id="monthly-amounts" className="h2 h2-gutter">
          {t('monthly-amounts.heading')}
        </h2>
        <p>
          <Trans
            ns="learn/case-studies/fred"
            i18nKey="monthly-amounts.p1"
            components={{
              a1: <MuiLink href={t('monthly-amounts.a1')} />,
            }}
          />
        </p>
        <p>
          <Trans
            ns="learn/case-studies/fred"
            i18nKey="monthly-amounts.p2"
            components={{
              a2: <MuiLink href={t('monthly-amounts.a2')} />,
            }}
          />
        </p>

        <h2 id="fred-cpp" className="h2 h2-gutter">
          {t('cpp.heading')}
        </h2>
        <Image
          alt={t('cpp.monthly-pension.description')}
          src={getImageSrc('fred-cpp-monthly')}
          width={842}
          height={519}
          className="w-full"
        />
        <p className="mt-4 rounded-lg bg-gray-surface p-4">{t('cpp.monthly-pension.p1')}</p>
        <AccessibilityGraphContainer
          tableData={{
            caption: t('cpp.monthly-pension.accessibility.caption'),
            header: t('cpp.monthly-pension.accessibility.header', { returnObjects: true }),
            rows: t('cpp.monthly-pension.accessibility.rows', { returnObjects: true }),
          }}
          description={t('cpp.monthly-pension.description')}
          buttonLabel={t('cpp.monthly-pension.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <AlertCard type="tip" className="mb-5">
          <Trans ns="learn/case-studies/fred" i18nKey="cpp.smart-tip" />
        </AlertCard>
        <p>{t('cpp.monthly-pension.p2')}</p>
        <p>{t('cpp.monthly-pension.p3')}</p>
        <Image
          alt={t('cpp.lifetime-pension.description')}
          src={getImageSrc('fred-cpp-lifetime')}
          width={842}
          height={519}
          className="mb-5 mt-10 w-full"
        />
        <p className="mt-4 rounded-lg bg-gray-surface p-4">{t('cpp.lifetime-pension.p')}</p>
        <AccessibilityGraphContainer
          tableData={{
            caption: t('cpp.lifetime-pension.accessibility.caption'),
            header: t('cpp.lifetime-pension.accessibility.header', { returnObjects: true }),
            rows: t('cpp.lifetime-pension.accessibility.rows', { returnObjects: true }),
          }}
          description={t('cpp.lifetime-pension.description')}
          buttonLabel={t('cpp.lifetime-pension.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('cpp.p1')}</p>
        <p>{t('cpp.p2')}</p>
        <p>{t('cpp.p3')}</p>

        <h2 id="fred-oas" className="h2 h2-gutter">
          {t('oas.heading')}
        </h2>
        <Image
          alt={t('oas.monthly-pension.description')}
          src={getImageSrc('fred-oas-monthly')}
          width={842}
          height={519}
          className="w-full"
        />
        <p className="mt-4 rounded-lg bg-gray-surface p-4">{t('oas.monthly-pension.p')}</p>
        <AccessibilityGraphContainer
          tableData={{
            caption: t('oas.monthly-pension.accessibility.caption'),
            header: t('oas.monthly-pension.accessibility.header', { returnObjects: true }),
            rows: t('oas.monthly-pension.accessibility.rows', { returnObjects: true }),
          }}
          description={t('oas.monthly-pension.description')}
          buttonLabel={t('oas.monthly-pension.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('oas.lifetime-pension.p1')}</p>
        <Image
          alt={t('oas.lifetime-pension.description')}
          src={getImageSrc('fred-oas-lifetime')}
          width={842}
          height={519}
          className="mb-5 w-full"
        />
        <p className="mt-4 rounded-lg bg-gray-surface p-4">{t('oas.lifetime-pension.p2')}</p>
        <AccessibilityGraphContainer
          tableData={{
            caption: t('oas.lifetime-pension.accessibility.caption'),
            header: t('oas.lifetime-pension.accessibility.header', { returnObjects: true }),
            rows: t('oas.lifetime-pension.accessibility.rows', { returnObjects: true }),
          }}
          description={t('oas.lifetime-pension.description')}
          buttonLabel={t('oas.lifetime-pension.accessibility.button-label')}
          descriptionHeading={t('description-heading')}
          valuesHeading={t('values-heading')}
        />
        <p>{t('oas.p1')}</p>
        <p>{t('oas.p2')}</p>

        <h2 id="fred-conclusion" className="h2 h2-gutter">
          {t('conclusion.heading')}
        </h2>
        <p>{t('conclusion.p')}</p>
        <AlertCard type="disclaimer" className="mt-5">
          <Trans ns="learn/case-studies/fred" i18nKey="conclusion.disclaimer" />
        </AlertCard>

        <h2 className="h2 h2-gutter">{t('learn-more.header')}</h2>
        <List disablePadding>
          {learnMoreLinks.map(({ href, primary, secondary }) => (
            <Fragment key={primary}>
              <ListItem disablePadding className="border-b">
                <ListItemButton href={href} component={Link}>
                  <ListItemText
                    primary={primary}
                    primaryTypographyProps={{
                      variant: 'subtitle1',
                      className: 'font-display font-medium underline underline-offset-4',
                      component: 'h3',
                    }}
                    secondary={secondary}
                  />
                  <NavigateNext color="primary" />
                </ListItemButton>
              </ListItem>
            </Fragment>
          ))}
        </List>
      </LearnPageLayout>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'default', ['common', 'learn/case-studies/fred'])),
    },
  }
}

export default Fred
