import Head from 'next/head';

const MetaTags = ({
  siteName = 'www-template',
  title = siteName,
  description = 'Just template for website made by Smartcase Agency s.r.o.',
  keywords = ['smartcase', 'template', 'website', 'made', 'by', 'alois'],
  ogType = 'website',
  noindex = false,
}) => {
  const DOMAIN =
    process.env.DOMAIN !== '' ? process.env.VERCEL_URL : process.env.DOMAIN;

  return (
    <Head>
      {/* Basic Meta Tags*/}
      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.toString()} />
      <meta
        name="robots"
        content={`${noindex ? 'noindex' : 'index'} 'follow'`}
      />

      {/* Schema.org markup for Google+ */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta
        itemProp="image"
        content={`https://${DOMAIN}/socialTags/ogImage.png`}
      />

      {/* Twitter Card data */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://${DOMAIN}/socialTags/twitterImage.png`}
      />

      {/* Additional Meta Tags :

        <meta name="twitter:creator" content="@author_handle" />
        <meta name="twitter:site" content="@publisher_handle" />

      */}

      {/*Open Graph data*/}
      <meta property="og:title" content={title} />
      <meta property="og:type" content={ogType} />
      <meta
        property="og:image"
        content={`https://${DOMAIN}/socialTags/ogImage.png`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content={siteName} />

      {/* Favicon Tags from https://realfavicongenerator.net/ */}
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicons/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicons/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicons/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicons/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicons/safari-pinned-tab.svg"
        color="#d31212"
      />
      <meta name="apple-mobile-web-app-title" content={title} />
      <meta name="application-name" content={siteName} />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
    </Head>
  );
};

export default MetaTags;
