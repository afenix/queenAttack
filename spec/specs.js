describe('queenAttack', function() {
  it('is false if the coordinates are not horizontally, vertically, or diagnolly in line with each other', function() {
    expect(queenAttack([1,1], [2,3])).to.equal(false);
  });

  it('is true if the coordinates are horizontally in line with each other', function() {
    expect(queenAttack([1,1], [1,2])).to.equal(true);
  });

  it('is true if the coordinates are vertically in line with each other', function() {
    expect(queenAttack([1,1], [2,1])).to.equal(true);
  });

  it('is true if the coordinates are diagonally in line with each other', function() {
    expect(queenAttack([1,1], [2,2])).to.equal(true);
  });
});
