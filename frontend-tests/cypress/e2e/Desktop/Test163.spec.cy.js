describe('test id 163 - verify Learn overview - Explore our Content - Manage Money in retirement', () => {
  ['en', 'fr'].forEach(lang => {
    it(`[${lang}] Learn overview - Manage Money in retirement is visible`, () => {
      cy.visit(`/${lang}/learn`).get('#mainContent h2').first().should('be.visible')
    })

    it(`[${lang}] Learn overview - Manage money cards are visible and link to expected pages`, () => {
      const cardSpecs = [
        // TODO :: GjB :: using `aria-describedby` as a selector is bad; ask developers to add data-cy attributes
        { 'aria-describedby': 'section-0-card-0', 'href': `/${lang}/learn/retirement-income-sources` },
        { 'aria-describedby': 'section-0-card-1', 'href': `/${lang}/learn/planning-to-save-for-retirement` },
      ]

      cardSpecs.forEach(cardSpec => {
        cy.visit(`/${lang}/learn`)
          .get(`#mainContent a[aria-describedby=${cardSpec['aria-describedby']}]`)
          .should('have.attr', 'href', cardSpec['href'])
          .should('be.visible')
      })
    })
  })
})
