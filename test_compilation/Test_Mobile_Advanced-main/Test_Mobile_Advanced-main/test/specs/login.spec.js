const homeScreen = require("../screens/home.screen")
const LoginScreen = require("../screens/login.screen")
const menuStore = require("../screens/ebacStore.screen")
const menuProducts = require("../screens/products.screen");
const addProduct = require("../screens/addProduct.screen");


let urlStore = 'http://lojaebac.ebaconline.art.br/'
let user = 'gerente'
let pass = 'GD*peToHNJ1#c$sgk08EaYJQ'

describe('Access and product registration in the Ebac-Shop store', () => {
   
    it('You must access and register a product', async () => {
        await homeScreen.accessLogin()
        await LoginScreen.insertUrlLoja(urlStore)
        await LoginScreen.continue()
        await LoginScreen.continueCredentials()
        await LoginScreen.login(user, pass)
        await LoginScreen.valida2FA()
        await LoginScreen.twoFactorLogin(pass)

        expect(await menuStore.logoStoreVisible()).toBeTruthy()
        expect(await menuStore.checkNameStore()).toEqual('EBAC - Shop')

        await menuStore.accessproducts()
        await menuProducts.typeProduct()   

        await addProduct.addImage()    
        await newProductScreeen.productTitle()      
        await newProductScreeen.describeProduct()      
        await newProductScreeen.addValue()
        await newProductScreeen.addStorage()
        await newProductScreeen.addDetails()
        await newProductScreeen.addSend()
        await newProductScreeen.addSend()
        await newProductScreeen.options()

        expect(await newProductScreeen.checkProduct()).toEqual('View product on store')
    });
})
