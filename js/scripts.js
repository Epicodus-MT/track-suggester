//Front END


$(document).ready(function() {
  var resultLabel = $('#quiz-result');

  $("#form1").submit(function(event) {
    event.preventDefault();
    var location = $("input:radio[name=location]:checked").val();
    var development = $("input:radio[name=development]:checked").val();
    var month = $("input:radio[name=month]:checked").val();
    var language = $("input:radio[name=language]:checked").val();
    var company = $("input:radio[name=company]:checked").val();


    console.log({
      'location': location,
      'development': development,
      'month': month,
      'language': language,
      'company': company
    });

    var resultText = '';
    if (development === 'front') {
      resultText = 'Be Design';
    } else /* back */ {
      resultText = 'Do Not be design';
    }

    $('#inputs')[0].style.display = 'none';
    $('#output')[0].style.display = 'block';
    $('#quiz-result')[0].innerText = resultText;
  })
});

function myRuby() {
  var button = document.getElementById('ruby');
  if (button.style.display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function myPHP() {
  var button = document.getElementById('php');
  if (button.style.display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function myJava() {
  var button = document.getElementById('java');
  if (button.style.display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function myCSS() {
  var button = document.getElementById('css');
  if (button.style.display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}

function myCNet() {
  var button = document.getElementById('cnet');
  if (button.style.display === 'none') {
    button.style.display = 'block';
  } else {
    button.style.display = 'none';
  }
}




/* $(document).ready(function() {

  $('#input').click(function(Submit) {
  event.preventDefault();

    var development= document.getElementsByName('development');
    var location = document.getElementsByName('location');
    var month= document.getElementsByName('month');

    if (development[0].checked) {
      alert("Great! You ought to study CSS/Design.");
    } else {
      if (location[0].checked) {
        if (month[0].checked) {
          alert("Great! You ought to study Java/Android.");
        } else if (month[1].checked) {
          alert("Great! You ought to study Ruby/Rails.");
        } else if (month[1].checked) {
          alert("Great! You ought to study C#/.NET.");
        } else (month[1].checked) {
          alert("Great! You ought to study C#/.NET.");
        }
      } else {
        if (month[0].checked) {
          alert("Great! You ought to study C#/.NET.");
        } else if (month[1].checked) {
          alert("Great! You ought to study Ruby/Rails.");
        } else {
          alert("Great! You ought to study Java/Android.");
        }
      }
    }
  });
});                                     */
