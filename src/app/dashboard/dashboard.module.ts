import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTabsModule, MatMenuModule } from "@angular/material";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { HomeComponent } from "./home/home.component";
import { MatchesComponent } from "./matches/matches.component";
import { StasticsComponent } from "./stastics/stastics.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { PlayersComponent } from "./players/players.component";
import { DashboardComponent } from "./dashboard.componenet";
import { FixturesComponent } from "./matches/fixtures/fixtures.component";
import { RecentResultsComponent } from "./matches/recent-results/recent-results.component";
import { BowlingRecordsComponent } from "./stastics/bowling-records/bowling-records.component";
import { BattingRecordsComponent } from "./stastics/batting-records/batting-records.component";
import { FieldingRecordsComponent } from "./stastics/fielding-records/fielding-records.component";
import { PlayerRankingsComponent } from "./stastics/player-rankings/player-rankings.component";

@NgModule({
  declarations: [
    HomeComponent,
    MatchesComponent,
    StasticsComponent,
    LoginComponent,
    RegisterComponent,
    PlayersComponent,
    DashboardComponent,
    FixturesComponent,
    RecentResultsComponent,
    BowlingRecordsComponent,
    BattingRecordsComponent,
    FieldingRecordsComponent,
    PlayerRankingsComponent
  ],
  imports: [CommonModule, DashboardRoutingModule, MatTabsModule, MatMenuModule],
  exports: [MatTabsModule, MatMenuModule]
})
export class DashboardModule {}
