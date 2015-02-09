var queenAttack = function(position1, position2) {
  var differenceX = Math.abs(position1[0] - position2[0]);
  var differenceY = Math.abs(position1[1] - position2[1]);
    if ((position1[0] === position2[0]) || (position1[1] === position2[1]) || (differenceX === differenceY)) {
      return true;
    } else {
      return false;
    }
};

$(document).ready(function() {
  $('form#queen-attack').submit(function(event) {
    var position1 = $('input#position1').split(',').map(Number).val();
    var position2 = $('input#position2').split(',').map(Number).val();

    var result = queenAttack(position1, position2);
debugger;    
alert('We made it to end of variables being stated');
    $('.position1').text(position1);
    $('.position2').text(position2);
      if (result) {
        $(".wins").text("won the f'n game! BoOYAH!")
      } else {
        $(".wins").text("lost sucka!")
      }

alert('We made it to end of if else statements');
      $("#result").show();
      event.preventDefault();
    });
});
