/*

    Random Popping Circles
    Web Animation
    Developed by Code Jabp

*/

let canvas = document.getElementById('view_container');
let c = canvas.getContext('2d');

let randomColor = ['#757938', '#bc9b64', '#9db81c'];

class Circle {
    constructor(x, y, rad) {
        this.x = x;
        this.y = y;
        this.rad = rad;
        this.dir = true;
        this.color = randomColor[Math.round(Math.random() * randomColor.length)];
    }
    render() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.x, this.y, this.rad, 0, 2 * Math.PI);
        c.fill();
    }
    update() {
        if(this.rad <= 1) {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.color = randomColor[Math.round(Math.random() * randomColor.length)];
            this.dir = true;
        } else if (this.rad > Math.random() * 48) {
            this.dir = false;
        }
        if(this.dir) {
            this.rad += Math.random();
        } else {
            this.rad -= 0.2;
        }
    }
}

var abc = [];

for(let i = 0; i < 100; i++) {
    abc.push(new Circle(Math.random() * canvas.width, Math.random() * canvas.height, Math.random() * 16));
}

let loop = setInterval(() => {
    c.clearRect(0, 0, canvas.width, canvas.height)
        for (let i = 0; i < abc.length; i++) {
            abc[i].render();
            abc[i].update();
        }
}, 1000/60)

update()