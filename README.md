# Inventory Managment System For Retailers


![N|Solid](https://www.pngitem.com/pimgs/m/212-2120596_ibm-cloud-logo-circle-hd-png-download.png)

Retail inventory management is the process of ensuring you carry merchandise that shoppers want, with neither too little nor too much on hand. By managing inventory, retailers meet customer demand without running out of stock or carrying excess supply.

- Setting Up Application Environment
- Implementing Web Application
- Deployment Of App In IBM Cloud
- ✨Development Phase ✨

## Website IP Address
- This is a demo website has been hosted using IBM Kubernetes Cluster http://159.122.177.251:31090

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
## For build
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
![Screenshot (144)](https://user-images.githubusercontent.com/89476967/203581478-be3cd585-5834-4115-a706-60dc609a22a6.png)
![Screenshot (145)](https://user-images.githubusercontent.com/89476967/203582316-95474b54-dab0-4c46-b137-6750f5232f97.png)
![Screenshot (140)](https://user-images.githubusercontent.com/89476967/203581563-ace06234-9cbd-4f7e-8f02-4ffba9886621.png)
![Screenshot (141)](https://user-images.githubusercontent.com/89476967/203581587-bd718fcf-822e-45df-b88f-c999b4458754.png)
![Screenshot (142)](https://user-images.githubusercontent.com/89476967/203581624-1865030d-b9fd-44bb-83cd-0a8f5e1388f1.png)
![Screenshot (143)](https://user-images.githubusercontent.com/89476967/203582378-079929e9-c3fb-4112-97a9-123eecab3906.png)


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

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
