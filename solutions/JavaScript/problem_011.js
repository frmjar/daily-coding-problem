function autocomplete (input, dictionary) {
  return dictionary.filter(word => word.startsWith(input))
}
console.log(autocomplete('de', ['dog', 'deer', 'deal']))
