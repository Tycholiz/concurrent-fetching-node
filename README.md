### Todo
- figure out how to handle sorting of popularity
- error handling:

If a `sortBy` or `direction` are invalid values, specify an error like below:
```
Response body (JSON):
{
"error": "sortBy parameter is invalid"
}
Response status code: 400
```

- unit tests for routes