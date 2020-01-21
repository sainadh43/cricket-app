import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.componenet";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { MatchesComponent } from "./matches/matches.component";
import { PlayersComponent } from "./players/players.component";
import { RegisterComponent } from "./register/register.component";
import { StasticsComponent } from "./stastics/stastics.component";
import { FixturesComponent } from "./matches/fixtures/fixtures.component";
import { RecentResultsComponent } from "./matches/recent-results/recent-results.component";
import { BattingRecordsComponent } from "./stastics/batting-records/batting-records.component";
import { BowlingRecordsComponent } from "./stastics/bowling-records/bowling-records.component";
import { FieldingRecordsComponent } from "./stastics/fielding-records/fielding-records.component";
import { PlayerRankingsComponent } from "./stastics/player-rankings/player-rankings.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "matches",
        component: MatchesComponent,
        children: [
          {
            path: "fixtures",
            component: FixturesComponent
          },
          {
            path: "recent-results",
            component: RecentResultsComponent
          },
          {
            path: "**",
            redirectTo: "fixtures",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "players",
        component: PlayersComponent
      },
      {
        path: "register",
        component: RegisterComponent
      },
      {
        path: "stastics",
        component: StasticsComponent,
        children: [
          {
            path: "batting-records",
            component: BattingRecordsComponent
          },
          {
            path: "bowling-records",
            component: BowlingRecordsComponent
          },
          {
            path: "fielding-records",
            component: FieldingRecordsComponent
          },
          {
            path: "player-rankings",
            component: PlayerRankingsComponent
          },
          {
            path: "**",
            redirectTo: "batting-records",
            pathMatch: "full"
          }
        ]
      },
      {
        path: "**",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
