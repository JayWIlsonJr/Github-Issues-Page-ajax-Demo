function renderTemplate(templateId, model, container) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
};


$.ajax({
  type: 'GET',
  url: "https://api.github.com/issues",
    success: function(issues){
      console.log(issues);
      _.each(issues, function(issue){
        renderTemplate('#issues_titles', issue, '.titles_container')
        renderTemplate('#issues_template', issue, '.issues_container')
    });
  }
})
 