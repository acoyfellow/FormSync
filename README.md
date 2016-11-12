# FormSync
Sync form value locally in the client

## JSFiddle Example:
https://jsfiddle.net/acoyfellow/2se2rLq2/

## Full example:
```html
<html>

  <head>
    <title>Your Form</title>
  </head>

  <body>
    <form onsubmit="return false">
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
