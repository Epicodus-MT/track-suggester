function myRuby() {
    var button = document.getElementById('ruby');
    var hidden = false;
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
