import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./components/login/login.component";
import { QuizComponent } from "./components/quiz/quiz.component";
import { MaterialModule } from "../material.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule } from "@angular/forms";
import { QuizContainerComponent } from "./components/quiz/quiz-container/quiz-container.component";
import { BlockUIModule } from "ng-block-ui";
import { AuthGuard } from "./auth.guard";

const APP_ROUTES: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [AuthGuard]

  },
  {
    path: "quiz",
    component: QuizComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    QuizComponent,
    QuizContainerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(APP_ROUTES),
    MaterialModule,
    ReactiveFormsModule,
    BlockUIModule.forRoot({ message: "Incorrect answer! You are blocked for 2 minutes." })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
