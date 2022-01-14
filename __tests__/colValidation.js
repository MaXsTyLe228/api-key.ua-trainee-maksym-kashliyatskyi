describe("Column Validation", () => {
    test("1", () => {
        expect(colValidation({
            title: "first column",
            index: "1"
        })).toEqual(true);
    });
});

describe("Column Validation", () => {
    test("2", () => {
        expect(colValidation({
            title: "1414",
            index: "0.214124"
        })).toEqual(true);
    });
});

describe("Column Validation", () => {
    test("3", () => {
        expect(colValidation({
            title: "test123",
            index: "0.94921"
        })).toEqual(true);
    });
});

describe("Column Validation", () => {
    test("4", () => {
        expect(colValidation({
            title: "title",
            index: "0.21421422"
        })).toEqual(true);
    });
});

const colValidation = (data) => {
    if (typeof data.title !== "string" ||
        typeof data.index !== "string" ||
        isNaN(data.index) === true)
        return false
    else return true
}