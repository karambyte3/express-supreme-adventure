/**
 * @param  {String} directory example: views/
 * @param  {String} fileName example: contact
 */
 function getTemplateDirectory(directory, fileName) {
    var fileDirectory = directory + fileName + '.hbs';
  
    return fileDirectory;
  }
  