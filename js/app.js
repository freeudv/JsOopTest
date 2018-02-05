class App {
  constructor({ element, quiz }) {
    this.element = element
    this.quiz = quiz
    this.scope = 0

    this.init()
  }

  init() {
    this.title = this.element.querySelector("#title")
    this.title.innerText = this.quiz.title
    this.answersList = this.element.querySelector("#answers")
  }

  handleAnswerButtonClick({ target }) {
    let answer = target.innerText
    if (this.quiz.checkAnswer(answer)) this.scope += 1

    this.displayNext()
  }

  displayNext() {
    this.quiz.currentQuestion += 1

    if (!this.quiz.hasEnded) {
      this.displayQuestion()
      this.displayAnswers()
      this.displayProgress()
    } else {
      this.displayScore()
    }
  }

  displayQuestion() {
    this.element.querySelector("#question").innerHTML = this.quiz.quiestions[
      this.quiz.currentQuestion
    ].text
  }

  displayAnswers() {
    let answers = this.quiz.quiestions[this.quiz.currentQuestion].answers
    this.answersList.innerText = ""
    answers.forEach(answer => {
      let answerItem = document.createElement("LI")
      answerItem.className = "list-group-item list-group-item-action"
      answerItem.innerText = answer
      answerItem.addEventListener(
        "click",
        this.handleAnswerButtonClick.bind(this)
      )

      this.answersList.appendChild(answerItem)
    })
  }

  displayProgress() {
    let current = this.quiz.currentQuestion + 1

    this.element.querySelector("#progress").innerText = `Вопрос ${current} из ${
      this.quiz.quiestions.length
    }`
  }

  displayScore() {
    let card = this.element.firstElementChild
    card.removeChild(this.answersList)
    card.removeChild(this.element.querySelector("#question"))
    card.removeChild(this.element.querySelector("#progress"))
    this.title.innerText = ""
    this.element.querySelector("#score").innerText = `Правильных ответов: ${
      this.scope
    }`
  }
}
