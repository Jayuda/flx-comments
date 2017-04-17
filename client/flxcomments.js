/**
 * Generated from flexurio tools
 * Flexurio By Pamungkas Jayuda yulius.jayuda@gmail.com / +628119003077
 */
 Template.flxcomments.onRendered(function () {
     var instance = Template.instance(),
     view = Blaze.getView(),
     data = Blaze.getData(view);
     Session.set("isCommentOpen", data.isCommentOpen);
 });

Template.flxcomments.created = function () {
	Session.set("isComment", false);
	Session.set("isCommentOpen", true);
};

Template.flxcomments.helpers({
	isComment: function () {
		return Session.get("isComment") === this._id || Session.get("isCommentOpen");
	}
    isCommentOpen: function () {
		return !Session.get("isCommentOpen");
	}
});

Template.flxcomments.events({
	'click a.addComments': function (e,tpl) {
		e.preventDefault();
		if(Session.get("isComment") === e.currentTarget.id) {
			Session.set("isComment", null);
		} else {
			Session.set("isComment", e.currentTarget.id);
		}
	},
});


flxcomments = function (e,tpl,oCollections) {
    let idData = e.currentTarget.name;
    let textComments = tpl.$('input[id="textComments' + idData + '"]').val();
    if (textComments.length) {
        addComments(idData, textComments, oCollections);
    }
    e.target.reset();
};

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
