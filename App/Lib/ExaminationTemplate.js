import template1 from "../data/templates/rachunek-dla-doroslych.json";
import template2 from "../data/templates/rachunek-dla-dzieci.json"

export function list() {
  return Promise.resolve([template1, template2]);
}
