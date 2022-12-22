import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from './Component/User/sign-up/sign-up.component';
import { UserProfileComponent } from './Component/User/userProfile/user-profile.component';
import { CardListComponent } from './Component/Card/card-list/card-list.component';
import { SignInComponent } from './Component/User/sign-in/sign-in.component';
import { HomeComponent } from './Component/Home/home.component';
import { DeckModifyComponent } from './Component/Deck/DeckModify/deck-modify.component';
import { DeckListComponent } from './Component/Deck/DeckList/deck-list.component';
import { DeckCreateComponent } from './Component/Deck/DeckCreate/deck-create/deck-create.component'; 

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "sign-up", component: SignUpComponent},
  {path: "sign-in", component: SignInComponent},
  {path: "UserProfile", component: UserProfileComponent},
  {path: "CardList", component: CardListComponent},
  {path: "UserCardClassic", component: CardListComponent},
  {path: "UserCardDetails", component: CardListComponent},
  {path: "Deck/CardList", component: DeckModifyComponent},
  {path: "Deck", component: DeckListComponent},
  {path: "Deck/Create", component: DeckCreateComponent},
  {path: "Deck/Modify", component: DeckCreateComponent},
  {path : "", redirectTo : "home", pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
