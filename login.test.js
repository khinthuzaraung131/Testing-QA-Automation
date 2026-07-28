const login = require("./login");

test("Correct username and password", () => {
    expect(login("admin", "123")).toBe(true);
});

test("Wrong username", () => {
    expect(login("user", "123")).toBe(false);
});

test("Wrong password", () => {
    expect(login("admin", "456")).toBe(false);
});

test("Wrong username and password", () => {
    expect(login("user", "456")).toBe(false);
});
