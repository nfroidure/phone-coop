# new-whook-project

This is a basic [Whook](https://github.com/nfroidure/whook) server demonstrating
the various usages of the Whook framework to build REST APIs.

## Usage

To run the server in production:

```sh
npm it
NODE_ENV=production npm start
```

You can understand deeply this repository and Whook's internal by simply reading
the [Architecture Notes](./ARCHITECTURE.md). The "See in context" links drive
your directly in the concerned implementation so that you can just see the code
that explains the notes.

Feel free to continue creating architecture notes and to regenerate the markdown
file by running:

```
npm run architecture
```

## Dev

Start the server in development:

```sh
# Simple dev mode
npm run dev

# Watch mode
npm run watch
```

Create a new endpoint / service / provider or command:

```sh
npx whook create
```

Play with the REPL:

```sh
npm run whook-repl
```

List available commands:

```sh
npx whook ls
```

Generate API types:

```sh
npm run apitypes
```

## Debug

Execute a handler in isolation:

```sh
npx whook handler --name putEcho --parameters '{"body": { "echo": "YOLO!" }}'
```

Debug `whook` internals:

```sh
DEBUG=whook npm run dev
```

Debug `knifecycle` internals (dependency injection issues):

```sh
DEBUG=knifecycle npm run dev
```

## Author
Nicolas Froidure

