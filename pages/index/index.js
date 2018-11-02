const app = getApp()
const {
  Canvas,
  CanvasItem
} = require('../../utils/canvas.js')

let context = null
Page({
  data: {
    startX: 0,
    startY: 0,
    data: [{
        url: '../../1.png',
        width: 200,
        height: 200
      },
      {
        url: '../../2.png',
        width: 200,
        height: 200
      }
    ]
  },
  bindViewTap: function() {

  },
  onLoad: function() {
    this.initCanvas()
  },
  initCanvas() {
    context = new Canvas('decorate')
  },
  addImg(e) {
    const img = e.target.dataset.item

    let item = new CanvasItem({
      url: img.url,
      width: img.width,
      height: img.height,
      x: 100,
      y: 100
    })

    context.addList(item)
    context.draw()
  },
  touchStart(e) {
    console.log('touchstart')
    const {
      x,
      y
    } = e.touches[0]
    context.touchStart(x, y)
  },
  touchMove(e) {
    console.log('touchmove')
    const {
      x,
      y
    } = e.touches[0]

    context.touchScale(x, y)
  },
  touchEnd() {
    console.log('touchend')
    context.touchEnd()
  },
  catchtouchmove() {}
})