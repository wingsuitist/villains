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

Final source of this part:
https://github.com/wingsuitist/villains/tree/v2.3.0

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
//... from:
  title = 'app works';
//... to:
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

Final source of this part:
https://github.com/wingsuitist/villains/tree/v3.5.0

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

Final source of this part:
https://github.com/wingsuitist/villains/tree/v4.2

### 1. Add inputs

Replace the regular output for power and alias with a two way binding:

```HTML
<input [(ngModel)]="Villain.alias" placeholder="alias" />
```

As the angular-cli already loaded the FormsModule this works out of the box and adds the two way binding.

### 2. Test the inputs

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

### 1. We need data

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

### 3. Let's display the Villains

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

### 4. Show the selected Villain

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

### 5. A little bit of style

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

Let's split this up into usefull components.

You can keep you're app running `ng serve` and look at it's state after every step. It should auto reload.

### 1. Generate Edit Component

The easiest way to create a component is by using angular-cli (you may recognized, we like this tool a lot):

```shell
cd src/app/
ng generate component villain-edit
```

With this you get a new folder containing your component including the css, html, TypeScript class and even the testing file (spec.ts).

But if you check `git status` you will see it also adds your component to the `app.module.ts` file to make it available right away.
