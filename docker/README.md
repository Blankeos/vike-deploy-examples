# docker miniguide

Reference: https://vike.dev/docker

## 1. Changes since template

- Dockerize the app (This is a good starting point that already works: [here](Dockerfile))
- Tip: You can test if it works by doing (I suggest putting this as a package.json script if you want):

  ```sh
  docker build -f apps/web/Dockerfile -t 'my-app-image' . # my-app-image is an image name.
  docker run -d -p 3000:3000 --name 'my-app' 'my-app-image' # my-app is a container name, my-app-image is an image name
  ```

- That's it 🎉

## 2. Platform Notes

This always differs so I'll just give a [Dokploy](https://dokploy.com) guide since it's my favorite (but it should be parallel to Coolify, Railway, etc.):

- `+ Create Project` > `+ Create Service` > `Application`
- Build Settings

  ```sh
  # Build Type
  🔘 Dockerfile

  # Docker File
  Dockerfile # this is a path
  ```

- That's pretty much it! 🎉
