## Dev enviroment

### .env file

Create a .env file in the root of the project with the following content:

```bash
PORT=3000
```

### build docker image

```bash
docker build -t plataforma-web .
```

### run docker image

```bash
docker run -dp 127.0.0.1:3000:3000 plataforma-web
```
