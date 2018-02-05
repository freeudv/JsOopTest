class Quiz {
  constructor(title, quiestions) {
    this.title = title;
    this.quiestions = Array.from(questions, quiestion => new Question(quiestion.text, quiestion.answers, quiestion.answers[quiestion.correctAnswer]));
    this._currentQuestion = -1;
  }

  get currentQuestion() {
    return this._currentQuestion;
  }

  set currentQuestion(value) {
    return this._currentQuestion = value;
  }

  get hasEnded() {
    return this.quiestions.length === this.currentQuestion;
  }

  checkAnswer(answer) {
    return this.quiestions[this.currentQuestion].isCorrectAnswer(answer);
  }
}
