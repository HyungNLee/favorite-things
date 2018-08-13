$(document).ready(function() {

  $("#favInputBox").submit(function(event) {
    event.preventDefault();
    var inputOne = $("input#favThings1").val();
    var inputTwo = $("input#favThings2").val();
    var inputThree = $("input#favThings3").val();

    var favThingsArray = [inputOne, inputTwo, inputThree];
    alert(favThingsArray);

    var newArray = [];

    newArray.push(favThingsArray[1], favThingsArray[0], favThingsArray[2]);

    $(".firstItem").text(newArray[0]);
    $(".secondItem").text(newArray[1]);
    $(".thirdItem").text(newArray[2]);
  })
})
