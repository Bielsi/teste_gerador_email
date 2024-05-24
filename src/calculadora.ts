export class email {}
function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  function getRandomString(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = getRandomInt(0, characters.length - 1);
      result += characters[randomIndex];
    }
    return result;
  }
  
  export function generateRandomGmailEmail(name: string, server: string): string {
    const emailName = name; // Tamanho da parte do nome do email
    const gmailDomain = server; // Domínio fixo do Gmail
    const tld = "com"; // TLD fixo (.com)
  
    //const emailName = getRandomString(emailNameLength);
    const email = `${emailName}@${gmailDomain}.${tld}`;
  
    return email;
  }
  
  console.log(generateRandomGmailEmail('lucas', 'gmail'));  