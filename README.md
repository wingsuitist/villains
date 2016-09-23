# Villains

Angular 2 Tutorial using webpack, angular-cli and some other little differences.
Sponsored by: www.letsboot.com/angular2

## General

We use mostly the shell and a code editor.

We created tags for certain steps:
https://github.com/wingsuitist/villains/tree/v3.5.0

You can clone the existing code, list the tags and jump to a certain step:

```shell
git clone git@github.com:wingsuitist/villains.git
git tag -l
git checkout tags/v2.3.0
```

## 1. Install node and angular-cli

1. [Install Node](https://nodejs.org/en/download/)
2. install angular-cli `npm install -g angular-cli`
3. check version `ng --version` - it should be higher than 1.0.0-beta.12

## 2. Generate the base for our app

### 1. create villains app:

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

### 2. run and look at your app

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
... from:
  title = 'app works';
... to:
  title = 'Villains unite!';
```
Now go back to the browser window and you'll see the magic.
If you're quick enough you'll see how the browser is already reloading when you press save in the editor.

### 3. testing is important

Run the ng tests, which where generated for your app:

```
ng test --watch false
```

You'll see several tests fail due to the changes in the title.
Try to edit `src/app/app.component.spec.ts` to make the tests work again.

## 3. Let's create our first villain

To fully benefit from thought through structure of Angular 2 you should stick to the [Style Guide](https://angular.io/docs/ts/latest/guide/style-guide.html#!#application-structure)

### 1. Let's create the Villain class

Add a class `Villain` with a number property `id` and a string property `name` in the file `src/app/shared/villain.model.ts`.

```typescript
export class Villain {
  id: number;
  alias: string;
  power: string;
}
```

### 2. Make it available to your component

Add the Villain class to the index.ts of the shared folder:

```typescript
export * from './villain.model';
```

Import it in the app.component.ts:

```typescript
import { Villain } from './shared';
```

### 3. Create the first villain

Add the first villain as a property to your component:

``` typescript
villain : Villain = {
  id: 23,
  alias: 'Captain Spaghetticoder'
  power: 'Bug Creator'
};
```

### 4. Show the villain in your HTML

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

### 5. Add tests to your .specs.ts

## 4. Let's edit our Villain



***
***
***

## README from `ng new`

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.15.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

## Further help

To get more help on the `angular-cli` use `ng --help` or go check out the [Angular-CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
