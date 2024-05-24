import {generateRandomGmailEmail} from "../src/calculadora";

    test(" Lucas@gmail.com ", () => {
        expect(generateRandomGmailEmail("Lucas", "gmail")).toBe("Lucas@gmail.com");
    });