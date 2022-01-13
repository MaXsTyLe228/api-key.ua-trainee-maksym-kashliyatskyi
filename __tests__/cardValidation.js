describe("Card Validation", () => {
    test("1", () => {
        expect(cardValidation({
            title: "first card",
            index: "0.124124",
            description: "",
            idCol: 16472642
        })).toEqual(true);
    });
});

describe("Card Validation", () => {
    test("2", () => {
        expect(cardValidation({
            title: "asdf",
            index: "0.41414124",
            description: "1141414",
            idCol: 16472642
        })).toEqual(true);
    });
});

describe("Card Validation", () => {
    test("3", () => {
        expect(cardValidation({
            title: "0983",
            index: "0.4124",
            description: "some text",
            idCol: 16472642
        })).toEqual(true);
    });
});

describe("Card Validation", () => {
    test("4", () => {
        expect(cardValidation({
            title: "",
            index: "0.00001",
            description: "description",
            idCol: 16472642
        })).toEqual(true);
    });
});


const cardValidation = data => {
    if (typeof data.title !== "string" ||
        typeof data.index !== "string" ||
        isNaN(data.index) === true ||
        typeof data.description !== "string" ||
        typeof data.idCol !== "number")
        return false
    else return true
}