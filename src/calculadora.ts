export class Email {}

  export function generateRandomGmailEmail(name: string, server: string): string {
    const emailName = name; // Tamanho da parte do nome do email
    const gmailDomain = server; // Domínio fixo do Gmail
    const tld = "com"; // TLD fixo (.com)
  
    //const emailName = getRandomString(emailNameLength);
    const email = `${emailName}@${gmailDomain}.${tld}`;
  
    return email;
  }
  
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
  
  export function getemails(qtd: number): string[] {
    let result: string[] = [];
    for (let i = 0; i < qtd; i++) {
      let emailname = getRandomString(6);
      let email = emailname + "@gmail.com"
      result.push(email);
    }
    console.log(result);
    return result;
    
  }

  console.log(generateRandomGmailEmail('lucas', 'gmail'));  