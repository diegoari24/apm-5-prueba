import { Component } from '@angular/core';
import { User } from '../model/user';
const USERS: User[] = [
    {
        id: 1,
        name: "user#1",
        address: "#123",
        phone: 12345
	
    },
    {
        id: 2,
        name: "user#2",
        address: "#123",
        phone: 12345
	
    },
    {
        id: 3,
        name: "user#3",
        address: "123",
        phone: 12345
	
    },
];

@Component({
  selector: 'my-app',
  templateUrl: 'app/templates/user.html'
})
export class AppComponent {

    title: string = "Mis usuarios";
    selected: User;
    users: User[] = USERS;
    onSelect(user: User) {
        this.selected = user;
    }
}