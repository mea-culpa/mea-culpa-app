function generate(name) {
  let question = {
      "category": "Wobec drugiego człowieka",
      "description": "Błogosławieni, którzy łakną i pragną sprawiedliwości, albowiem oni będą nasyceni (Mt 5,6)",
      "sin": false,
      "name": name,
      "notes": "Notatka"
  }
  return question;
}

var text = `Jaki jesteś w pracy? Czy praca i zarobek jest najważniejszą sprawą, której oddajesz wszystkie swoje siły i czas? Jeżeli jesteś szefem —jaki jest twój stosunek do współpracowników? Czy jesteś sprawiedliwy w podziale pracy i dochodów? Czy w twoim miejscu pracy dbasz o dobrą atmosferę, o poprawne stosunki międzyludzkie? Czy zarobki przeznaczasz na konsumpcje czy też inwestujesz, aby dać nowe miejsca pracy? Czy uczciwie płacisz podatki? Czy bierzesz udział w nielegal­nych operacjach finansowych i własnościowych? Czy dajesz i bierzesz łapówki?
Jeżeli jesteś pracownikiem — czy pracujesz uczciwie? Czy rozwijasz się zawodowo, czy też po­przestajesz na tym, co wiesz „od zawsze”? Czy starasz się o utrzymanie dobrej atmosfery w miejscu pracy? Czy jesteś koleżeński?
Czy kierujesz się w stosunkach z innymi sprawiedliwością, to znaczy, czy dajesz każdemu, co mu się słusznie należy? Czy nie odbierasz ludziom dobrego imienia przez pomówienia, plotki, kłamstwa? Czy spotkając się z krzywdą człowieka — stajesz w jego obronie, czy też tchórzliwie wycofujesz się dla „świętego spokoju”? Czy świadomie głosisz twierdzenia, że pewne grupy ludzi (Żydzi itd…) są odpowiedzialne za całe zło na świecie?
Czy narażasz życie innych i swoje, nie przestrzegając zasad kodeksu drogowego? Czy prowadziłeś po spożyciu alkoholu? Czy próbowałeś przekupić policjanta?.`;

var questions = text.split('\n');

questions.forEach(generate);

questions = questions.map(generate);

console.log(JSON.stringify(questions, null, "\t"));
// generate()
