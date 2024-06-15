const {Builder, By, Key} = require("selenium-webdriver")
require("dotenv").config()

async function openSite(){
    try{
        let driver = await new Builder().forBrowser("chrome").build()
        await driver.manage().window().maximize()
        await driver.get("https://www.borgonove.tech/index.html")
        await driver.sleep(3000)

        // Navegação
        const navItem1 = await driver.findElements(By.className("dropdown"))
        await navItem1[1].click()
        await driver.sleep(3000)
        const listJs = await driver.findElement(By.xpath("//a[@href='/pages/lista-algoritmo.html']"))
        await listJs.click()
        await driver.sleep(5000)

        const navItem2 = await driver.findElements(By.className("dropdown"))
        await navItem2[1].click()
        await driver.sleep(3000)
        const listAlgoritmos = await driver.findElement(By.xpath("//a[@href='/pages/listajs.html']"))
        await listAlgoritmos.click()
        await driver.sleep(5000)

        const homePage = await driver.findElement(By.xpath("//a[@href='/index.html']"))
        await homePage.click()
        await driver.sleep(3000)

        // Calculando IMC
        const navItem3 = await driver.findElements(By.className("dropdown"))
        await navItem3[2].click()
        await driver.sleep(3000)
        const imcPage = await driver.findElement(By.xpath("//a[@href='/pages/imc.html']"))
        await imcPage.click()
        await driver.sleep(5000)

        const buttonCalc = await driver.findElements(By.className("btn"))
        await buttonCalc[0].click()
        await driver.executeScript("window.scrollBy(0, 300);")
        await driver.sleep(3000)
        await driver.executeScript("window.scrollBy(0, -300);")
        await driver.sleep(5000)

        // Inserindo dados nos campos  
        const navItem4 = await driver.findElements(By.className("dropdown"))
        await navItem4[2].click()
        const buscaCepPage = await driver.findElement(By.xpath("//a[@href='/pages/buscaCep.html']"))
        await buscaCepPage.click()
        await driver.sleep(3000)
        const inputCep = await driver.findElement(By.className("form-control"))
        await inputCep.sendKeys("69035801")
        await driver.sleep(3000)

        // Buscando CEP
        const searchCepButton = await driver.findElements(By.className("btn"))
        await searchCepButton[0].click()
        await driver.executeScript("window.scrollBy(0, 300);")
        await driver.sleep(3000)
        await driver.executeScript("window.scrollBy(0, -300);")
        await driver.sleep(3000)

        // Limpando respostas
        const cleanAnswers = await driver.findElements(By.className("btn"))
        await cleanAnswers[1].click()
        await driver.executeScript("window.scrollBy(0, 300);")
        await driver.sleep(3000)
        await driver.executeScript("window.scrollBy(0, -300);")
        await driver.sleep(3000)

        // Contatando
        const contact = await driver.findElement(By.xpath("//a[@href='/pages/contact.html']"))
        await contact.click()

        await driver.sleep(2000)

        const iframe = await driver.findElement(By.css("iframe"))
        await driver.switchTo().frame(iframe)
        await driver.sleep(2000)
        const form = await driver.findElement(By.css("form"))
        const inputField = await form.findElements(By.css("input"))
        await inputField[1].sendKeys("Mauro")
        await inputField[2].sendKeys("mfelixpl@gmail.com")
        const textArea = await form.findElement(By.css("textarea"))
        await textArea.sendKeys("Consegui kkkk")

        await driver.sleep(5000)
        const sendButton = await driver.findElement(By.css("button[type='submit']"))
        await sendButton.sendKeys(Key.ENTER)
        await driver.sleep(3000)

        //Acessando rota não existente
        await driver.get("https://www.borgonove.tech/nao-existo")
        await driver.sleep(5000)
        const backToHomeButton = await driver.findElement(By.className("btn"))
        await backToHomeButton.sendKeys(Key.ENTER)
    } catch(e){
        console.log(e)
    }
}
openSite()