Package.describe({
    name: 'jayuda:flx-comments',
    version: '0.1.6',
    summary: "add comment to any collections ",
    git: 'https://github.com/Jayuda/flx-comments',
    documentation: 'README.md'
});

Package.onUse(function(api){
    api.versionsFrom('1.1.0.2');
    api.use([
        'ui',
        'meteor-platform'
    ]);
    api.imply('templating');
    api.addFiles([
        'client/flxcomments.html',
        'client/flxcomments.js',
        'client/addComments.js'
    ], 'client');
    api.export('addComments', 'client');
});
