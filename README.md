# ePortfolio about Next.js

In this repo you will find all documents and tutorials from my ePortfolio about Next.js and ZEIT Now.

The PowerPoint slides can be found [here](./slides/ePortfolio-Next.js.pptx "ePortfolio-Next.js.pptx").

## Tutorial

First make sure you installed [Node.js 8](https://nodejs.org/) or later.

To start, create a sample project by running the following commands into your project folder:
```
> npm init -y
> npm install --save react react-dom next
> mkdir pages
```

Then open the "package.json" in the hello-next directory and add the following NPM scripts:
```JSON
"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
}
```

Now run the following command to start the server:
```
> npm run dev
```

#### Creating The First Page

Create a file named "pages/index.js" with the following content:
```JS
const Index = () => (
  <div>
    <p>Hello World!</p>
  </div>
);

export default Index;
```

