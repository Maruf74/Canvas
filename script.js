const canvas = document.querySelector("canvas");
const context = canvas.getContext('2d')


canvas.width = window.innerWidth
canvas.height = window.innerHeight

window.addEventListener('resize', function () {
    location.reload();
})


// rec

// context.fillRect(250, 420, 100, 100);
// context.fillStyle = 'red';

// context.fillRect(20, 42, 100, 100);
// context.fillRect(20, 420, 100, 100);





//line
// context.strokeStyle = 'red';

// context.beginPath();
// context.moveTo(50, 300);

// context.lineTo(300, 100);
// context.lineTo(200, 200);
// context.strokeStyle = 'blue';
// context.lineTo(200, 150);
// context.stroke();


//circle
// context.beginPath()
// context.arc(500, 500, 50, 0, Math.PI * 2);
// context.stroke();

// for (let i = 0; i < 100; i++) {
//     let x = Math.random() * window.innerWidth
//     let y = Math.random() * window.innerHeight

//     let r = Math.random() * 255
//     let g = Math.random() * 255
//     let b = Math.random() * 255

//     context.beginPath()
//     context.arc(x, y, 50, 0, Math.PI * 2);
//     context.fillStyle=`rgb(${r}, ${g}, ${b})` ;

//     context.fill();
// }





//  context.arc(500, 200, 50, 0, Math.PI * 2);
//  context.strokeStyle="red"
//  context.stroke();





function Circle(x, y, dx, dy, radius, r, g, b) {
    this.r = r
    this.g = g
    this.b = b
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius

    this.draw = function () {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = `rgb(${r}, ${g}, ${b})`;
        context.fill();
        console.log(x, y, dx, dy, radius);
    }
    this.update = function () {

        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx

        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy
        }
        this.x += this.dx;
        this.y += this.dy;

        this.draw()

    }
}

let circleArray = []


for (let i = 0; i < 100; i++) {

    let r = Math.random() * 255
    let g = Math.random() * 255
    let b = Math.random() * 255


    let radius = Math.random() * 30
    let x = 700
    let y = 350
    // let x = Math.random() * (innerWidth - radius * 2) + radius
    let dx = ((Math.random() - 0.5) * 8)

    // let y = Math.random() * (innerHeight - radius * 2) + radius
    let dy = ((Math.random() - 0.5) * 8)


    circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b))

}

console.log(circleArray);

function animate() {
    requestAnimationFrame(animate)

    context.clearRect(0, 0, innerWidth, innerHeight);


    for (let i = 0; i < circleArray.length; i++) {

        circleArray[i].update()
    }


}

animate()