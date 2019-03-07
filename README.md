# Universal Login workshop by @ethmarek

* https://universallogin.io/

* Install PostgreSQL https://gist.github.com/ibraheem4/ce5ccd3e4d7a65589ce84f2a3b7c23a3

```
brew doctor;
brew update;
brew install postgresql
ln -sfv /usr/local/opt/postgresql/*.plist ~/Library/LaunchAgents
alias pg_start="launchctl load ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
alias pg_stop="launchctl unload ~/Library/LaunchAgents/homebrew.mxcl.postgresql.plist"
pg_start
createuser -s postgres
psql
```

* Setup

```
yarn init;
yarn add universal-login-sdk;
yarn add --dev universal-login-ops;
```

* Add scripts to package.json

```
"scripts": {
  "start": "node start.js",
  "start:dev": "universal-login start:dev"
}
```

* Create start.js

* Run

```
yarn start
yarn run start:dev
```
