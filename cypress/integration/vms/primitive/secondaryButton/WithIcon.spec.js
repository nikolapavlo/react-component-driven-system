describe('Secondary Button Component', () => {
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
			'VMS Components/Primitive Components/Secondary Button',
			'WithIcon'
		);
	});

	it('Secondary Button correct icon)', () => {
		cy.get('[data-cy=SecondaryButton]:eq(0) svg').should(
			'have.attr',
			'data-src',
			'https://content.locuslabs.com/ds-assets/icons/directions.filled.svg'
		);
	});

	it('Secondary Button correct icon not found)', () => {
		cy.get('[data-cy=SecondaryButton]:eq(1) svg').should(
			'have.attr',
			'title',
			'Error Loading Icon'
		);
	});
});
