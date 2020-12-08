var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"auth","loadChildren":"./auth/auth.module#AuthModule","canActivate":["AuthGuard2"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/auth/auth-routing.module.ts","module":"AuthRoutingModule","children":[{"path":"","component":"NbAuthComponent","children":[{"path":"login","component":"LoginComponent"},{"path":"register","component":"RegisterComponent"}]}],"kind":"module"}],"module":"AuthModule"}]},{"path":"dashboard","loadChildren":"./dashboard/dashboard.module#DashboardModule","canActivate":["AuthGuard"],"children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/dashboard/dashboard-routing.module.ts","module":"DashboardRoutingModule","children":[{"path":"","component":"DashboardComponent","children":[{"path":"main","component":"MainComponent"},{"path":"editor","component":"EditorComponent"},{"path":"compete","component":"CompetingComponent"},{"path":"problem","component":"ProblemComponent"},{"path":"contest","component":"ContestsComponent"},{"path":"**","redirectTo":"/dashboard/main","pathMatch":"full"}]}],"kind":"module"}],"module":"DashboardModule"}]},{"path":"home","component":"HomeComponent"},{"path":"**","redirectTo":"/home","pathMatch":"full"}],"kind":"module"}]}