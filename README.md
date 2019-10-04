# typesciprt + express + typeorm + typegraphql boilerpalte

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
