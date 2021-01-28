const { User } = require("../../src/app/models");

describe("Authentication", () => {
  it("should sum two numbers", async () => {
    const user = await User.create({
      name: "Júnior",
      email: "junior@email.com",
      password_hash: "5asd46as",
    });

    console.log(user);

    expect(use.email).toBe("junior@email.com");
  });
});
