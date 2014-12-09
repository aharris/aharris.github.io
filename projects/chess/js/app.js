var App = window.App || {

  init: function () {
    this.generateBoard();
  },

  initialBoard: function () {
    return [
      ['rook','knight','bishop','queen','king','bishop','knight','rook'],
      ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      [0,0,0,0,0,0,0,0],
      ['pawn','pawn','pawn','pawn','pawn','pawn','pawn','pawn'],
      ['rook','knight','bishop','king','queen','bishop','knight','rook']
    ];
  },

  generateBoard:function () {
    var body = $('body'),
      table = document.createElement('table');

    table.className = 'board';

    for(var i = 0; i < this.initialBoard().length; i++){
      var row = document.createElement("tr");
      $(table).append(row);
      for(var j = 0; j < this.initialBoard()[i].length; j++) {
        var cell = document.createElement("td");
        if (this.initialBoard()[i][j] !== 0) {
          $(cell).html(this.initialBoard()[i][j]);
        }
        $(row).append(cell);
      }
    }

    body.prepend(table);
  },

  pieces: function () {
    return [
      'pawn',
      'knight',
      'bishop',
      'rook',
      'queen',
      'king'
    ];
  }

};

$().ready(function() {
  App.init();
});