export default function rangeHeroes(heroesList) {
  return heroesList.sort((a, b) => b.health - a.health);
}
