# express + typesciprt + typeorm + typegraphql + apollo server + jest graphql testing boilerpalte

steps

```bash
# install dependencies
$ yarn

# make .env and fill your config
$ cp .env.example .env

# migrate table
$ yarn migrate

# run server on localhost:5000/api
$ yarn dev
```

query exmaple

```sdl
Query {
  users {
    id
    userName
  }
}
```

testing

```bash
$ yarn test -u
```

check the snapshot in test folder
