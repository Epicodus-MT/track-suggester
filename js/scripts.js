
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
      resultText = 'Be Design';
    } else {
      resultText = 'Do Not be design';
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
