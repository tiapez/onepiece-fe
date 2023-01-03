import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Component/User/sign-up/sign-up.component';
import { UserProfileComponent } from './Component/User/userProfile/user-profile.component';
import { CardListComponent } from './Component/Card/card-list/card-list.component';
import { SignInComponent } from './Component/User/sign-in/sign-in.component';
import { HomeComponent } from './Component/Home/home.component';
import { DeckModifyComponent } from './Component/Deck/DeckModify/deck-modify.component';
import { DeckListComponent } from './Component/Deck/DeckList/deck-list.component';
import { DeckCreateComponent } from './Component/Deck/DeckCreate/deck-create.component'; 
import { ImportCardComponent } from './Component/Excel/import-card/import-card.component';
import { 
  AuthGuardService as AuthGuard 
} from './Component/Auth/auth-guard.service';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "signUp", component: SignUpComponent},
  {path: "signIn", component: SignInComponent},
  {path: "userProfile", component: UserProfileComponent, canActivate : [AuthGuard]},
  {path: "cardList", component: CardListComponent},
  {path: "userCard/classic", component: CardListComponent, canActivate : [AuthGuard]},
  {path: "userCard/details", component: CardListComponent, canActivate : [AuthGuard]},
  {path: "deck/cardList", component: DeckModifyComponent, canActivate : [AuthGuard]},
  {path: "deck", component: DeckListComponent, canActivate : [AuthGuard]},
  {path: "deck/create", component: DeckCreateComponent, canActivate : [AuthGuard]},
  {path: "deck/modify", component: DeckCreateComponent, canActivate : [AuthGuard]},
  {path: "import", component: ImportCardComponent, canActivate : [AuthGuard]},
  {path : "", redirectTo : "home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
