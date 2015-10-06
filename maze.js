var someloser = false;

window.onload = function() {
    $("start").onclick = startClick;
    $("end").onmouseover = overEnd;
    var boundaries = $$("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].onmouseover = overBoundary;
    }
};

function overBoundary() {
    someloser = true;
    $("status").textContent = "You lose!";
    var boundaries = $$("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].addClassName("youlose");
    }
}
function onmouseout() {
  this.style.backgroundColor = 'red';
  var out = this.getElementsByTagName( 'boundary' );
  out[0].style.backgroundColor = 'red';
};
function startClick() {
    someloser = false;
    $("status").textContent = "Find the end!";
    var boundaries = $$("div#maze div.boundary");
    for (var x = 0; x < boundaries.length; x++) {
        boundaries[x].removeClassName("youlose");
    }
}

function overEnd() {
    if (!someloser) {
        $("status").textContent = "You won! :]";
    }
}
