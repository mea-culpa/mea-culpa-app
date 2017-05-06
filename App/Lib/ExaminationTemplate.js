import template1 from "../data/templates/rachunek-dla-doroslych.json";
import template2 from "../data/templates/rachunek-dla-dzieci.json"
import template3 from "../data/templates/rachunek-dla-doroslych-2.json"


export function list() {
  return Promise.resolve([template1, template2, template3]);
}
