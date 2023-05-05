describe.only(``, () => {
  const langs = ['en', 'fr']
  const sizes = ['macbook-13', 'macbook-11', 'macbook-16']

  langs.forEach(lang => {
    const expectedLinks = [`/${lang}/test`, `/${lang}/test2`, `/${lang}/test3`]

    sizes.forEach(size => {
      it(`[${lang}] - ${size} - Main sources of retirement income link click url redirects to /en/fr/ when accessing /en/fr`, () => {
        const actualLinks = []

        cy.visitAndWait(`/${lang}/home`)
          .viewport(size)
          .get('#mainContent li a')
          .each($a => actualLinks.push($a.attr('href')))
          .then(() => {
            expectedLinks.forEach(expectedLink => {
              assert.isTrue(actualLinks.includes(expectedLink), `Expected link ${expectedLink} was not found on page`)
            })
          })
        })
    })
  })
})
