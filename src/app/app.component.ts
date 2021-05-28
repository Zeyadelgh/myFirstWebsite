import { Component } from '@angular/core';
import { todoItem } from './todoItem';
import { todoList } from './todoList';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo!';

  private list = new todoList("Zayed",
    [
      new todoItem("Grocery Shopping", true),
      new todoItem("Go to Gym", false),
      new todoItem("Wash dishes")
    ]);

  get userNames(): string {
    return this.list.user;
  }

  get itemCount(): number {
    return this.items.length;
  }

  get items(): readonly todoItem[] {
    return this.list.items.filter(item => this.showComplete || !item.complete);
  }

  addItem(newItem: string) {
    this.list.addItem(newItem);
  }

  changeName(newName: string) {
    this.list.name = newName;
  }
  showComplete: boolean = false;
}

