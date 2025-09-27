class menuStore {
    get #logoStore() { return $('~My store') }

    get #nameStore() { return $('id:toolbar_subtitle') }

    async checkNameStore() {
        await this.#nameStore.waitForExist({ timeout: 50000 })
        return await this.#nameStore.getText()
    }

    async logoStoreVisible() {
        await this.#logoStore.waitForExist({ timeout: 50000 })
        return await this.#logoStore.isDisplayed()
    }

    get #storeProducts() { return $('id:products') }

    async accessproducts() { await this.#storeProducts.click() }
}

module.exports = new menuStore()