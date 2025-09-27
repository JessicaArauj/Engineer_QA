class menuProducts {
    get #addProduct(){
        return $('id:addProductButton')
    }

    get #setTypeProduct(){
        return $('android=new UiSelector().text("Simple physical product")')
    }

    async typeProduct(){
        await this.#addProduct.click()
        await this.#setTypeProduct.click()
    }
}

module.exports = new menuProducts()