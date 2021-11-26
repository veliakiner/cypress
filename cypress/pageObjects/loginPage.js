class LoginPage {
  usernameField() {
    return cy.get("#user-name");
  }

  passwordField() {
    return cy.get("#password");
  }

  submit() {
    return cy.get('[data-test="login-button"]').click();
  }
  login(username, password) {
    this.usernameField().type(username);
    this.passwordField().type(password);
    this.submit();
  }
}
export default new LoginPage();
