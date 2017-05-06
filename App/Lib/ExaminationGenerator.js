function generate(name) {
  let question = {
      "category": "Dziesięć przykazań Bożych",
      "description": "III przykazanie: Pamiętaj, abyś dzień święty święcił",
      "sin": false,
      "name": name,
      "notes": ""
  }
  return question;
}

var text = `Jaki jest mój dzień święty?
Czy w moim domu panuje świąteczna atmosfera?
Jak często rozmawiam z domownikami na temat wiary?
Jak zachowuję się wobec ludzi, którym grozi utrata wiary?
Bóg mówi do mnie w czytaniach mszalnych. Czy słucham uważnie i zapamiętuję wskazania Boga z tekstów Pisma Świętego?
Czy chętnie i punktualnie przychodzę na Mszę świętą?`;

var questions = text.split('\n');

questions.forEach(generate);

questions = questions.map(generate);


var questionsStr = JSON.stringify(questions, null, "\t")
console.log(questionsStr.substring(1, questionsStr.length - 1));
// generate()
