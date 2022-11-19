# Inventory Managment System For Retailers


![N|Solid](https://www.pngitem.com/pimgs/m/212-2120596_ibm-cloud-logo-circle-hd-png-download.png)

Retail inventory management is the process of ensuring you carry merchandise that shoppers want, with neither too little nor too much on hand. By managing inventory, retailers meet customer demand without running out of stock or carrying excess supply.

- Setting Up Application Environment
- Implementing Web Application
- Deployment Of App In IBM Cloud
- ✨Development Phase ✨

## Features

- Manage your inventory with the help of serverless architecture.
- Realtime data visualization using d3.js(react-charts) and next.js 
- High performance inventory management web app for the management of surplus  amount of stocks



## Tech

Inventory Managment System For Retailers uses a number of open source tools to work properly:

- [ReactJS](https://reactjs.org/) - Javascript enhanced for web apps!
- [NextJs](https://nextjs.org/) - gives you building blocks to create web applications.
- [Docker](https://www.docker.com/) - Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.
- [Kubernetes](https://kubernetes.io/) - Service discovery and load balancing 
- [Node.js] - widely used for the back-end of applications
- [TypeScript](https://www.typescriptlang.org/) - TypeScript extends JavaScript, providing a better developer experience.




## Installation



Install the dependencies and dev-Dependencies using yarn.

```sh
cd IBM-Project-38347-1660378794
yarn
```
Install the dependencies and dev-Dependencies using npm.
```sh
cd IBM-Project-38347-1660378794
npm i
```

For running the application using yarn
```sh
yarn dev
```
For running the application using npm
```sh
npm run dev
```

For building the application using npm
```sh
npm run build
```
For building the application using yarn
```sh
yarn build
```


## Docker
 Install and deploy  a Docker container.

By default, the Docker will expose port 3000, so change this within the
Dockerfile if necessary. When ready, simply use the Dockerfile to
build the image.

```sh
cd IBM-Project-38347-1660378794
docker build -t nextjs-docker .
```

Run your container
```sh
cd IBM-Project-38347-1660378794
docker run -p 3000:3000 nextjs-docker
```


This will create the Inventory Managment image and pull in the necessary dependencies.
Be sure to swap out `${package.json.version}` with the actual
version of Inventory Managment

Once done, run the Docker image and map the port to whatever you wish on
your host. we simply map port 3000 of the host to
port 3000 of the Docker (or whatever port was exposed in the Dockerfile):



## Snap Shots
![Screenshot (132)](https://user-images.githubusercontent.com/89476967/202865029-d390d67b-2ca0-456e-bcdf-e7ce5ca0dba8.png)
![image](https://user-images.githubusercontent.com/89476967/202865095-3c09fadc-9c17-41dc-905f-58e619803514.png)
![Screenshot (130)](https://user-images.githubusercontent.com/89476967/202865102-0f451c30-bc05-4057-a3c4-482dc56d3389.png)
![Screenshot (128)](https://user-images.githubusercontent.com/89476967/202865105-60d0bf0d-3938-4b8b-bb8a-60dfe5e0391a.png)


![Screenshot (129)](https://user-images.githubusercontent.com/89476967/202865112-87b2b06b-370c-478f-b124-eeb871d165bf.png)

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format
 nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>