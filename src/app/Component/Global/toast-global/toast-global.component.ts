import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { ToastService } from 'src/app/Service/Toast/toast.service';



@Component({ selector: 'ngbd-toast-global', templateUrl: './toast-global.component.html' })
export class NgbdToastGlobal implements OnDestroy {
	constructor(public toastService: ToastService) {}

	showStandard() {
		this.toastService.show('I am a standard toast');
	}

	showSuccess() {
		this.toastService.show('I am a success toast', { classname: 'bg-success text-light', delay: 3000 });
	}

	showDanger(dangerTpl: string | TemplateRef<any>) {
		this.toastService.show(dangerTpl, { classname: 'bg-danger text-light', delay: 3000 });
	}

	ngOnDestroy(): void {
		this.toastService.clear();
	}
}