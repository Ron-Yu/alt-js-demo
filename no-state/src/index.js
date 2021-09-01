const centralList = ['default item']

class ListGenerator {
  constructor() {
    this.list = ['default item']
  }

  updateList(list) {
    this.list = list
  }

  addItem(item) {
    this.list = [...this.list, item]
  }

  removeItem() {
    this.list = this.list.slice(0, -1)
  }
}

const myList = new ListGenerator()

// render
const anchorNode = document.querySelector('#anchor')
const button1Node = document.querySelector('#button1')
const button2Node = document.querySelector('#button2')
const button3Node = document.querySelector('#button3')

const renderList = (target, data) => {
  const list = data.list.map((item) => `<li>${item}</li>`).join('')

  target.innerHTML = `<ul>${list}</ul>`
}

renderList(anchorNode, myList)

// action triggers
button1Node.addEventListener('click', () => {
  myList.updateList(['updated item'])
  renderList(anchorNode, myList)
})

button2Node.addEventListener('click', () => {
  myList.addItem('new item')
  renderList(anchorNode, myList)
})

button3Node.addEventListener('click', () => {
  myList.removeItem()
  renderList(anchorNode, myList)
})
