import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = 'provide text';
  @Input() color: string = 'black';
  @Input() type: string = 'button';
  @Input() disabled: boolean = false;
  @Input() test: object = {};
  @Output() btnClick: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.btnClick.emit();
  }
}
