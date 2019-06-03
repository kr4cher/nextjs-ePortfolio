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
```json
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

To link these pages use the link tag from next instead the a-Tag to do a client navigation without refreshing the page.
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
Perhaps you need to add a title attribute to the link. You can add it like this:

```html
<Link href="/about">
  <a title="About Page">About Page</a>
</Link>
```

#### Shared Components

Since exported pages are JavaScript modules, we can import other JavaScript components into them as well.
So we create a Header component and add the following lines.

<b>"components/Header.js":</b>
```javascript
import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
  </div>
);

export default Header;
```

<b>"pages/index.js":</b>
```javascript
import Header from '../components/Header';

export default function Index() {
  return (
    <div>
      <Header/>
      <p>Hello World!</p>
    </div>
  );
}
```

<b>"pages/about.js":</b>
```javascript
import Header from '../components/Header';

export default function About() {
  return (
    <div>
      <Header/>
      <p>This is the about page</p>
    </div>
  );
}
```

#### Custom Server

Now we are going to create a custom server for our app using Express.

To add express into your app run the following command:

```
> npm install express
```

Then create a file called server.js in the root folder of your app and add following content:

```javascript
const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const app = next({dev});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log('> Ready on http://localhost:3000');
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
```

Now update the npm script in the "package.json" to:

```json
{
  "scripts": {
    "dev": "node server.js",
    "build": "next build",
    "start": "NODE_ENV=production node server.js"
  }
}
```

You can run the app again with <code>npm rund dev</code> to start the express server.

To define a custom route add the following lines to the "server.js":
```javascript
server.get('/p/:name', (req, res) => {
  const actualPage = '/post';
  const queryParams = { title: req.params.name };
  app.render(req, res, actualPage, queryParams);
});
```

And the "pages/index.js" like:

```javascript
import {withRouter} from 'next/router';
import Header from '../components/Header';

function Index(props) {
  const name = props.router.query.name || 'World';

  return (
    <div>
      <Header/>
        <p>Hello {name}!</p>
    </div>
  );
}

export default withRouter(Index);
```

Now you can access the app by the dynamic route [http://localhost:3000/hello/Foo](http://localhost:3000/hello/Foo).