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
    var position1 = $('input#position1').val().split(',').map(Number);
    var position2 = $('input#position2').val().split(',').map(Number);

    var result = queenAttack(position1, position2);

    $('.position1').text(position1);
    $('.position2').text(position2);
      if (result) {
        $(".wins").text(" killed an innocent chess piece. I hope you are happy.")
      } else {
        $(".wins").text(" have lived to be hunted another game!")
      }

      $("#result").show();
      event.preventDefault();
    });
});
