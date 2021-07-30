describe('Map Legend Component - 1 item', () => {
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
		cy.loadStory('MOD Components/Domain Components/Map Legend', 'Items 1');
	});

	it('Map Legend component has correct styling', () => {
		cy.get('[data-cy=MapLegendRow]').should('not.exist');
		cy.get('[data-cy=MapLegendColumn]').should('not.exist');

		cy.get('[data-cy=MapLegend]:eq(0) [data-cy=MapLegendItem]')
			.its('length')
			.should('eq', 1);
		cy.get('[data-cy=MapLegendItem]').should(
			'have.css',
			'margin-bottom',
			'0px'
		);

		cy.get('[data-cy=MapLegendItem]').each(($el) => {
			const height = $el[0].offsetWidth;
			expect(height).to.be.most(975);
		});
	});
});
