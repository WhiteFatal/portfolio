function initMatrix(canvas) {
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let canvasWidth = window.innerWidth;
  let canvasHeight = window.innerHeight;
  let elementCount = 5000;
  let fallingElementArray = [];
  let fontSize = 18;
  let columnNumber = canvasWidth / fontSize;
  let frames = 0;

  let symbolArray = [
    'ა', 'ბ', 'გ', 'დ', 'ე', 'ვ', 'ზ', 'თ', 'ი', 'კ', 'ლ', 'მ', 'ნ', 'ო', 'პ', 'ჟ', 'რ', 'ს', 'ტ', 'უ', 'ფ', 'ქ', 'ღ', 'ყ', 'შ', 'ჩ', 'ც', 'ძ', 'წ', 'ჭ', 'ხ', 'ჯ', 'ჰ', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
  ];

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  class FallingSymbol
  {
    constructor (x, y) {
        {
            this.x = x;
            this.y = y;
        }   
    }

    draw (ctx) {
        this.value = symbolArray[Math.floor(Math.random() * (symbolArray.length - 1))];
        this.speed = (Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;

        ctx.fillStyle = "rgba(0, 255, 0)";
        ctx.font = fontSize + "px san-serif";
        ctx.fillText(this.value, this.x, this.y);
        this.y += this.speed;

        if (this.y > canvasHeight) {
            this.draw.y = Math.random() * canvasHeight / 2 - 50;
            this.x = Math.floor(Math.random() * columnNumber) * fontSize;
            this.speed = (-Math.random() * fontSize * 3) / 4 + (fontSize * 3) / 4;
        }
    }
}

let update = () => {
    if (fallingElementArray.length < elementCount) {
        let fallingElement = new FallingSymbol (
            Math.floor(Math.random() * columnNumber) * fontSize,
            (Math.random() * canvasHeight) / 2 - 50
        )           
        fallingElementArray.push(fallingElement);
    }

    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    for (let i = 0; i < fallingElementArray.length && frames % 2 ==0; i++) {
        fallingElementArray[i].draw(ctx);
    }
    requestAnimationFrame(update);
    frames++;
  }

  update();
}