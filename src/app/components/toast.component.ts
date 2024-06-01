import { NoteStatus } from '@Types/notification.type';
import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'fortes-toast',
  standalone: true,
  styleUrl: 'toast.component.scss',
  template: ` <ng-content /> `,
})
export class ToastComponent {
  @HostBinding('class')
  @Input()
  type: NoteStatus = 'info';
}
