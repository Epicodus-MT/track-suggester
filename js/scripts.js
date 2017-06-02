$(document).ready(function() {
  $("form#input").submit(function() {
    event.preventDefault();
    var operator = $("input:radio[name=development]:checked").val();

    var result;
    if (development === "front") {
      $("#output").text('#ruby-choice');
    }
  });
});

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
