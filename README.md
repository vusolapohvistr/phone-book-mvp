# Phone book MVP

## Time spent (coffee included)

2 hours

## Links

* [Heroku](https://phone-book-mvp.herokuapp.com)

## Startup

```sh
npm i

npm run start
```

## Task -> request

User should be able to do the following:

* Create one/many contacts ->
```POST https://phone-book-mvp.herokuapp.com/contacts```

* Update one/many contacts ->
```PATCH https://phone-book-mvp.herokuapp.com/contacts/:contactId```

* Delete one/many contacts ->
```DELETE https://phone-book-mvp.herokuapp.com/contacts/:contactId```

* Get contact by id ->
```GET https://phone-book-mvp.herokuapp.com/contacts/:contactId```

* Get all contacts ->
```GET https://phone-book-mvp.herokuapp.com/contacts```

* Get contacts by city/company/group name ->
```GET https://phone-book-mvp.herokuapp.com/contacts?company=:company```

* Get duplicate contacts ->
```GET https://phone-book-mvp.herokuapp.com/contacts/duplicates```
