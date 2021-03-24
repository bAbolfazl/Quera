describe('Layout Styling sample tests: ', () => {
    it('check color of first row', () => {
        // Load the page
        cy.visit("index.html")

        // Get all blocks of the first row
        cy.get('.row:first-child .block').each(($el, index, $list) => {
            // Check if the color in hex format
            let color = $el.css('background-color');
            if (color[0] === '#') {
                expect($el).to.have.css('background-color', "#05b37b");
            } else {
                let hexColor = rgb2hex(color);
                expect(hexColor).to.be.equal("#05b37b");

            }
        });
    });


    it('check color of walls', () => {
        // Load the page
        cy.visit("index.html")

        // Get all the block
        cy.get('.wall').each(($el, index, $list) => {
            // Check if the color in hex format
            let color = $el.css('background-color');
            if (color[0] === '#') {
                expect($el).to.have.css('background-color', "#05b37b");
            } else {
                let hexColor = rgb2hex(color);
                expect(hexColor).to.be.equal("#05b37b");

            }
        });
    });

});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    return "#" +
        ("0" + parseInt(rgb[1], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[2], 10).toString(16)).slice(-2) +
        ("0" + parseInt(rgb[3], 10).toString(16)).slice(-2);
}
