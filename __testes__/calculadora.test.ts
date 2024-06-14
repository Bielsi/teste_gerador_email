import {generateRandomGmailEmail, getemails} from "../src/calculadora";

  describe("Gerador de email", () => {
    test(" Lucas@gmail.com ", () => {
        expect(generateRandomGmailEmail("Lucas", "gmail")).toBe("Lucas@gmail.com");
    });

    test(" criar 10 emails", () => {
        expect(getemails(10).length).toBe(10);
    });

    test(" criar 5 emails", () => {
        expect(getemails(5).length).toBe(5);
    });
    

  });