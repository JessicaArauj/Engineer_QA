class LoginScreen {
    get #storeAddress() { return $('android.widget.EditText') }
    get #continue() { return $('id:bottom_button') }
    get #continueCredentials () { return $('id:login_site_creds') }
    get #username() { return $('android=new UiSelector().text("Username")') }
    get #password() { return $('android=new UiSelector().text("Password")') }
    get #senha2fa() { return $('id:login_enter_password') }

    async insertUrlStore(url) {
        this.#storeAddress.setValue(url)
    }

    async continue() {
        await this.#continue.click()
    }

    async continueCredentials() {
        await this.#continueCredentials.click()
    }

    async login(username, password) {
        await this.#username.setValue(username)
        await this.#password.setValue(password)
        await this.#continue.click()
    }

    async valida2FA() {
        await this.#senha2fa.click()
    }

    async twoFactorLogin(password) {
        await this.#password.setValue(password)
        await this.#continue.click()
    }
}

module.exports = new LoginScreen()