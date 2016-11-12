# FormSync ([demo](https://jsfiddle.net/acoyfellow/2se2rLq2 "demo"))

Store your website visitors form data locally. Improve conversions for people who dropped off mid-way through filling out an online form. Less than 3kb.

It simply attaches `onkeyup` listeners to every `input` and `textarea` element on the page (`onchange` for `select` elements), and syncs them locally in the client using [LocalForage](https://github.com/localForage/localForage "LocalForage").

Currently relies on an `id` attribute for all elements (`input`, `select`, and `textarea`).

## How to install
1. Add FormSync.js (download it from [here](https://github.com/acoyfellow/FormSync/blob/master/FormSync.js "here") or use a CDN like [GitCDN](https://gitcdn.xyz/repo/acoyfellow/FormSync/master/FormSync.js "GitCDN") or [RawGit](https://rawgit.com/acoyfellow/FormSync/master/FormSync.js "RawGit"))
2. For every `input` and `textarea` you want to sync locally, be sure to add an id attribute. For now, FormSync relies on this.
3. When you want to clear the form data, run the `window.clearFormSync()` function to empty out everything in storage. Use this when a form submission has been successful.

## Full example:
```html
<html>

  <head>
    <title>Your Form</title>
  </head>

  <body>
    <script>
    function mySubmitFunction() {
      // add form validation here
      // add ajax/websockets here
      clearFormSync(); //success! clear form data now:
      alert('Success! We will now empty out storage since the form was successful.')
      location.reload(); // reload page
      return false;
    };
    </script>

    <form onsubmit="return mySubmitFunction()">
    <p>
    Try filling out some of the fields below... and before you hit Submit, hit refresh or "Run" again.
    </p>
    <textarea id="textarea" value=""></textarea><br/>
    <input id="test" type="text" value="" placeholder=""/><br/>
    <input id="test2" type="text" value="" placeholder=""/><br/>
    <input id="test3" type="text" value="" placeholder=""/><br/>
    <input id="test4" type="text" value="" placeholder=""/><br/>
    <input id="test5" type="text" value="" placeholder=""/><br/>
    <hr/>
    <input id="test6" type="checkbox" name="vehicle" value="Bike"> I have a bike<br/>
    <input id="test7" type="checkbox" name="vehicle" value="Car"> I have a car<br/>
    <hr/>
    <input id="test8" type="radio" name="gender" value="male"> Male<br>
    <input id="test9" type="radio" name="gender" value="female"> Female<br>
    <input id="test10" type="radio" name="gender" value="other"> Other<br>
    <hr/>
    <select id="select">
      <option>First option</option>
      <option>Second option</option>
      <option>Third option</option>
    </select>

    <br>
    <br>

    <button type="submit">
    Submit (will clear storage)
    </button>
  </form>
  </body>

  <script src="https://rawgit.com/acoyfellow/FormSync/master/FormSync.js"></script>

</html>
```

### License
[Apache](https://github.com/acoyfellow/FormSync/blob/master/LICENSE "Apache")
