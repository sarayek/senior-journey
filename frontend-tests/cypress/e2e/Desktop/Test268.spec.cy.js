describe('test id 268 - verify Learn Overview - Breadcrumb', () => {
  const langs = ['en', 'fr']
  const sizes = ['macbook-13', 'macbook-11', 'macbook-16']

  sizes.forEach(size => {
    langs.forEach(lang => {
      it(`[${lang}] - ${size} - canada link - click url redirects to /en/fr when accessing /en/fr`, () => {
        cy.log('https://dev.azure.com/JourneyLab/SeniorsJourney/_workitems/edit/268')
        cy.visitAndWait(`/${lang}/home`)
          .viewport(size)
        cy.contains('Canada.ca').click()
        cy.origin('https://www.canada.ca', { args: { lang } }, ({ lang }) => {
          cy.wait(3000)
          cy.location('pathname').should('equal', `/${lang}.html`)
        })
      })

      it(`[${lang}] - ${size} - retirement hub breadcrumb link - redirects to /en/fr when accessing /en/fr`, () => {
        cy.visitAndWait(`/${lang}/learn/retirement-income-sources`)
          .viewport(size)
        cy.get('.text-sm > :nth-child(2) > .MuiTypography-root').click()
        cy.location('pathname').should('equal', `/${lang}/home`)
      })

      it(`[${lang}] - ${size} - retirement hub breadcrumb link - redirects to /en/fr when accessing /en/fr`, () => {
        cy.visitAndWait(`/${lang}/learn/planning-to-save-for-retirement`)
          .viewport(size)
        cy.get('.text-sm > :nth-child(2) > .MuiTypography-root').click()
        cy.location('pathname').should('equal', `/${lang}/home`)
      })

      it(`[${lang}] - ${size} - learn breadcrumb link - redirects to /en/fr when accessing /en/fr`, () => {
        cy.visitAndWait(`/${lang}/learn/retirement-income-sources`)
          .viewport(size)
        cy.get('.text-sm > :nth-child(3) > .MuiTypography-root').click()
        cy.location('pathname').should('equal', `/${lang}/learn`)
      })

      it(`[${lang}] - ${size} - learn breadcrumb link - redirects to /en/fr when accessing /en/fr`, () => {
        cy.visitAndWait(`/${lang}/learn/planning-to-save-for-retirement`)
          .viewport(size)
        cy.get('.text-sm > :nth-child(3) > .MuiTypography-root').click()
        cy.location('pathname').should('equal', `/${lang}/learn`)
      })
    })
  })
})