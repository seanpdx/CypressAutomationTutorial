 class GoogleActions {

static searchGoogle(searchTerm: string) {

    cy.get('form').within(($form) => {
        cy.get('input[title="Search"]').type(searchTerm);
        cy.root().submit();
    });

}

static assertSeachTermInResults(searchTerm: string) {

    cy.get('div[class="g"]')
    .contains(searchTerm)
    .should('be.visible');

}


}
export default GoogleActions;