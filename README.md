# Villains

Angular 2 Tutorial using webpack, angular-cli and some other little differences.
Sponsored by: [Angular 2 Trainings in Switzerland](http://www.letsboot.com/angular2)

Live demo of the villains application: https://wingsuitist.github.io/villains/

We listed `cd src/app` in our shell snippets for you to make sure, that you are in the app folder, check where you are before you execute a command.

![villains logo](https://raw.githubusercontent.com/wingsuitist/villains/master/src/assets/villain.png)

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [Villains](#villains)
	- [General](#general)
	- [1. Install node and angular-cli](#1-install-node-and-angular-cli)
	- [2. Generate the base for our app](#2-generate-the-base-for-our-app)
		- [2.1. create villains app:](#21-create-villains-app)
		- [2.2. run and look at your app](#22-run-and-look-at-your-app)
		- [2.3. testing is important](#23-testing-is-important)
	- [3. Let's create our first villain](#3-lets-create-our-first-villain)
		- [3.1. Let's create the Villain class](#31-lets-create-the-villain-class)
		- [3.2. Make it available to your component](#32-make-it-available-to-your-component)
		- [3.3. Create the first villain](#33-create-the-first-villain)
		- [3.4. Show the villain in your HTML](#34-show-the-villain-in-your-html)
		- [3.5. Add tests to your .specs.ts](#35-add-tests-to-your-specsts)
	- [4. Let's edit our Villain](#4-lets-edit-our-villain)
		- [4.1. Add inputs](#41-add-inputs)
		- [4.2. Test the inputs](#42-test-the-inputs)
	- [5. Call in the Villains](#5-call-in-the-villains)
		- [5.1. We need data](#51-we-need-data)
		- [5.3. Let's display the Villains](#53-lets-display-the-villains)
		- [5.4. Show the selected Villain](#54-show-the-selected-villain)
		- [5.5. A little bit of style](#55-a-little-bit-of-style)
	- [6. Let's deploy to gitlab pages.](#6-lets-deploy-to-gitlab-pages)
	- [7. Components](#7-components)
		- [7.1. Generate Edit Component](#71-generate-edit-component)
		- [7.2. Naming Conventions](#72-naming-conventions)
		- [7.3. Prepare for Input](#73-prepare-for-input)
		- [7.4. Move the edit form](#74-move-the-edit-form)
	- [8. Services](#8-services)
		- [8.1. Create and inject Service class](#81-create-and-inject-service-class)
		- [8.2. Let's get some Villains](#82-lets-get-some-villains)
	- [9. Routing](#9-routing)
		- [9.1 Separate List view](#91-separate-list-view)
		- [9.2 Basic Routing](#92-basic-routing)
		- [9.3 The navigation](#93-the-navigation)
		- [9.3 Add and route the powers component](#93-add-and-route-the-powers-component)
		- [9.4 Redirects](#94-redirects)
	- [10. Learning the Power](#10-learning-the-power)
		- [10.1. Show random power](#101-show-random-power)
		- [10.2. Share the Villain Service (optimize)](#102-share-the-villain-service-optimize)
		- [10.3. create getRandomVillain() (optimize)](#103-create-getrandomvillain-optimize)
		- [10.4. Select the matching Villain](#104-select-the-matching-villain)
	- [11. Parameterized route](#11-parameterized-route)
		- [11.2. Add the route](#112-add-the-route)
		- [11.3. Get villain by id](#113-get-villain-by-id)
		- [11.4. Use the id parameter](#114-use-the-id-parameter)
		- [11.4. Linking to a the villains](#114-linking-to-a-the-villains)
		- [11.5. Using routes in functions](#115-using-routes-in-functions)
		- [x.x Pipes](#xx-pipes)

<!-- /TOC -->

## General

We use mostly the shell and a code editor.

We created tags for certain steps:
https://github.com/wingsuitist/villains/tree/v3.5.0

You can clone the existing code, list the tags and jump to a certain step:

```bash
git clone git@github.com:wingsuitist/villains.git
git tag -l
git checkout tags/v2.3.0
```

## 1. Install node and angular-cli

1. [Install Node](https://nodejs.org/en/download/)
2. install angular-cli `npm install -g angular-cli`
3. check version `ng --version` - it should be higher than 1.0.0-beta.12

## 2. Generate the base for our app

Final source of this part:
https://github.com/wingsuitist/villains/tree/v2.3.0

### 2.1. create villains app:

```
cd  ~/where-you-keep-your-code-projects/
ng new villains --prefix vil
cd villains
ls
```

This creates a new angular 2 app with the name villains and the prefix vil.
This will need a moment as it installs the npm packages, and angular2 uses plenty of other packages.

This prefix will be mostly used for your own components in the html templates, for example:

 `<vil-list></vil-list>`

### 2.2. run and look at your app

```
ng serve
```

This will need a moment the first time.
It will transpile all the code, pack it and serve it with a minimal webserver.
Now you can open the url in your browser: http://localhost:4200/
This website automatically shows you changes, so let's try that by changing two files using your favorite editor:
src/index.html

```
... from:
<vil-root>Loading...</vil-root>
... to:
<vil-root>Searching for Villains...</vil-root>
```

And src/app/app.component.ts

```
//... from:
  title = 'app works';
//... to:
  title = 'Villains unite!';
```
Now go back to the browser window and you'll see the magic.
If you're quick enough you'll see how the browser is already reloading when you press save in the editor.

### 2.3. testing is important

Run the ng tests, which where generated for your app:

```
ng test --watch false
```

You'll see several tests fail due to the changes in the title.
Try to edit `src/app/app.component.spec.ts` to make the tests work again.

## 3. Let's create our first villain

To fully benefit from thought through structure of Angular 2 you should stick to the [Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html#!#application-structure)

Final source of this part:
https://github.com/wingsuitist/villains/tree/v3.5.0

### 3.1. Let's create the Villain class

Add a class `Villain` with a number property `id` and a string property `name` in the file `src/app/shared/villain.model.ts`.

```typescript
export class Villain {
  id: number;
  alias: string;
  power: string;
}
```

You can also create this file using angular-cli:

```bash
ng generate class shared/villain model
```

### 3.2. Make it available to your component

Add the Villain class to the index.ts of the shared folder:

```typescript
export * from './villain.model';
```

Import it in the app.component.ts:

```typescript
import { Villain } from './shared';
```

### 3.3. Create the first villain

Add the first villain as a property to your component:

``` typescript
villain : Villain = {
  id: 23,
  alias: 'Captain Spaghetticoder'
  power: 'Bug Creator'
};
```

### 3.4. Show the villain in your HTML

```HTML
<h2>{{villain.alias}} profile.</h2>
<div>
  <label>id: </label>
  {{villain.id}}
</div>
<div>
  <label>alias: </label>
  {{villain.alias}}
</div>
<div>
  <label>power: </label>
  {{villain.power}}
</div>
```

### 3.5. Add tests to your .specs.ts

## 4. Let's edit our Villain

Final source of this part:
https://github.com/wingsuitist/villains/tree/v4.2

### 4.1. Add inputs

Replace the regular output for power and alias with a two way binding:

```HTML
<input [(ngModel)]="Villain.alias" placeholder="alias" />
```

As the angular-cli already loaded the FormsModule this works out of the box and adds the two way binding.

### 4.2. Test the inputs

Now we have to write a test, that changes the alias of our villain and makes sure it's also added to the title h2.

```typescript
it('should change alias in title when edited', async(()=>{
  let fixture = TestBed.createComponent(AppComponent);
  fixture.detectChanges();
  let compiled = fixture.debugElement.nativeElement;
  const alias = 'The Spaghetticoder';
  const title = 'The Spaghetticoder profile.';
  compiled.querySelector('input').value = alias;
  compiled.querySelector('input').dispatchEvent(new UIEvent('input'));
  fixture.detectChanges();
  expect(compiled.querySelector('h2').textContent).toBe(title);
}));
```

There are more elegant ways to do that, but for this little example it fits.

## 5. Call in the Villains

### 5.1. We need data

For now let's create a static list of Villains in our AppComponent.
Let's also remove the data for our first single Villain, as we will make it selectable.
Later on we move this to the proper place.

```typescript
//...

const VILLAINS: Villain[] = [
  {id: 1, alias: 'Rebooter', power: 'Random Updates'},
  {id: 2, alias: 'Break Changer', power: 'API crushing'},
  {id: 3, alias: 'Not-Tester', power: 'Edit on Prod'},
  {id: 4, alias: 'Super Spamer', power: 'Mail Fludding'},
  {id: 5, alias: 'Mrs. DDOS', power: 'Service Overuse'},
  {id: 6, alias: 'Trojan', power: 'Remote Control'},
  {id: 7, alias: 'Randzombie', power: 'Encryptor'},
  {id: 8, alias: 'Leacher', power: 'Net Overload'},
  {id: 23, alias: 'Captain Spaghetticoder', power: 'Bug Creator'}
];

//...

export class AppComponent {
  title = 'Villains unite!';
  villains = VILLAINS;
  villain: Villain;

//...
```

### 5.3. Let's display the Villains

Using `*ngFor` we can now loop through our list of Villain objects.
And as we want to be able to select a Villain we will add a click event.
The () bind a common event to a method within our component.
And as we want to style the selected one, let's add a class if the current villain matches our villain in the component.

```HTML
<ul class="thisVillain">
  <li *ngFor="let thisVillain of villains"
    (click)="onSelect(thisVillain)"
    [class.selected]="thisVillain === villain">

    {{thisVillain.alias}}
    <span class="power">({{thisVillain.power}})</span>

  </li>
</ul>
```

### 5.4. Show the selected Villain

If you open your current version you'll get an error as AppComponent.villain is undefined.
So let's make sure the villain form is only shown if one is selected.

```HTML
<div *ngIf="villain">
  <h2>{{villain.alias}} profile.</h2>
  <div>
    <label>id: </label>
    {{villain.id}}
  </div>
  <div>
    <label>alias: </label>
    <input [(ngModel)]="villain.alias" placeholder="alias" />
  </div>
  <div>
    <label>power: </label>
    <input [(ngModel)]="villain.power" placeholder="power" />
  </div>
</div>
```

Tadaa... Now you can select a villain and edit it. Look at how it adapts everywhere as you change an alias or power.

### 5.5. A little bit of style

Final source of this part:
https://github.com/wingsuitist/villains/tree/v5.5

So let's highlight our selected Villain in `app.component.css`:

```CSS
.selected {
  text-decoration: underline;
}
```

There is the possibility to add css in the AppComponent decorator (metadata) but we'll stick to separate css files.
Angular-cli already created the css file for us and referenced it in our AppComponent.
(If you want your html or css inline you can use the option `ng g component xyz --inline-template --inline-style`. This is also great if you component doesn't need any css. If you don't want it to create it's on folder you can use `--flat.`)

## 6. Let's deploy to gitlab pages.

If you put your project on github you can publish your current version easily to a github page:

`ng github-pages:deploy`

Now you can open it with: `https://yourusername.github.io/villains/`

Here you se the code that has to be deployed for your app:
https://github.com/wingsuitist/villains/tree/gh-pages

It isn't much, isn't it :-).

## 7. Components

Let's split this up into useful components.

You can keep you're app running `ng serve` and look at it's state after every step. It should auto reload.

Final source of this part:
https://github.com/wingsuitist/villains/tree/v7.4.0

### 7.1. Generate Edit Component

The easiest way to create a component is by using angular-cli (you may recognized, we like this tool a lot):

```bash
cd src/app/
ng generate component villain-edit
```

With this you get a new folder containing your component including the css, html, TypeScript class and even the testing file (spec.ts).

But if you check `git status` you will see it also adds your component to the `app.module.ts` file to make it available right away.

### 7.2. Naming Conventions

If you take a look at the component TypeScript you'll se something about the naming Conventions:

```typescript
@Component({
  selector: 'vil-villain-edit',
  templateUrl: './villain-edit.component.html',
  styleUrls: ['./villain-edit.component.css']
})
export class VillainEditComponent implements OnInit {
```

From top down you first see the selector which refers to the HTML tag `<vil-villain-edit>` in this case. You may have guessed from the word `selector` that this allows you to use more than tags. You could also use `selector: '.vil-villain-edit'`, which would allow you to call this component by any tag with the class like `<div class="vil-villain-edit"></div>`.

Now why do we have the `vil-` in front of the selector? That's due to the prefix we defined at the beginning of the tutorial. Angular-cli will use this prefix for the selector to make sure that there is no other tag interfering with your module. It's kind of a name space alternative within the template.

Then you see the file names with the hyphen separating the parts of your components name.

And last but not least you see the class name which uses upper camel case.

There are great explanations within the [Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html) on how why those conventions have been chosen. But for now it's great to know that the angular-cli team is holding our back and makes sure everything is correct.

### 7.3. Prepare for Input

In our new component we will also need the Villain object to hand it over to the view.

To do this we first have to import the Villain model class into the new component:

```typescript
import { Villain } from '../shared'
```

The AppComponent will give the Villain to the VillainEditComponent through a so called input. This Input has to be imported from the angular/core in `villain-edit.component.ts` within the statement already generated by angular-cli:

```typescript
import { Component, OnInit, Input } from '@angular/core';
```

And now we can declare the Villain property as an Input property:

```typescript
export class VillainEditComponent implements OnInit {

  @Input()
  villain: Villain;
```

Now this can be used as a attribute when we use the `<vil-villain-edit>` tag somewhere.

### 7.4. Move the edit form

First we move the edit form from the `app.component.html` to the `villain-edit.component.html`. Everything stays the same as we will have the Villain object as we had before.

And in the `app.component.html` we add our new separate edit Component with the @Input property villain:

```html
<vil-villain-edit [villain]="villain"></vil-villain-edit>
```

Now if you go back to your browser you'll see the current state, which should look the same as before.

## 8. Services

We are still using static villains in our `app.component.ts`. As we want to access them from different other components in the future, and as we may also get them from a server, we build a service.

### 8.1. Create and inject Service class

A service in angular 2 is a regular class with the `@Injectable()` decorator to prepare it for dependency injection. (Here you find a great [video about how decorators work:](https://www.youtube.com/watch?v=05FC8Wh7C5w))

But why bother, let's angular-cli generate our service:

```bash
cd src/app/
ng generate service shared/villain
```

This will generate a new file `villain.service.ts` which contains the minimal injectable Service:

```typescript
import { Injectable } from '@angular/core';

@Injectable()
export class VillainService {

  constructor() { }

}
```

To make importing the service simpler we add it to the `shared/index.ts`:

```typescript
export * from './villain.model';
export * from './villain.service';
```

And now we have to make it available for consumption in our `app.compontent.ts`.
We first add it to the list of things we want to import from the `./shared` folder:

```typescript
import { Component } from '@angular/core';
import { Villain, VillainService } from './shared';
```

Then we add it ad a provider to the `@Component()` decorator. And finally we add a constructor method with the TypeScript feature to directly define the injected object as a property of our AppCompontent:

```typescript
@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ VillainService ]
})
export class AppComponent {
  title = 'Villains unite!';
  villains = VILLAINS;
  villain: Villain;

  constructor(private villainService: VillainService) {}
```

We are now able to access it via `this.villainService`.

### 8.2. Let's get some Villains

Let's move the array of Villains from `app.component.ts` to `villain.service.ts` and add a `getVillains()` function to return it. Don't forget to import the Villain.

```typescript
import { Injectable } from '@angular/core';
import { Villain } from './villain.model';

const VILLAINS: Villain[] = [
  {id: 1, alias: 'Rebooter', power: 'Random Updates'},
  {id: 2, alias: 'Break Changer', power: 'API crushing'},
  {id: 3, alias: 'Not-Tester', power: 'Edit on Prod'},
  {id: 4, alias: 'Super Spamer', power: 'Mail Fludding'},
  {id: 5, alias: 'Mrs. DDOS', power: 'Service Overuse'},
  {id: 6, alias: 'Trojan', power: 'Remote Control'},
  {id: 7, alias: 'Randzombie', power: 'Encryptor'},
  {id: 8, alias: 'Leacher', power: 'Net Overload'},
  {id: 23, alias: 'Captain Spaghetticoder', power: 'Bug Creator'}
];

@Injectable()
export class VillainService {
  constructor() { }

  getVillains(): Villain[] {
    return VILLAINS;
  }
}
```

And now we want to use the service within the `AppComponent`. And the proper place to use it is in the so called OnInit life cycle hook. To make angular2 call our `ngOnInit()` method we import and implement it in our `AppComponent`:

```typescript
import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from './shared';

@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ VillainService ]
})
export class AppComponent implements OnInit {
  title = 'Villains unite!';
  villain: Villain;
  villains: Villain[];

  constructor(private villainService: VillainService) {}

  ngOnInit(): void {
    this.villains = this.villainService.getVillains();
  }

  onSelect(villain: Villain): void {
    this.villain = villain;
  }
}
```

## 9. Routing

We want to add a separate view which trains us in knowing each villains power. For that we need the possibility to switch between views which can be solved with routing.

There will be routing support for `angular-cli`. It was removed due to the new router version and will be integrated later on. (Please tell me to update this as soon as it's available in the official version.)

### 9.1 Separate List view

Let's add a new component for the List of Villain, to separate it from the AppComponent:

```bash
cd src/app
ng generate component villain-list
```

No let's move the code from the AppComponent to `villain-list/` component.

Your `app.component.ts` should look like this:

```typescript
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'vil-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}
```

Your `villain-list.component.ts` should look like this:

```typescript
import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from '../shared';

@Component({
  selector: 'vil-villain-list',
  templateUrl: './villain-list.component.html',
  styleUrls: ['./villain-list.component.css'],
  providers: [ VillainService ]
})
export class VillainListComponent implements OnInit {
  title = 'Villains unite!';
  villain: Villain;
  villains: Villain[];

  constructor(private villainService: VillainService) {}

  ngOnInit(): void {
    this.villains = this.villainService.getVillains();
  }

  onSelect(villain: Villain): void {
    this.villain = villain;
  }
}
```

You can cut and paste the whole html from the app component to the villain list.

For now you can add the villain-list component to your `app.component.html` to make sure everything works:

```html
<vil-villain-list></vil-villain-list>
```

### 9.2 Basic Routing

We will manage our routes in a new file `app.routing.ts`:

```typescript
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VillainListComponent } from './villain-list/villain-list.component';

const appRoutes: Routes = [
  {
    path: 'villains',
    component: VillainListComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
```

This adds a first route for the path `villains/` which will load the `VillainListComponent`. To make use of this route we export a routing `ModuleWithProviders` to use it for routing in the `AppComponent` later on.

Now let's add the routing to our module in the `app.module.ts`:

```typescript
import { routing } from './app.routing';
// ...
@NgModule({
  // ...
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
```

And now instead of directly loading the `VillainListComponent` in our `app.component.html` we will show what the router wants to load by using the `router-outlet`:

```html
<router-outlet></router-outlet>
```

If you look at the browser now, you'll get a JavaScript error that no route matches and nothing is shown. If you call the URL `http://localhost:4200/villains` you'll see the application as it was before.

### 9.3 The navigation

Now let's add a navigation to our `app.component.html`:

```html
<ul>
  <li>
    <a routerLink="villains">Villains</a>
  </li>
  <li>
    <a routerLink="powers">Powers</a>
  </li>
</ul>
```

And let's add a default route to our `app.routing.ts`:

```typescript
const appRoutes: Routes = [
  {
    path: 'villains',
    component: VillainListComponent
  },
  {
    path: '**',
    component: VillainListComponent
  }
```

Now we have a navigation and in any case the `VillainListComponent` is loaded.

### 9.3 Add and route the powers component

So let's add an empty `PowersComponent` for now and route to it:

```bash
cd src/app
ng generate component powers
```

Add it to our routing configuration:

```typescript
// ...
import { VillainListComponent } from './villain-list/villain-list.component';
import { PowersComponent } from './powers/powers.component';

const appRoutes: Routes = [
  {
    path: 'powers',
    component: PowersComponent
  },
  // ...
```

Now we can navigate between our components.

### 9.4 Redirects

To have one clear URL we can redirect `/` to `villains`:

```typescript
{
  path: '',
  redirectTo: 'villains',
  pathMatch: 'full'
},
```

The router goes through the `appRouters` Array from top to bottom matching each case. As soon as it finds the first match it executes it as configured.

## 10. Learning the Power

So let's learn the power of each villain so we are ready to defend our selves.

### 10.1. Show random power

First we need to inject the `VillainService` to fetch the villains in our `powers.component.ts`:

```typescript
import { Component, OnInit } from '@angular/core';
import { Villain, VillainService } from '../shared';

@Component({
  selector: 'vil-powers',
  templateUrl: './powers.component.html',
  styleUrls: ['./powers.component.css'],
  providers: [ VillainService ]
})
export class PowersComponent implements OnInit {

  constructor(private villainService: VillainService) {}
```

And then we want to get a random villain for the quiz:

```typescript
export class PowersComponent implements OnInit {
  villains: Villain[];
  randomVillain: Villain;

  constructor(private villainService: VillainService) {}

  ngOnInit() {
    this.villains = this.villainService.getVillains();

    let randomKey: number = Math.floor(Math.random() * this.villains.length);
    this.randomVillain = this.villains[randomKey];
  }
```

So now we can show this villains power in the `powers.component.html`:

```html
<h2>
  Guess the Villain:
</h2>
<p>
  {{randomVillain.power}}
</p>
```

### 10.2. Share the Villain Service (optimize)

Angular works with so called zones and each time you add a Service to the list of providers in Component it creates a separate instance of this Service.

There is no reason to create separate instances of the `VillainService` for our Components.

So let's remove `providers: [ VillainService ]` from the `VillainListComponent` and from the `PowersComponent` and add it to the `@NgModule` in `app.module.ts`. We also need to import it in the `app.module.ts` and we have to keep the imports, as well as the parameters of the constructors, in each Component.

### 10.3. create getRandomVillain() (optimize)

Even if finding a random item in the array is a small piece of code, we should move it out of the component. Maybe later on we change the implementation of how to receive a random villain.

So let's add the `getRandomVillain` function to our `villain.service.ts`:

```typescript

  getRandomVillain(): Villain {
    let villains = this.getVillains();
    let randomKey: number = Math.floor(Math.random() * villains.length);
    return villains[randomKey];
  }
```

And let's us it in the `PowersComponent`:

```typescript
  ngOnInit() {
    this.villains = this.villainService.getVillains();
    this.randomVillain
    = this.villainService.getRandomVillain();
  }
```

### 10.4. Select the matching Villain

Now let's list the Villains and let the user select the matching one, show our score and a message depending on our success:

```html
<h2>
  Guess the Villain:
</h2>
<p>
  {{randomVillain.power}}
</p>
<h3>
  Which Villain has this power?
</h3>
<p *ngIf="message">{{message}}</p>
<div><label>Score: </label>{{score}}</div>
<ul>
  <li *ngFor="let villain of villains">
    <a (click)="chooseVillain(villain)">
      {{villain.alias}}
    </a>
  </li>
</ul>
```

And create the matching method which gets a new random villain, increases or resets our score and shows a message:

```typescript
export class PowersComponent implements OnInit {
  villains: Villain[];
  randomVillain: Villain;
  score: number = 0;
  message: string;

  constructor(private villainService: VillainService) {}

  ngOnInit() {
    this.villains = this.villainService.getVillains();
    this.randomVillain = this.villainService.getRandomVillain();
  }

  chooseVillain(villain: Villain) {
    if(this.randomVillain.id == villain.id) {
      this.score++;
      this.message = 'correct!';
    } else {
      this.score = 0;
      this.message = 'wrong - start over.'  
    }
    this.randomVillain = this.villainService.getRandomVillain();
  }
}
```

## 11. Parameterized route

The router is also able to use parameters to enable linking directly to a record:

`villain/23`

In our example we want to link to the `VillainListComponent` which then selects and shows the villain with the provided id.


### 11.2. Add the route

To enable the route we only have to add it tou our `app.rougint.ts`:

```typescript
  {
    path: 'villain/:id',
    component: VillainListComponent
  },
```

This only maps this route to the `VillainListComponent`. We can already call it now, but it won't make any use of the `id` parameter.

### 11.3. Get villain by id

Before we want to use the id, we need a possibility to get the villain by id. This is a task that belongs to the `villain.service.ts`:

```typescript  
  getVillain(id: number): Villain {
    let villains = this.getVillains();
    return villains.find(villain => villain.id === id);
  }
```


### 11.4. Use the id parameter

To use the `id` parameter we need to get in the `VillainListComponent` using the router in `villain-list.component.ts`:

```typescript
//...
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

//...
export class VillainListComponent implements OnInit {
//...
  constructor(
    private villainService: VillainService,
    private route: ActivatedRoute,
    private location: Location) {}
//...
```

And next we get the matching villain on initialization if we got an id by the `ActivatedRoute` object:

```typescript
ngOnInit(): void {
  this.villains = this.villainService.getVillains();

  this.route.params.forEach((params: Params) => {
    let id = +params['id'];
    this.villain = this.villainService.getVillain(id);
  });
}
```

As we use the existing `villain` property of our `VillainListComponent` it will work out of the box. Now it's already possible to call the URL using in example `http://localhost:4200/villain/23`.


### 11.4. Linking to a the villains

Now we can make use of this and link to the villains. For example we could enable the user to open a villain directly from the power component in `owers.component.html`:

```html
<li *ngFor="let villain of villains">
  <a (click)="chooseVillain(villain)">
    {{villain.alias}}
  </a>
  (<a target="_blank" routerLink="/villain/{{villain.id}}">peak</a>)
</li>
```

This would enable the player to peak into the villain in a new window. Thanks to the `routerLink` attribute, we can directly link to the matching villain.

But we could also change our list to use links instead of the internal `onSelect()` function. For that we remove the `(click)` event from the list element and instead add proper `<a>` link tags:

```html
<ul class="thisVillain">
  <li *ngFor="let thisVillain of villains"
    [class.selected]="thisVillain === villain">
    <a routerLink="/villain/{{thisVillain.id}}">
      {{thisVillain.alias}}
      <span class="power">({{thisVillain.power}})</span>
    </a>
  </li>
</ul>
```

This allows us to remove the `onSelect` function in `villain-list.component.ts`.

And to improve the look at least a little bit we can add this to our `villain-list.component.css`:

```css
a {
  text-decoration: none;
}
.selected a {
  text-decoration: underline;
}
```

Defining the style of the `<a>` tag seams strange, as we don't want to change the looks globally. But thanks to Angular the css styles of our component only apply to the template of this component. This makes sure that we are not interfering with any other elements and improves modularity for reuse in other applications.


### 11.5. Using routes in functions

We can also call routes from within our components. One simple example is to provide a back link, which basically calls the regular browser back link:

```typescript
goBack(): void {
  this.location.back();
}
```

```html
<button (click)="goBack()">Back</button>
```

Another example is to actually call a specific route from within a components class:

```typescript
gotoVillain(villain: Villain): void {
  let link = ['/villain', villain.id];
  this.router.navigate(link);
}
```

To do this you need to inject the router into your component class:


```typescript
import { Router } from '@angular/router';
//...
constructor(
  private router: Router,
//...
```

----

### x.x Pipes

| uppercase
