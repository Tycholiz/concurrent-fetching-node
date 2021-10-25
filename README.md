## What is this?
This is a quick example of handling concurrent async fetches to different URLs and compiling the results. In this micro-application, the same endpoint is fetched, but passing different query params per GET request. The data is then combined, with duplicates removed.

### Getting started
1. After cloning the repo, run `yarn` to install all dependencies
2. Run `yarn start` to start the server
3. API should be available at `http://localhost:5000`

### Todo
- unit tests for routes
