describe("Initial Board", function() {
  it("should generate the board", function() {
    expect(App.initialBoard()).toEqual(
      [
        ['rook','knight','bishop','queen','king','bishop','knight','rook'],
        ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0],
        ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
        ['rook','knight','bishop','king','queen','bishop','knight','rook']
      ]
    );
  });
});

describe("Generate Board", function () {
  it("should append the board to the body", function () {
    expect($('body').find('.board').length).toBeGreaterThan(0);
  });
});

describe("Pieces", function() {
  it("should list all pieces", function() {
    expect(App.pieces()).toEqual(
      [
        'pawn',
        'knight',
        'bishop',
        'rook',
        'queen',
        'king'
      ]
    );
  });
});

describe("Moves", function () {
  it("should describe each peices moves", function () {
    App.peices().each(function (index) {
      switch(index)
    });
  });
});

// describe("Moves", function() {
//   it("should define each pieces moves", function() {
//     expect(App.moves(pawn)).toEqual();
//   });
// });