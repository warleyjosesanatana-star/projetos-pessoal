document.addEventListener("DOMContentLoaded", function(){

    const botao = document.getElementById("botaoAmor")
    const mensagem = document.getElementById("mensagem")
    
    botao.addEventListener("click", function(){
    
    mensagem.innerHTML = "❤️ Heloiza, você é a melhor parte da minha vida. Eu te amo ❤️"
    mensagem.style.opacity = "1"
    
    })
    
    })
    
    /* animação de corações */
    
    function criarCoracao(){
    
    const heart = document.createElement("div")
    
    heart.classList.add("heart")
    
    heart.innerHTML = "❤️"
    
    heart.style.left = Math.random() * 100 + "vw"
    
    heart.style.fontSize = Math.random() * 30 + 10 + "px"
    
    document.body.appendChild(heart)
    
    setTimeout(() => {
    heart.remove()
    },8000)
    
    }
    
    document.addEventListener("DOMContentLoaded", function(){

        const botao = document.getElementById("botaoCarta")
        const texto = document.getElementById("texto")
        
        botao.addEventListener("click", function(){
        
        texto.innerHTML = "Heloiza, desde que você apareceu na minha vida tudo ficou mais bonito. Seu sorriso ilumina meus dias e seu carinho transforma meu mundo. ❤️"
        
        botao.innerHTML = "Eu te amo ❤️"
        
        })
        
        })
        
        /* chuva de corações */
        
        function criarCoracao(){
        
        const heart = document.createElement("div")
        
        heart.classList.add("heart")
        
        heart.innerHTML = "❤️"
        
        heart.style.left = Math.random() * 100 + "vw"
        
        heart.style.fontSize = Math.random() * 20 + 15 + "px"
        
        document.body.appendChild(heart)
        
        setTimeout(()=>{
        heart.remove()
        },6000)
        
        }
        
        setInterval(criarCoracao,400)(criarCoracao,300)