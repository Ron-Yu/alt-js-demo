import Alt from 'alt'

const alt = new Alt()

// actions
class ListActionsGenerator {
  constructor() {
    this.generateActions('addItem', 'removeItem')
  }

  updateList(list) {
    return list
  }
}
const listActions = alt.createActions(ListActionsGenerator)

// stores
class ListStoreGenerator {
  constructor() {
    this.list = ['default item']

    // #1 explicit binding
    this.bindListeners({
      handleUpdateList: listActions.UPDATE_LIST,
    })

    // #2 inexplicit binding
    this.bindActions(listActions)
  }

  handleUpdateList(list) {
    this.list = list
  }

  addItem(item) {
    this.list = [...this.list, item]
  }

  onRemoveItem() {
    this.list = this.list.slice(0, -1)
  }
}
const listStore = alt.createStore(ListStoreGenerator, 'ListStoreGenerator')

// render
const anchorNode = document.querySelector('#anchor')
const button1Node = document.querySelector('#button1')
const button2Node = document.querySelector('#button2')
const button3Node = document.querySelector('#button3')

const renderList = (target, data) => {
  const list = data.list.map((item) => `<li>${item}</li>`).join('')

  target.innerHTML = `<ul>${list}</ul>`
}

listStore.listen((state) => {
  console.log({ state })
  renderList(anchorNode, state)
})

renderList(anchorNode, listStore.getState())

// action triggers
button1Node.addEventListener('click', () => {
  listActions.updateList(['updated item'])
})

button2Node.addEventListener('click', () => {
  listActions.addItem('new item')
})

button3Node.addEventListener('click', () => {
  listActions.removeItem()
})
