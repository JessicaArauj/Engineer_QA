class addProduct {

    get #cardImage() {
        return $('id:addImagemContainer')
    }

    get #typeUpload() {
        return $('id:textWPMediaLibrary')
    }

    get #selectImage() {
        return $('(//android.widget.ImageView[@content-desc="Product image"])[1]')
    }

    get #buttonDone() {
        return $('id:menu_done')
    }

    get #buttonBack() {
        return $('~Navigate up')
    }

    get #productTitle() {
        return $('id:editText')
    }

    get #describeProduct() {
        return $('android=new UiSelector().text("Describe your product")')
    }

    get #describeSearch() {
        return $('id:visualEditor')
    }

    get #addValue() {
        return $('android= new UiSelector().text("Add price")')
    }

    get #normalValue() {
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #salesValue() {
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #storage() {
        return $('android= new UiSelector().text("Inventory")')
    }

    get #sku() {
        return $('id:edit_text')
    }

    get #gerenStock() {
        return $('id:manageStock_switch')
    }

    get #amount() {
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #send() {
        return $('android= new UiSelector().text("Shipping")')
    }

    get #weight() {
        return $('//android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #length() {
        return $('//android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #width() {
        return $('//android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #height() {
        return $('//android.widget.LinearLayout[4]/android.widget.FrameLayout/android.widget.EditText')
    }

    get #details() {
        return $('id:productDetail_addMoreButton')
    }

    get #buttonEnv() {
        return $('id:menu_done')
    }
    get #buttonOptions() {
        return $('~More options')
    }


    get #checkInStore() {
        return $('//android.widget.LinearLayout[2]/android.widget.LinearLayout/android.widget.RelativeLayout/android.widget.TextView')
    }

    async envProducts() {
        await this.#buttonEnv.click()
    }



    async addImage() {
        await this.#cardImage.click()
        await this.#typeUpload.click()
        await this.#selectImage.click()
        await this.#buttonDone.click()
        await this.#buttonBack.click()
    }


    async titleProduct() {
        await this.#productTitle.setValue('Casaco by Test')
    }



    async describeProduct() {
        await this.#describeProduct.click()
        await this.#describeSearch.setValue('Casaco teste automacao mobile')
        await this.#buttonBack.click()
    }



    async addValue() {
        await this.#addValue.click()
        await this.#normalValue.setValue('129.90')
        await this.#salesValue.setValue('69.99')
        await this.#buttonBack.click()
    }



    async addStorage() {
        await this.#storage.click()
        let sku = `${Math.floor(Math.random() * 1000)}`

        await this.#sku.setValue(sku)
        await this.#gerenStock.click()
        await this.#amount.setValue('1000')
        await this.#buttonBack.click()
    }

    async addDetails() {
        await this.#details.click()
    }

    async addSend() {
        await this.#send.click()
        await this.#weight.setValue('160')
        await this.#length.setValue('320')
        await this.#width.setValue('120')
        await this.#height.setValue('450')
        await this.#buttonBack.click()
    }

    async options() {
        await this.#buttonOptions.waitForExist({ timeout: 50000 })
        await this.#buttonOptions.click()
    }

    async checkProduct() {
        return await this.#checkInStore.getText()
    }
}

module.exports = new addProduct()