var fs = require('fs');
var exphbs = require('express-handlebars');
var hbs = exphbs.create();

/**
 * @param  {String} templateDir example: views/contact.hbs
 * @param  {String} templateObj object that can be accessed in the template
 * 
 * @returns {String} rendered html template string
 */
function getRenderedTemplateString(templateDir, templateObj) {
    var htmlString = '';

    try {
        htmlString = fs.readFileSync(templateDir, 'utf8')
    } catch (err) {
        console.error(err)
    }

    var template = hbs.handlebars.compile(htmlString);
    return template(templateObj);
}

module.exports = {
    getRenderedTemplateString: getRenderedTemplateString
};
