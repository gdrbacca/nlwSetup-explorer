const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("ja tem o dia")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habits", JSON.stringify(nlwSetup.data))
}

/*const data = {
  correr: ["01-01", "01-02", "01-05", "01-06", "01-03"],
  agua: ["01-01", "01-02", "01-03", "01-04"],
  comer: ["01-01", "01-02", "01-03"],
  ler: ["01-01", "01-02", "01-04"],
}*/

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
