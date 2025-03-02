import React, { FC } from 'react'

import { useTableOfContentsData } from '../lib/hooks/useTableOfContentsData'
import { BreadcrumbItem } from './Breadcrumb'
import Layout from './Layout'
import { TableOfContents } from './TableOfContents'
import { TableOfContentsDialog } from './TableOfContentsDialog'

export interface LearnPageLayoutProps {
  children: React.ReactNode
  header: string
  breadcrumbItems?: BreadcrumbItem[]
}

export const LearnPageLayout: FC<LearnPageLayoutProps> = ({ children, header, breadcrumbItems }) => {
  const tableOfContentsData = useTableOfContentsData()
  return (
    <Layout breadcrumbItems={breadcrumbItems}>
      <h1 className="h1 mb-10 rounded-3xl bg-gray-surface px-4 py-6 text-primary-700 md:mb-12 md:px-10 md:py-10">
        {header}
      </h1>
      <div className="sm:grid sm:gap-6 lg:grid-cols-12">
        <section className="hidden lg:col-span-4 lg:block xl:col-span-3">
          {!tableOfContentsData.loading && <TableOfContents {...tableOfContentsData} />}
        </section>
        <section className="sticky top-4 z-10 ml-auto flex justify-end lg:hidden">
          {!tableOfContentsData.loading && <TableOfContentsDialog {...tableOfContentsData} />}
        </section>
        <section id="content" className="lg:col-span-8 xl:col-span-9">
          {children}
        </section>
      </div>
    </Layout>
  )
}
