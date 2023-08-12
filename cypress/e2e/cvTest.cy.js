describe("Makecv", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should render the PersonalInfo component on page 0", () => {
    cy.get("h1").contains("Personal Info");
  });

  it("should render the Experience component on page 1", () => {
    cy.get("h1").contains("Work experience");
  });

  it("should render the Education component on page 2", () => {
    cy.get("h1").contains("Educational Background");
  });
});
