import { Button } from '@mui/material'
import { GetServerSideProps } from 'next'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import Link from 'next/link'

const Index = () => {
  return (
    <>
      <NextSeo
        noindex
        title="Seniors Journey | Parcours des aînés"
        titleTemplate="%s - Canada.ca"
      />
      <main
        role="main"
        className="flex h-screen bg-splash-page bg-cover bg-center"
      >
        <div className="m-auto w-[300px] bg-gray-lighter md:w-[400px] lg:w-[500px]">
          <div className="p-8">
            <h1 className="sr-only">Seniors Journey | Parcours des aînés</h1>
            <div className="w-11/12 lg:w-8/12">
              <Image
                className="mb-1.5"
                property="logo"
                alt="Government of Canada"
                src="/assets/sig-blk-en.svg"
                width={300}
                height={28}
                priority
              />
              <span className="sr-only">
                {' '}
                / <span lang="fr">Gouvernement du Canada</span>
              </span>
            </div>
            <div className="mb-2 mt-9 flex justify-center gap-8">
              <section className="w-36" lang="en">
                <h2 className="sr-only">Government of Canada</h2>
                <Button
                  color="secondary"
                  component={Link}
                  fullWidth
                  href="/"
                  id="english-button"
                  locale="en"
                >
                  English
                </Button>
              </section>
              <section className="w-36" lang="fr">
                <h2 className="sr-only">Gouvernement du Canada</h2>
                <Button
                  color="secondary"
                  component={Link}
                  fullWidth
                  href="/"
                  id="french-button"
                  locale="fr"
                >
                  Français
                </Button>
              </section>
            </div>
          </div>
          <div className="flex items-center justify-between gap-6 bg-gray-light p-8">
            <div className="w-7/12 text-blue-light md:w-8/12">
              <a
                className="text-inherit no-underline visited:text-inherit hover:text-inherit hover:underline focus:text-inherit focus:underline"
                data-cy="terms"
                href="https://www.canada.ca/en/transparency/terms.html"
                lang="en"
              >
                Terms &amp; conditions
              </a>
              <span className="text-gray-400"> • </span>
              <a
                className="text-inherit no-underline visited:text-inherit hover:text-inherit hover:underline focus:text-inherit focus:underline"
                data-cy="avis"
                href="https://www.canada.ca/fr/transparence/avis.html"
                lang="fr"
              >
                Avis
              </a>
            </div>
            <div className="w-5/12 md:w-4/12">
              <Image
                alt="Symbol of the Government of Canada"
                src="/assets/wmms-blk.svg"
                width={300}
                height={71}
                priority
              />
              <span className="sr-only">
                {' '}
                / <span lang="fr">Symbole du gouvernement du Canada</span>
              </span>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: {},
})

export default Index
