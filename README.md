# flx-comments

## Install
add jayuda:flx-comments to your project

## Usage
add to each loop your collections
```html
{{>flxcomments isCommentOpen=true}}
```
isCommentOpen=true that means comments windows will open as default and vice versa.


add event to save comments
```javascript
"submit form.form-comments": function (e, tpl) {
  e.preventDefault();
  var textComments = tpl.$('input[name="comments'+this._id+'"]').val();
  if (textComments.length) {
    addComments(this._id, textComments, YOUR_COLLECTIONS);
  }
  e.target.reset();
}
```
