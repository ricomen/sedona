(function() {
  //Показ/скрытие формы
  var searchBtn = document.getElementById("search-btn");
  var searchForm = document.getElementById("search-form");
  searchBtn.onclick = function(e) {
    e.preventDefault();
    searchForm.classList.toggle("search-form--active");
  };

  //Количество постояльце+/-(форма)
  var amountAdults = document.querySelector("input#adult")
  var amountChild = document.querySelector("input#child")
  var adulptPlus = document.querySelector("button#adult-plus");
  var adulptMinus = document.querySelector("button#adult-minus");
  var childPlus = document.querySelector("button#child-plus");
  var childMinus = document.querySelector("button#child-minus");
  

  adulptPlus.addEventListener("click", function(e) {    
    checkValue(e, "plus");
  });

  adulptMinus.addEventListener("click", function(e) {
    checkValue(e, "minus");
    
  });

  childPlus.addEventListener("click", function(e) {    
    checkValue(e, "plus");
  });

  childMinus.addEventListener("click", function(e) {
    checkValue(e, "minus");
  });

  function checkValue(e, val) {
    // console.log(e.target.getAttribute("data-attr"), val);
    
    if( e.target.getAttribute("data-attr") == "adult" ) {      
      if(val == "plus") {
        amountAdults.value++;
      } else {
        amountAdults.value--;
        if(amountAdults.value == -1) amountAdults.value = 0;
      }
    } else {
      if(val == "plus") {
        amountChild.value++;
      } else {
        amountChild.value--;
        if(amountChild.value == -1) amountChild.value = 0;
      }
    }
 
  }
  


})();