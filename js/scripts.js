
$(document).ready(function() {
  var resultLabel = $('#quiz-result');

  $("#form1").submit(function(event) {
    event.preventDefault();
    var name = $("#name").val();
    // var name = $("#address").val();
    var location = $("input:radio[name=location]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var month = $("input:radio[name=month]:checked").val();
    var language = $("input:radio[name=language]:checked").val();
    var company = $("input:radio[name=company]:checked").val();

    console.log({
      'name': name,
      'location': location,
      'development': development,
      'month': month,
      'language': language,
      'company': company
    });

    var resultText = '';
    if (development === 'front') {
      resultText = name + ", you ought to study DESIGN, so you can cultivate a solid foundation of basic design principles and gain experience using modern, industry-standard tools!"
    } else {
      if (language === 'web-applications' && company === 'small-company') {
        resultText = name + ", you ought to study RUBY, so you can build interactive web applications!"
      } else if (language === 'content-managment' && company === 'fast-company') {
          resultText = name + ", you ought to study PHP, so you can learn to work with a versatile language, and find numerous and diverse employment options!"
      } else if (language === 'internal-software' && company === 'established-company') {
        resultText = name + ", you ought to study CNET, so you can learn how to building internal software!"
      } else {
        resultText = name + ", you ought to study JAVA, so you can learn how to make mobile apps for Android!"
      }
    }

    $('#inputs').css('display', 'none');
    $('#output').css('display', 'block');
    $('#quiz-result').text(resultText);
  })
});

function toggleSection(sectionName) {
  var button = $('#' + sectionName)
  if (button.css('display') === 'none') {
    button.css('display', 'block');
  } else {
    button.css('display', 'none');
  }
}
