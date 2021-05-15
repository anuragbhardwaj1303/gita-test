  // var chapter_num=prompt("what chapter you want to read");
  // var shlok_num=prompt("what shlok you want to read");

  //   fetch(`https://vedicscripturesapi.herokuapp.com/gita.svg?ch=${chapter_num}&sl=${shlok_num}`)
  // .then(response => response.text())
  // .then(svg => document.body.insertAdjacentHTML("afterbegin", svg));
  function myFunction() {

    var chapter_num=document.getElementById("chapter").value;
    var shlok_num=document.getElementById("shlok").value;
    fetch(`https://vedicscripturesapi.herokuapp.com/gita.svg?ch=${chapter_num}&sl=${shlok_num}`)
  .then(response => response.text())
  .then(svg => document.body.insertAdjacentHTML("beforebegin", svg));
  }