# Node API menu with JSON db

## A simple ES5 API with full CRUD writing to a local JSON file

### Example paths, body and query

```bash
 # GET - read
 PATH: http://localhost:4040/
```

```bash
# POST - add
  PATH: http://localhost:4040/
  BODY: { "title": "Monster Apple Pie", "description": "Fresh daily baked apple pie with monster super vanilla ice cream"}
```

```bash
# PUT - update
  BODY: { "title": "Monster Apple Pie", "description": "Fresh daily baked apple pie with monster super vanilla ice cream"}
  PATH: http://localhost:4040/?title=Apple Pie
  QUERY: title=Apple Pie
```

```bash
# DELETE
  PATH: http://localhost:4040/?title=American Hotdog

```

```bash
# DELETE all
  PATH: http://localhost:4040/delete-all
```
