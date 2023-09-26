class Formatter {
  static capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
      return str.replace(/[^a-zA-Z0-9-' ]/g, '');
  }

  static titleize(str) {
      const nonCapitalizedWords = [
          'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'
      ];

      const words = str.split(' ');
      const titleizedWords = [];

      for (let i = 0; i < words.length; i++) {
          const word = words[i];
          if (i === 0 || !nonCapitalizedWords.includes(word)) {
              titleizedWords.push(this.capitalize(word));
          } else {
              titleizedWords.push(word);
          }
      }

      return titleizedWords.join(' ');
  }
}

// Example usage:
console.log(Formatter.capitalize('hello')); // Outputs: 'Hello'
console.log(Formatter.sanitize('hello-world_123')); // Outputs: 'hello-world_123'
console.log(Formatter.titleize('the quick brown fox jumps over the lazy dog')); // Outputs: 'The Quick Brown Fox Jumps over the Lazy Dog'
