import template1 from "../data/templates/rachunek-dla-doroslych.json";

export function list() {
  return Promise.resolve([template1]);
}

export function load(name) {
  return Promise.resolve(template1);
}

