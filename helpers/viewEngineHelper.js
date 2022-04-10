'use strict'

var fs = require('fs');
var path = require('path');
var Handlebars = require('hbs');

/**
 * @param  {String} templateDir example: views/contact.hbs
 * @param  {String} templateObj object that can be accessed in the template
 * 
 * @returns {String} rendered html template string
 */
function initViewEngine(app, __dirname) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'hbs');
    Handlebars.registerHelper('stringify', function(context) {
    return JSON.stringify(context);
    });

    var dir = path.join(__dirname, 'views');

    const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {

        filelist = fs.statSync(path.join(dir, file)).isDirectory()
        ? walkSync(path.join(dir, file), filelist)
        : filelist.concat(path.join(dir, file));

    });
    return filelist;
    }

    var filelist = walkSync(dir);
    if (filelist.length > 0) {
    filelist.forEach(function (filename) {
        var matches = /^([^.]+).hbs$/.exec(path.basename(filename));
        if (!matches) {
        return;
        }
        var name = matches[1];
        var template = fs.readFileSync(filename, 'utf8');
        Handlebars.registerPartial(name, template);
    });
    }

}

module.exports = {
    initViewEngine: initViewEngine
};
