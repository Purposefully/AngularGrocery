import { isNgTemplate } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        'app.grocery.css',
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
    task = {
        name: '',
        id: 0
    };
    tasks: { id: number, name: string, strike:boolean } [] = [];

    onClick() {
        if(this.task.id == 0) {
            this.tasks.push({ 
                id: (new Date()).getTime(),
                name: this.task.name,
                strike: false
            });
        }

        this.task = {
            name: '',
            id: 0
        };
    }

    onEdit(item: {id: number, name: string}) {
        this.task = item;
    }

    onDelete(item: {id: number, name: string}) {
        for(var i = 0; i < this.tasks.length; i++) {
            if(item.id == this.tasks[i].id) {
                this.tasks.splice(i,1);
                break;
            }
        }
    }

    onStrike(item: {id: Number, name: string, strike: boolean}) {
        for(var i = 0; i < this.tasks.length; i++) {
            if(item.id == this.tasks[i].id) {
                if(this.tasks[i].strike) {
                    this.tasks[i].strike = false;
                } else {
                this.tasks[i].strike = true;
                }
            }
            break;
        }
    }
}
