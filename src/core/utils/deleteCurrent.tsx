import { calcItemsI } from "../reducers/sortSlice";

export default function deleteCurrentItem(calcItems: calcItemsI, currentItem: number) {
    let newCalcItems = [...calcItems].map(array => {
        let newItems = {...array};
        newItems.items = newItems.items.filter(item => {
            if (item.id !== currentItem) return item
        });
        return newItems;
    });
    return newCalcItems;
}