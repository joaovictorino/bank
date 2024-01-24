import { NumeroConta } from "../../src/model/NumeroConta";

describe("Numero Conta", () => {

    test("conta com seis digitos", async () => {
        const numeroConta: NumeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    });

    test("conta com cinco digitos", async () => {
        expect(() => { new NumeroConta("12345"); }).toThrow("número da conta inválido");
    });

    test("conta com sete digitos", async () => {
        expect(() => { new NumeroConta("1234567"); }).toThrow("número da conta inválido");
    });

    test("conta com valor que não seja digito", async () => {
        expect(() => { new NumeroConta("abc456"); }).toThrow("número da conta inválido");
    });


});