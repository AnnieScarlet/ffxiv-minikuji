// ナンバーボードのインデックスリスト
const ALL_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9]  // [...Array(9).keys()]

// スコアリスト
const SCORES = {
     6: 10000,
     7:    36,
     8:   720,
     9:   360,
    10:    80,
    11:   252,
    12:   108,
    13:    72,
    14:    54,
    15:   180,
    16:    72,
    17:   180,
    18:   119,
    19:    36,
    20:   306,
    21:  1080,
    22:   144,
    23:  1800,
    24:  3600,
}

// 列とインデックスリストの対応表
const LINES = {
    // 縦
    2: [0, 3, 6],
    3: [1, 4, 7],
    4: [2, 5, 8],
    // 横
    6: [0, 1, 2],
    7: [3, 4, 5],
    8: [6, 7, 8],
    // 斜め
    1: [0, 4, 8],
    5: [2, 4, 6],
}

const sum = (arr) => arr.reduce(function(prev, current, i, arr) { return prev + current }, 0)


export default {
  consts: {
     scores: SCORES,
     lines: LINES
  },

  sum: sum,

  // 0で埋めた9要素の配列を返す
  newBoard: function() {
    let board = []
    for (let i=0; i < ALL_VALUES.length; ++i) {
      board.push(0);
    }
    return board
  },

  // values の組み合わせを返す
  getValueCombinations: function(values, level) {
    if (level == 1) {
      let ret = []
      for (let v of values) {
        ret.push([v])
      }
      return ret
    }

    let ret = []
    let poped = []
    for (let x of values) {
      poped.push(x)
      for (let y of this.getValueCombinations(values.filter((x) => poped.indexOf(x) < 0) , level - 1)) {
        ret.push([x].concat(y))
      }
    }
    return ret
  },

  // 値が0のインデックスリストを返す
  getFreeIndexes: function(board) {
    let ret = []
    for (let i=0; i < ALL_VALUES.length; ++i) {
      if (board[i] == 0) {
        ret.push(i)
      }
    }
    return ret
  },

  // ラインの値リストを返す
  getLineValues: function(board, line_id) {
    let values = []
    for (let i of this.consts.lines[line_id]) {
      if (board[i] != 0) {
        values.push(board[i])
      }
    }
    return values
  },

  // board と fixed_values に存在しない ALL_VALUES の値の組み合わせを返す
  getPossibleValues: function(board, fixed_values) {
    let level = 3 - fixed_values.length
    if (level == 0)
        return [fixed_values]

    let candidate_values = []
    for (let candidate_value of ALL_VALUES) {
      if (board.indexOf(candidate_value) < 0 && fixed_values.indexOf(candidate_value) < 0) {
        candidate_values.push(candidate_value)
      }
    }

    let ret = []
    for (let expected_values of this.getValueCombinations(candidate_values, 3 - fixed_values.length)) {
      ret.push(expected_values.concat(fixed_values))
    }
    return ret
  },

  // line_id で期待されるスコアのリストを返す
  getExpectedScores: function(board, line_id) {
    let ret = []
    let fixed_values = this.getLineValues(board, line_id)
    for (let expected_values of this.getPossibleValues(board, fixed_values)) {
      ret.push(this.consts.scores[sum(expected_values)])
    }
    return ret
  },

  // line_id の期待値を返す
  calcExpectedPointsWithLine: function(board, line_id) {
    let expected_scores = this.getExpectedScores(board, line_id)
    return sum(expected_scores) * 1.0 / expected_scores.length
  },

  // 期待値をキーにインデックスのリストを返す
  calcHigherExpectedIndex: function(board) {
    let free_indexes = this.getFreeIndexes(board)

    let scores = {}
    for (let index of free_indexes) {
      let expected_scores_per_line = []
      for (let i in this.consts.lines) {
        if (this.consts.lines[i].indexOf(index) >= 0) {
          expected_scores_per_line.push(this.calcExpectedPointsWithLine(board, i))
        }
      }
      let score = sum(expected_scores_per_line)
      if (!(score in scores)) {
          scores[score] = []
      }
      scores[score].push(index)
    }
    return scores
  },

  // 期待値をキーに列のIDを返す
  calcHigherExpectedLine: function(board) {
    let scores = {}
    for (let line_id in this.consts.lines) {
        let score = this.calcExpectedPointsWithLine(board, line_id)
        score = parseInt(score * 100) / 100.0
        if (!(score in scores)) {
            scores[score] = []
        }
        scores[score].push(line_id)
    }
    return scores
  }
}
