import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo-find-global',
  templateUrl: './promo-find-global.component.html',
  styleUrls: ['./promo-find-global.component.css']
})
export class PromoFindGlobalComponent {

  constructor() { }

  promo_pack_1 = ['001', '002', '003', '004', '005'];
  tournament_pack_1 = ['006', '007', '008', '009', '010'];
  winner_pack_1 = ['006a', '007a', '008a', '009a', '010a'];
  event_pack_1 = ['028', '029', '030', '031', '032'];
  uta_deck = ['011','012','013','014','015','016','017','018','019','020','021','022','023'];


  tutorial = "<a href='https://en.onepiece-cardgame.com/events/2022/officialevents/tutorial_at_store.php' target='_blank'> Tutorial at store Mid-August, 2022~ </a>"

  store_tournament_1 = "<a href='https://en.onepiece-cardgame.com/events/2022/officialevents/store_tournament_vol1.php' target='_blank'> Official Store Tournament Vol. 1 December 2, 2022 – February 2023 </a>"

  pirates_party_22 = "<a href='https://en.onepiece-cardgame.com/events/2022/officialevents/pirates_party_vol1.php' target='_blank'> Pirates Party December 2022 – February 2023 </a>"

  treasure_cup_22 = "<a href='https://en.onepiece-cardgame.com/events/2023/officialevents/treasure_cup_february.php' target='_blank'> Treasure Cup February FEBRUARY 4 – FEBRUARY 25, 2023</a>"
}
