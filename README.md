Smartcase www-template
======================
This template is used by Smartcase Agency for client websites. It's build with [Next.JS](https://github.com/vercel/next.js) and [TailwindCSS](https://github.com/tailwindlabs/tailwindcss). It includes basic configuration, Meta Tags and implementation with Google Analytics and Facebook(Meta) Pixel.

* [How To](#how-to)
  * [MetaTags](#metatags)
  * [Google Analytics](#google-analytics)
  * [Facebook Pixel](#facebook-pixel)
* [Authors](#authors) 
----------------------

## How to
### MetaTags
You can set defaults inside ``/src/components/core/MetaTags.js``:
```
const MetaTags = ({
  siteName = 'www-template',
  title = siteName,
  description = 'Just template for website made by Smartcase Agency s.r.o.',
  keywords = ['smartcase', 'template', 'website'],
  ogType = 'website',
  noindex = false,
})
```
#
Then you should render MetaTags on every page and pass custom values as props.
```
const Home = () => {
  return (
    <>
      <MetaTags title="Home Page" />
      ...page content
    </>
  );
}
```

**Don't forget** to generate favicons with [RealFaviconGenerator](https://realfavicongenerator.net/), upload them to the right place and change
``browserconfig.xml`` and ``site.webmanifest``.

### Google Analytics
Default page view event has been already set in ``_app.js``.

Example of custom event:
```
import * as gtag from '/lib/gtag.js';

const handleClick = () => {
  gtag.event({
    action: 'button_click',
    category: 'Button',
    label: "Button has been clicked!",
  })
}
```

**You need to** add GA tracking id into ``.env.local``.

More info on [example](https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics)

### Facebook Pixel
Default page view event has been already set in ``_app.js``.

Example of custom event:
```
import * as fbq from '/lib/fpixel.js';

const handleClick = () => {
  fbq.event('Button Clicked')
}
```

**You need to** add Facebook Pixel id into ``.env.local``.

More info on [example](https://github.com/vercel/next.js/tree/canary/examples/with-facebook-pixel)

### Authors
* Lukáš Alois Zborník ([@lazb0](https://github.com/lazb0))
