const master = document.querySelector('#master')

master.addEventListener('input', function(){
    var pNoise = this.value
    var noise = this.value.length
    var current = document.getElementById('current')
    var maximum = document.getElementById('maximum')

    current.innerText = 140 - (noise)

    if(noise >= 1){
        document.getElementById('brn').classList.remove('btn-dis')
        document.getElementById('clear').classList.remove('btn-dis')
    }if(noise < 1){
         document.getElementById('brn').style.color = '#000'
         document.getElementById('clear').style.color = '#000'
        document.getElementById('brn').classList.add('btn-dis')
        document.getElementById('clear').classList.add('btn-dis')
    }if(noise > 140){
        document.getElementById('brn').classList.add('btn-dis')
    }

    if(noise >= 120 ){
        current.style.color = '#ff0000'
        maximum.style.color = '#ff0000'
        
    }
     else{
      current.style.color = '#000'
      maximum.style.color = '#000'
     }
})


const clear = document.getElementById('clear')

clear.addEventListener('click', function(){
    document.getElementById('master').value = ''
    current.innerText = 140
     
    document.getElementById('brn').classList.add('btn-dis')
    document.getElementById('clear').classList.add('btn-dis')
     current.style.color = '#000'
     maximum.style.color = '#000'
})








