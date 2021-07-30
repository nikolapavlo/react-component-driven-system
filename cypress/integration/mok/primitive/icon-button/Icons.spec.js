describe('Icon Button Component', () => {
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
		cy.loadStory('MOK Components/Primitive Components/Icon Button', 'Icons');
	});

	const checkCssStyle = (wrapper) =>
		wrapper.should('exist').and('have.css', 'height', '60px');

	const checkCssText = (wrapper, text) =>
		wrapper
			.should('exist')
			.and('have.css', 'height', '27px')
			.and('have.css', 'padding-left', '8px')
			.and('have.text', text);

	it('Icons', () => {
		cy.get('[data-cy=IconButton]').should('have.length', 3);

		checkCssStyle(cy.get('[data-cy=IconButton]:eq(0)'));
		checkCssStyle(cy.get('[data-cy=IconButton]:eq(1)'));
		checkCssStyle(cy.get('[data-cy=IconButton]:eq(2)'));

		checkCssText(cy.get('[data-cy=Text]:eq(0)'), 'Help');
		checkCssText(cy.get('[data-cy=Text]:eq(1)'), 'Home');
		checkCssText(cy.get('[data-cy=Text]:eq(2)'), 'Hotel');
	});
});
