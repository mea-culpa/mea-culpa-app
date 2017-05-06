function generate(name) {
  let question = {
      "category": "Rachunek sumienia dla dzieci",
      "description": "",
      "sin": false,
      "name": name,
      "notes": ""
  }
  return question;
}

var text = `Czy modliłem się rano i wieczorem?
Czy podczas modlitwy byłem skupiony?
Czy nie przeszkadzałem innym w modlitwie?
Czy wierzyłem we wróżby i przesądy?
Czy wymawiałem imiona święte bez uszanowania, w gniewie lub w żartach?
Czy przysięgałem?
Czy opuszczałem Mszę św. w niedziele i święta?
Czy spóźniałem się na Mszę św.?
Czy w kościele dobrze się zachowywałem?
Czy słuchałem rodziców i wychowawców?
Czy szanowałem starszych?
Czy szkodziłem sobie lub innym na zdrowiu?
Czy paliłem papierosy lub piłem alkohol?
Czy biłem się z kolegami?
Czy dałem zgorszenie swoim postępowaniem?
Czy dręczyłem zwierzęta?
Czy myślałem lub mówiłem o rzeczach nieskromnych (nieprzyzwoitych)?
Czy oglądałem filmy nieprzyzwoite?
Czy bawiłem się nieskromnie sam lub z kimś innym?
Czy kradłem lub niszczyłem własność społeczną lub prywatną?
Czy pragnąłem zabrać cudzą rzecz?
Czy oddałem rzeczy pożyczone lub znalezione?
Czy nie oszukiwałem?
Czy kłamałem?
Czy obmawiałem, plotkowałem lub oczerniałem bliźniego?
Czy w dni postne jadłem dobrowolnie potrawy mięsne?
Czy byłem pyszny i wynosiłem się nad innych?
Czy byłem łakomy?
Czy byłem zazdrosny?
Czy gniewałem się?
Czy byłem leniwy w nauce i pracy?
Który grzech popełniałem najczęściej?`;

var questions = text.split('\n');

questions.forEach(generate);

questions = questions.map(generate);

console.log(JSON.stringify(questions, null, "\t"));
// generate()
