const pages = document.querySelectorAll('#page-01, #page-02, #page-03')

const openbtn = document.querySelector('#page-01-open-btn')
openbtn.addEventListener('click', () => {
  openbtn.getElementsByTagName('img')[0].classList.add('scale-[35]')
  pages[0].classList.add('opacity-0')
  setTimeout(() => {
    pages[0].classList.add('hidden')
    pages[1].classList.remove('hidden')
    setTimeout(() => {
      pages[1].classList.add('opacity-100')
      pages[1].classList.add('scale-[1]')
    }, 10)
  }, 600)
  //   pages[0].classList.add('hidden') // ? page-01 = 'none'
  //   pages[1].classList.remove('hidden')
})

const page02CatImg = document.querySelector('#page-02-cat-img')
const page02Frame1 = document.querySelector('#page-02-frame-1')
const page02Frame02 = document.querySelector('#page-02-frame-2')
page02CatImg.addEventListener('click', () => {
  page02Frame1.classList.add('translate-y-full')
  page02CatImg.classList.remove('bounce')
  setTimeout(() => {
    page02CatImg.classList.remove('top-[-12%]', 'left-1/2', '-translate-x-1/2')
    page02CatImg.classList.add(
      'rotate-[-175deg]',
      'right-0',
      'top-[100%]',
      '-translate-y-full',
    )
    setTimeout(() => {
      page02Frame02.classList.remove('top-0', '-translate-y-full')
      page02Frame02.classList.add('top-1/2', '-translate-y-1/2')
    }, 550)
  }, 100)
})

const page02btn = document.querySelector('#page-02-frame-2-btn')
page02btn.addEventListener('click', () => {
  pages[1].classList.remove('overflow-hidden')
  pages[1].classList.remove('opacity-100')
  page02btn.getElementsByTagName('img')[0].classList.add('scale-[35]')
  //   page02btn.getElementsByTagName('img')[0].classList.add('opacity-0')
  pages[1].classList.add('opacity-0') // 1
  setTimeout(() => {
    pages[1].classList.add('hidden') // 1
    pages[2].classList.remove('hidden') // 2
    setTimeout(() => {
      pages[2].classList.add('opacity-100')
      pages[2].classList.add('scale-[1]')
    }, 10)
  }, 600)
})

const audioPlayer = document.getElementById('audioPlayer')

function playAudio() {
  audioPlayer.play()
}
function pauseAudio() {
  audioPlayer.pause()
}
const playBtn = document.getElementById('play')
const pauseBtn = document.getElementById('pause')
playBtn.addEventListener('click', () => {
  playAudio()
  playBtn.classList.add('hidden')
  pauseBtn.classList.remove('hidden')
})
pauseBtn.addEventListener('click', () => {
  pauseAudio()
  pauseBtn.classList.add('hidden')
  playBtn.classList.remove('hidden')
})
