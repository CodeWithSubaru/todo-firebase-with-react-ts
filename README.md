# Todo App - `React`, `TypeScript`, `Vite`, `Firebase`

This is a typical todo application for creating frontend using typescript, react and backend using Firebase

---

**Table of Contents (TOC)**

- [Todo App - `React`, `TypeScript`, `Vite`, `Firebase`](#todo-app---react-typescript-vite-firebase)
  - [Run Local Setup](#run-local-setup)
    - [`Download` setup](#download-setup)
    - [`Install` setup](#install-setup)
    - [`Env` setup](#env-setup)
    - [`Run` cmd](#run-cmd)
  - [Run using Docker](#run-using-docker)
    - [`Docker Build` cmd](#docker-build-cmd)
    - [`Docker Run` cmd](#docker-run-cmd)
    - [`Docker Stop` cmd](#docker-stop-cmd)

---

## Run Local Setup

> :memo: **Note:** Setup first your firebase

### `Download` setup

To download the file, use `git clone` cmd

```sh
$ git clone https://github.com/CodeWithSubaru/todo-firebase-with-react-ts.git
```

### `Install` setup

You can install using `npm` cmd

```sh
$ npm install
```

### `Env` setup

Copy the `.env.example` to your created `.env` file

```
.
├── ...
├── src                    # src
│   ├── benchmarks          # Load and stress tests
│   ├── integration         # End-to-end, integration tests (alternatively `e2e`)
│   └── unit                # Unit tests
└── .env                    # your created .env file
└── .env.example            # copy of sample .env file
```

Fill up those keys with the used of your firebase

```sh
VITE_FIREBASE_API_KEY=
VITE_FIREBASE_AUTH_DOMAIN=
VITE_FIREBASE_PROJECT_ID=
VITE_FIREBASE_STORAGE_BUCKET=
VITE_FIREBASE_MESSAGING_SENDER_ID=
VITE_FIREBASE_APP_ID=
VITE_FIREBASE_MEASUREMENT_ID=
```

### `Run` cmd

You can start now to run the project using `run dev` cmd

```sh
$ npm run dev
```

[Back to Top](#todo-app---react-typescript-vite-firebase)

## Run using Docker

> :memo: **Note:** Download and install Docker on your local computer

### `Docker Build` cmd

First build an image for docker using `build` cmd

```sh
$ docker build -t todolist-firebase .
```

> :memo: **Note:** You can name the image whatever you want, but for me I named it as `todolist-firebase`

### `Docker Run` cmd

You start container using `run` cmd

```sh
$ docker run -d -p 30:5173 --name todo-firebase todolist-firebase
```

> :memo: **Note:** You can name your port in `-p 30:5173` as `-p 5000:5173` (only the -p YOU_CAN_EDIT_THIS:5173) and your container name in `--name todo-firebase` as `--name todo`

### `Docker Stop` cmd

You stop container using `stop` cmd

```sh
$ docker stop todo-firebase
```

> :memo: **Note:** if you named the todo-firebase as `--name todo` just like on my example note above then use `docker stop todo` instead of `todo-firebase`
