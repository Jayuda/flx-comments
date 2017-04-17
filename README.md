# flx-comments

## Install
add jayuda:flx-comments to your project

## Usage
add to each loop your collections
```html
{{>flxcomments isCommentOpen=true _id=_id comments=comments}}
```
isCommentOpen=true that means comments windows will open as default and vice versa.


add event to save comments
```javascript
'submit form.form-comments': function (e, tpl) {
    e.preventDefault();
    flxcomments(e,tpl,YOUR_COLLECTIONS);

```
