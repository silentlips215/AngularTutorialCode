import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { UserComponent } from './app/user/user.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
