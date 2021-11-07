function autocomplete (input: string, dictionary: string[]): string[] {
  return dictionary.filter(word => word.startsWith(input))
}

console.log(autocomplete('de', ['dog', 'deer', 'deal']))
