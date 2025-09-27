class homeScreen {
    get #urlStore(){
        return $('id:button_login_store')
    }

    async accessLogin(){
        await this.#urlStore.click()
    }
}

module.exports = new homeScreen()