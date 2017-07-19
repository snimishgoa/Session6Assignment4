import {Component, Input} from '@angular/core'

@Component({
  selector: 'app-child',
  template: '<p>Hello {{title}}!!</p>'    
})
export class ChildComponent{
    @Input() title: string;
}