Millswipe
=========

This was a game built for Poddle, my podcasting network. I created a JSON file
which I stored in a key-value store (basically just a couple of models in a
Django app, but accessible through a JavaScript API) which had a list of
statements. The user could choose whether they agreed or disagreed with the
statement, and the votes would be tallied.

It was initially built to gauge people's reactions to rumours surroinding the
iPhone 6, a few days before its release.

You can get this running again if you want to reproduce a key-value store that
conforms to what's in `kv.js`, or obviously create your own. The ID referenced
in `index.html` was effectively a primary key to the particular store, then
`key` would have been a value within that store (a collection of statements).
