function getFirstSelector(selector) {
  return document.querySelector(selector);
}

 function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  var inc = document.querySelectorAll('.ranked-list li');
  for (var i = 0; i < inc.length; i++) {
    inc[i].innerHTML = parseInt(inc[i].innerHTML) + n
  }
}

function deepestChild() {
  var divs = document.querySelectorAll('#grand-node div');
  var deepest = divs[divs.length-1];

  return deepest;
}
