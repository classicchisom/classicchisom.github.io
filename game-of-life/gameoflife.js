class GameOfLife {
  constructor() {
  }

  next(shape) {
    let neighbours = {};
     console.log(shape);
    for (let i = 0; i < shape.length; i = i + 1){
      let cell = shape[i];
      let x = cell[0];
      let y = ccell[1];
// Top-left
      let key = 'c' + (x - 1) + ',' + (y - 1);
      if(neighbours[key]) {
        neighbours[key].n = neighbours[key].n + 1;
      } else {
        neighbours[key] = {
          n: 1,
          cell: [x - 1, y - 1],
        };
      }
// Top
      key = 'c' + (x) + ',' + (y - 1);
      if(neighbours[key]) {
        neighbours[key] = {
          n: 1,
          cell: [x, y - 1],
        };
      }
// final
key = 'c' + (x + 1) + ',' + (y - 1);
if(neighbours[key]) {
  neighbours[key] = {
    n: 1,
    cell: [x + 1, y - 1],
  };
}
key = 'c' + (x + 1) + ',' + (y + 1);
if(neighbours[key]) {
  neighbours[key] = {
    n: 1,
    cell: [x + 1, y + 1],
  };
}
// bottom
key = 'c' + (x) + ',' + (y + 1);
if(neighbours[key]) {
  neighbours[key] = {
    n: 1,
    cell: [x, y + 1],
  };
}
//bottom left
key = 'c' + (x - 1) + ',' + (y + 1);
if(neighbours[key]) {
  neighbours[key] = {
    n: 1,
    cell: [x, y - 1],
  };
}
key = 'c' + (x - 1) + ',' + (y);
if(neighbours[key]) {
  neighbours[key] = {
    n: 1,
    cell: [x - 1, y],
  };
}
}
 for (let i = 0; i < shape.length; i = i + 1) {
   let cell = shape [i];
   let x = cell [0];
   let y = cell [1];

   let key = 'c' + x + ',' + y;
   if(neighbours[key]) {
     neighbours[key]. populated = true;
   }
 }

 let nextShape = [];
 for(let key in neighbours) {
   let currentNeighbour = neighbours[key];
   let numOfNeighbours = currentNeighbour.n;
   let populated = currentNeighbour.populated;
 }
 // For rulews each cell with twwo 0r three neighbours survives becomes populated.
    if(numOfNeighbours == 2 || 3) numOfNeighbours {
      nextShape.push(cell);
    } else if( !populated && numOfNeighbours === 3)
        nextShape.push(cell);
    }
  }
    return nextShape;

class Canvas {
  constructor(container) {
    let canvasElement = document.createElement('canvas');
    this.obj = canvasElement;
    this.pixelWidth = 803;
    this.pixelHeight = 506;
    container.appendChild(canvasElement);
    this.ctx = canvasElement.getContext('2d');
    this.setGridSize(11);
    canvasElement.width = this.pixelWidth;
    canvasElement.height = this.pixelHeight;
  }

  draw(cells) {
let ctx = this.ctx;


    ctx.lineWidth = 1;
    ctx.strokeStyle =" #999";
    //ctx.fillRect(0,0, this.pixelWidth, this.pixelHeight);
      for(let i = this.cellSize; i < this.pixelHeight ;i = i + this.cellSize) {
        ctx.beginPath();
        ctx.moveTo(0, i + 0.5);
        ctx.lineTo(this.pixelWidth, i + 0.5);
        ctx.stroke();
      }
      for(let i = this.cellSize; i < this.pixelWidth ;i = i + this.cellSize) {
        ctx.beginPath();
        ctx.moveTo(i + 0.5, 0);
        ctx.lineTo(i + 0.5, this.pixelHeight);
        ctx.stroke();
      }

  this.ctx.fillStyle = "yellow";
      for(let i = 0; i < cells.length; i = i + 1) {
        let cell =  cells[i];
        let x = cell[0];
        let y = cell[1];
        this.ctx.fillRect(x * this.cellSize + 1, y * this.cellSize + 1, this.cellSize - 1, this.cellSize - 1)
      }

  }

  click(fn) {
    this.obj.addEventListener('click', (clickEvent) => {
      let clientX = clickEvent.clientX;
      let clientY = clickEvent.clientY;
      let rect = this.obj.getBoundingClientRect();

      let canvasX = clientX - rect.left;
      let canvasY = clientY - rect.top;

      let cellX = Math.floor(canvasX / this.cellSize);
      let cellY = Math.floor(canvasY / this.cellSize);
        console.log(cellX);
      fn({cellX: cellX, cellY: cellY});

    });
  }

  getDimension() {
  }

  getGridSize() {
  }

  setGridSize(size) {
    this.cellSize = size;
  }
}

class Shape {
  constructor(canvas) {
    this.canvas = canvas;
    this.current = [];
    this.collection = {};
  }

  get() {
  }

  set(shape)  {
  }

  copy(shape) {
  }

  redraw() {
    this.canvas.draw(this.current)
  }

  center() {
  }

  offset(dx, dy) {
  }

  toggle(cell) {
    this.current.push(cell);
    this.redraw();  }
}

class Controls {
  constructor(canvas, shape, gameOfLife) {
    this.canvas = canvas;
    this.shape = shape;
    this.gameOfLife = gameOfLife;
    this.generation = 0;
  }

  init(shapes) {
    this.canvas.click((event) => {
      this.shape.toggle([event.cellX, event.cellY]);
      console.log(event);
    });
    let el = document.getElementById('next');
    el.addEventListener('click', () => {
      this.next();
    });
  }

  setGeneation(gen) {
  }

  animate() {
  }

  next() {
    let anything = this.shape.get();
    let updateAnything = this.gameOfLife.next(anything);
    this.shape.set(updateAnything);
    this.shape.redraw();
  }
}


let canvasElement = document.getElementById('canvas-div');
let canvas = new Canvas(canvasElement);
let shape = new Shape(canvas);
let gameOfLife = new GameOfLife();
let controls = new Controls(canvas, shape, gameOfLife);
canvas.draw([]);
controls.init();
