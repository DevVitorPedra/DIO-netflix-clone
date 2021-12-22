$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

const btnPlay =  document.getElementById('play')
const audio = document.getElementById('audio')
const playBtn = document.getElementById('icon')
let playStop = 0
btnPlay.addEventListener('click',()=>{
    if(playStop ===0){
        audio.play()
        playStop=1
            playBtn.classList.remove('bi-play-fill')
            playBtn.classList.add('bi-pause-circle')
    }else{
        audio.pause()
        playStop =0
        playBtn.classList.add('bi-play-fill')
        playBtn.classList.remove('bi-pause-circle')

    }
})