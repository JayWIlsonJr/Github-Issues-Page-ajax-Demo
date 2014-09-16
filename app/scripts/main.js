function renderTemplate(templateId, model, container) {
  var templateString = $(templateId).text();
  var templateFunction = _.template(templateString);
  var renderTemplate = templateFunction(model);
  $(container).append(renderTemplate);
};

// var issue = [
//   {issue: "Please comment with the link to your repo, then close issue."},
//   {issue: "Stop making weird issues for no reason"},
//   {issue: "The colors are off on your monitor. Go buy a new monitor."}
// ];





// _.each(issue, function(issue){
//   // renderTemplate('#issues_template', issue, '.issues_container')
// });

$.ajax({
  type: 'GET',
  url: "https://api.github.com/issues",
    success: function(issues){
      console.log(issues);
      _.each(issues, function(issue){
        console.log(issue)
        renderTemplate('#issues_titles', issue, '.titles_container')
        renderTemplate('#issues_template', issue, '.issues_container')
    });
  }
})
 