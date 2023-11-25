## Dev enviroment

### .env file

Create a .env file in the root of the ./api directory with the following content:

```bash
DATABASE_URL="postgres://postgres:123@db:5432/educationplataform"
DATABASE_REPLICA_URL_1="postgres://postgres:123@db-2:5432/educationplataform"
DATABASE_REPLICA_URL_2="postgres://postgres:123@db-3:5432/educationplataform"
```

### build docker image

```bash
docker-compose build
```

### run docker image

```bash
docker-compose up
```
