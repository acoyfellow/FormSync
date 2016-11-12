# FormSync

Keep your website visitors data preserved locally.

FormSync is a lightweight js library with 0 configuration. 

It simply attaches `onchange` listeners to every `input` and `textarea` element on the page, and syncs them locally in the client using [LocalForage](https://github.com/localForage/localForage "LocalForage").

Currently relies on an `id` attribute for all `input` and `textarea` elements.

## JSFiddle Example:
https://jsfiddle.net/acoyfellow/2se2rLq2/

## Full example:
```html
<html>

  <head>
    <title>Your Form</title>
  </head>

  <body>
    <form onsubmit="clearFormSync(); location.reload(); return false;">
      <textarea id="textarea" value="" placeholder="i'm empty"></textarea><br/>
      <input id="test" type="text" value="" placeholder="i'm empty"/><br/>
      <input id="test2" type="text" value="" placeholder="i'm empty"/><br/>
      <input id="test3" type="text" value="" placeholder="i'm empty"/><br/>
      <input id="test4" type="text" value="" placeholder="i'm empty"/><br/>
      <input id="test5" type="text" value="" placeholder="i'm empty"/><br/>
      <hr/>
      <input id="test6" type="checkbox" name="vehicle" value="Bike"> I have a bike<br/>
      <input id="test7" type="checkbox" name="vehicle" value="Car"> I have a car<br/>
      <hr/>
      <input id="test8" type="radio" name="gender" value="male"> Male<br>
      <input id="test9" type="radio" name="gender" value="female"> Female<br>
      <input id="test10" type="radio" name="gender" value="other"> Other
    </form>
  </body>

  <script src="https://cdn.rawgit.com/acoyfellow/FormSync/master/FormSync.js"></script>

</html>
```

## How to clear data from storage 
Run the `window.clearFormSync()` function to empty out everything in storage. Use this when a form submission has been successful.
```html
<form onsubmit="clearFormSync(); location.reload(); return false;">...</form>
```
