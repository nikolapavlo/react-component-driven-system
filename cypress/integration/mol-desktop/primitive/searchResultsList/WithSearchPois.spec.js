describe('Search - Search Results List Component', () => {
	// Note the use of `before`
	before(() => {
		// Visit the storybook iframe page once per file
		cy.visitStorybook();
	});

	// Note the use of `beforeEach`
	beforeEach(() => {
		// The first parameter is the category. This is the `title` in CSF or the value in `storiesOf`
		// The second parameter is the name of the story. This is the name of the function in CSF or the value in the `add`
		// This does not refresh the page, but will unmount any previous story and use the Storybook Router API to render a fresh new story
		cy.loadStory(
			'MOL Components/Desktop/Primitive Components/Search Results List//Search Results List',
			'WithSearchPois'
		);
	});

	it('Search POI item click event is firing', () => {
		cy.get('[data-cy="SearchPOIRow"]')
			.first()
			.then((e) => {
				Cypress.$(e).click();
			})
			.should(() => {
				expect(window.sessionStorage.getItem('POI 62 was clicked')).to.equal(
					'true'
				);
			});
	});

	it('Information dividers are displayed', () => {
		cy.get('[data-cy="InformationDivider"]').and('have.text', 'Nearby');
		cy.get('.search-results-items-list').scrollTo(0, 600);
		cy.wait(200); // eslint-disable-line cypress/no-unnecessary-waiting
		cy.get('[data-cy="InformationDivider"]').and('have.text', 'Other results');
	});
});
