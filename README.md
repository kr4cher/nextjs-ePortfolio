# ePortfolio about Next.js

In this repo you will find all documents and tutorials from my ePortfolio about Next.js and ZEIT Now.

The PowerPoint slides can be found [here](./slides/ePortfolio-Next.js.pptx "ePortfolio-Next.js.pptx").

## Tutorial

#### Getting started

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

The application is now accessible under the following URL: [http://localhost:3000](http://localhost:3000)

#### Creating The First Page

Create a file named "pages/index.js" with the following content:
```javascript
const Index = () => (
  <div>
    <p>Hello World!</p>
  </div>
);

export default Index;
```

#### Navigation

Create a second page named "about.js" in the "pages" folder.

```javascript
export default function About() {
  return (
    <div>
      <p>This is the about page</p>
    </div>
  );
}
```

Then you can access that page with [http://localhost:3000/about](http://localhost:3000/about).

To link these pages use the link tag from next instead the <a>-Tag to do a client navigation without refreshing the page.
So add the following line to the "pages/index.js" file:

```javascript
import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/about">
      <a>About Page</a>
    </Link>
    <p>Hello Next.js</p>
  </div>
);

export default Index;
```

You may need to add attributes or props to your links for a number of reasons.
Perhaps you need to add a title attribute to the link. We can add it like this:

```javascript
<Link href="/about">
  <a title="About Page">About Page</a>
</Link>
```