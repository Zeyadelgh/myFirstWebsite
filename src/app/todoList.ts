import { todoItem } from "./todoItem";

export class todoList {

    constructor(public user: string, private todoItem: todoItem[] = []) {

    }

    get items(): readonly todoItem[] {
        return this.todoItem;
    }
    
    set name(newName: string) {
        this.user = newName;
    }

    addItem(task: string) {
        this.todoItem.push(new todoItem(task));
    }
}