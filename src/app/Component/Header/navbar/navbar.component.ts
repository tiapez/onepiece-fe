import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { UserService } from 'src/app/Service/Utility/User/user.service';
import { AllCardService } from 'src/app/ServiceImpl/Card/all-card.service';
import { ToastServiceImpl } from 'src/app/ServiceImpl/Card/Toast/toast.service';

@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.html',
	styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
	constructor(private deviceService: DeviceDetectorService, public cardService: AllCardService
		, public router: Router, public userService: UserService,
		private cookieService: CookieService, private route: ActivatedRoute,
		private toastService: ToastServiceImpl) { }

	public navbarWidth: string = "";
	public userLogged: string = this.userService.getCookieNick();
	public navbarImg: string = this.cookieService.get("navType");
	error!: any;

	ngOnInit() {
		if (this.navbarImg == "")
			this.navbarImg = 'Light';
		this.error = this.route.snapshot.paramMap.get('error');
		if (this.error == 1) {
			this.toastService.userSaveSuccess();
		}
		console.log(this.userService.isLogged());
	}

	openNav() {
		this.navbarWidth = "100%";
	}

	closeNav() {
		if (this.deviceService.isMobile())
			this.navbarWidth = "0";
	}

	signUp() {
		if (this.userService.isLogged()) {
			this.router.navigate(['/UserProfile'])
		} else {
			this.router.navigate(['/sign-in'])
		}
	}

}
