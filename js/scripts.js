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

$(document).ready(function() {
  $("form#quiz").submit(function(event) {
//    event.preventDefault();
//    var number1 = parseInt($("name").val());
//    var number2 = parseInt($("#add2").val());
//    var result = add(number1, number2);
//    $("#output").text(result);
  });
});
