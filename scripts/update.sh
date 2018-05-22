#!/bin/sh

# get root deps installed
npm i

# install lambda deps
for f in `ls src/events`
do
  cd "src/events/$f"
  npm i @architect/functions --production --save
  npm i @architect/data --production --save
  cd ../../../
done
for f in `ls src/html`
do
  cd "src/html/$f"
  npm i @architect/functions --production --save
  npm i @architect/data --production --save
  cd ../../../
done
for f in `ls src/json`
do
  cd "src/json/$f"
  npm i @architect/functions --production --save
  npm i @architect/data --production --save
  cd ../../../
done
