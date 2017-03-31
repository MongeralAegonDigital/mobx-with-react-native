import { observable } from 'mobx';

let index = 0

class ObserbableListStore {
    @observable list = []

    addListItem (item) {
        this.list.push({
            name: item,
            items: [],
            index
        })

        index++
    }

    removeListItem (item) {
        this.list = this.list.filter((l) => {
            return l.index !== item.index
        })
    }

    addItem(item, name) {
        this.list.forEach((l) => {
            l.items.push(name)
        })
    }
}

const observableListStore = new ObserbableListStore()
export default observableListStore
