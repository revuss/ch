export function generateRandomKey(length: number = 5): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  const result = new Array(length);

  const randomValues = new Uint8Array(length);
  crypto.getRandomValues(randomValues);

  for (let i = 0; i < length; i++) {
    const randomIndex = randomValues[i] % charactersLength;
    result[i] = characters[randomIndex];
  }

  return result.join("");
}
