describe('client ', function () {
  beforeEach(function () {
    cy.visit('http://localhost:3000');
  });

  it('front page can be opened', function () {
    cy.visit('http://localhost:3000');
    cy.contains('Edit src/App.tsx and save to reload.');
  });
});
