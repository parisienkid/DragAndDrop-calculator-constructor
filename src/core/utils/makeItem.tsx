

export default function makeItem(currentItem: number) {
    let addedItem = {};
    switch(currentItem) {
        case 1:
            return addedItem = {id: 1, name: 'total'}
        case 2:
            return addedItem = {id: 2, name: 'operators'}
        case 3: 
            return addedItem = {id: 3, name: 'numbers'}
        case 4:
            return addedItem = {id: 4, name: 'equal'}
        default:
            return addedItem = {}
    }
}