export const convertUserName = (userName) => {
  // Split the user name into words
  const words = userName.split(" ");

  // Process each word
  const modifiedWords = words.map((word) => {
    if (word.length > 1) {
      // Replace middle characters with asterisks
      const middlePart = word.slice(1, word.length).replace(/./g, "*");
      return `${word[0]}${middlePart}`;
    } else {
      // Single-letter words remain unchanged
      return word;
    }
  });

  // Join the modified words back together
  const modifiedUserName = modifiedWords.join(" ");

  return modifiedUserName;
};
