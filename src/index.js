const button = document.getElementById('button')
button.style.backgroundColor = 'green'

class Box {
    constructor(y, speed, sprite, direction) {
        this.sprite = sprite
        this.boxTop = y
        this.speed = speed
        this.timer = null
        this.direction = direction
    }

    start() {
        this.timer = setInterval(() => {
            this.boxTop += this.direction * this.speed
            if (this.boxTop >= 300) this.direction = -1
            if (this.boxTop <= 30) this.direction = 1
            this.sprite.style.top = `${this.boxTop}px`
        }, 50)
    }

    stop() {
        clearInterval(this.timer)
    }
}

const box = new Box(30, 10, document.getElementById('box'), 1)

button.addEventListener('click', () => {
    if (button.style.backgroundColor == 'green') {
        button.style.backgroundColor = 'red'
        button.innerText = 'STOP'
        box.start()
    } else {
        button.style.backgroundColor = 'green'
        button.innerText = 'START'
        box.stop()
    }
})