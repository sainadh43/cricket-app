
<div fxFlexFill fxLayout="column">
  <div fxFlex="16.5" style="background-color:turquoise;">
      <img [src]="saulogo" alt=''>
  </div>
  <div fxFlex="6.5">
    <nav mat-tab-nav-bar mat-align-tabs="end" class="alignright">
      <a mat-tab-link [routerLink]="['/dashboard/home']" routerLinkActive #rla1="routerLinkActive" [active]="rla1.isActive">
        HOME
      </a>
      <a mat-tab-link [matMenuTriggerFor]='matchMenu'>
        MATCHES
      </a>
      <a mat-tab-link [matMenuTriggerFor]='playerMenu'>
        PLAYERS
      </a>
      <a mat-tab-link [matMenuTriggerFor]='staticMenu'>
        STASTICS
      </a>
      <a mat-tab-link [routerLink]="['/dashboard/login']" routerLinkActive #rla5="routerLinkActive"
        [active]="rla5.isActive">
        LOGIN
      </a>
      <a mat-tab-link [routerLink]="['/dashboard/register']" routerLinkActive #rla6="routerLinkActive"
        [active]="rla6.isActive">
        REGISTER
      </a>
    </nav>
    <mat-menu #playerMenu="matMenu" class="customize">
      <a mat-menu-item [routerLink]="['/dashboard/players/search-players']" routerLinkActive="active" class="menu">SEARCH
        PLAYERS</a>
      <a mat-menu-item [routerLink]="['/dashboard/players/add-players']" routerLinkActive="active" class="menu">ADD
        PLAYERS </a>
    </mat-menu>
    <mat-menu #matchMenu="matMenu" class="customize">
      <a mat-menu-item [routerLink]="['/dashboard/matches/fixtures']" routerLinkActive="active" class="menu">FIXTURES</a>
      <a mat-menu-item [routerLink]="['/dashboard/matches/recent-results']" routerLinkActive="active" class="menu">RECENT
        RESULTS </a>
    </mat-menu>
    <mat-menu #staticMenu="matMenu" class="customize">
      <a mat-menu-item [routerLink]="['/dashboard/stastics/batting-records']" routerLinkActive="active" class="menu">BATTING
        RECORDS</a>
      <a mat-menu-item [routerLink]="['/dashboard/stastics/bowling-records']" routerLinkActive="active" class="menu">BOWLING
        RECORDS</a>
      <a mat-menu-item [routerLink]="['/dashboard/stastics/fielding-records']" routerLinkActive="active"
        class="menu">FIELDING RECORDS</a>
      <a mat-menu-item [routerLink]="['/dashboard/stastics/player-rankings']" routerLinkActive="active" class="menu">PLAYER
        RANKINGS</a>
    </mat-menu>
  </div>
  <div fxFlex="77" class="router-div">
    <router-outlet></router-outlet>
  </div>

</div>
