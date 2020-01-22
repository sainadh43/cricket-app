import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTabsModule,
  MatFormFieldModule,
  MatToolbarModule,
  MatButtonModule,
  MatMenuModule,
  MatRadioModule,
  MatInputModule,
  MatCardModule,
  MatIconModule
} from "@angular/material";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { StasticsComponent } from "./stastics/stastics.component";
import { MatchesComponent } from "./matches/matches.component";
import { HomeComponent } from "./home/home.component";
import { PlayersComponent } from "./players/players.component";
import { BattingRecordsComponent } from "./stastics/batting-records/batting-records.component";
import { BowlingRecordsComponent } from "./stastics/bowling-records/bowling-records.component";
import { FieldingRecordsComponent } from "./stastics/fielding-records/fielding-records.component";
import { PlayerRankingsComponent } from "./stastics/player-rankings/player-rankings.component";
import { FixturesComponent } from "./matches/fixtures/fixtures.component";
import { RecentResultsComponent } from "./matches/recent-results/recent-results.component";
import { SearchPlayersComponent } from "./players/search-players/search-players.component";
import { AddPlayersComponent } from "./players/add-players/add-players.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";

@NgModule({
  declarations: [
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    StasticsComponent,
    MatchesComponent,
    HomeComponent,
    PlayersComponent,
    BattingRecordsComponent,
    BowlingRecordsComponent,
    FieldingRecordsComponent,
    PlayerRankingsComponent,
    FixturesComponent,
    RecentResultsComponent,
    SearchPlayersComponent,
    AddPlayersComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule
  ]
  // exports: [
  //   MatTabsModule,
  //   MatToolbarModule,
  //   MatRadioModule,
  //   MatButtonModule,
  //   MatMenuModule,
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatCardModule,
  //   MatIconModule]
})
export class DashboardModule {}
