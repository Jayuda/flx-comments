/**
 * Generated from flexurio tools
 * Flexurio By Pamungkas Jayuda yulius.jayuda@gmail.com / +628119003077
 */
Template.flxcomments.created = function () {
	Session.set("isComment", false);
};


Template.flxcomments.helpers({
	isComment: function () {
		return Session.get("isComment") === this._id
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
	}
});
