 class GoogleActions {

static searchGoogle(searchTerm: string) {

    cy.get('form').within(($form) => {
        cy.get('input[title="Search"]').type(searchTerm);
        cy.root().submit();
    });


}

}
export default GoogleActions;