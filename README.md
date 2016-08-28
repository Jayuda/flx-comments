# flx-comments

## Install
add jayuda:flx-comments to your project

## Usage
add to each loop your collections
```html
{{>flxcomments}}
```

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

add function to lib folder :
```javascript
addComments = function (idData, textComments, sCollections) {
    sCollections.update(idData, {
            $addToSet: {
                comments: {
                    comment_text: textComments,
                    comment_By: Meteor.user().profile.name,
                    comment_Byid: Meteor.userId(),
                    comment_createAt: new Date(TimeSync.serverTime())
                }
            }
        },
        {validate: true});
};
```
