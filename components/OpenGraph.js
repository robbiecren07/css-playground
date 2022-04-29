import { NextSeo } from 'next-seo';

const OpenGraph = ({ title, description, canonical, url  }) => {

  return (
    <NextSeo
      title={title}
      description={description}
      canonical={url}
      openGraph={{
        type: 'website',
        locale: 'en_IE',
        url: url,
        title: title,
        description: description,
        images: [
          {
            url: 'https://cssplayground.dev/css-playground-logo-400.jpg',
            width: 400,
            height: 200,
            alt: 'CSS Playground, an interactive web app for learning and building CSS layouts',
            type: 'image/jpeg',
          },
        ],
        //   {
        //     url: 'https://www.example.ie/og-image-02.jpg',
        //     width: 900,
        //     height: 800,
        //     alt: 'Og Image Alt Second',
        //     type: 'image/jpeg',
        //   },
        //   { url: 'https://www.example.ie/og-image-03.jpg' },
        //   { url: 'https://www.example.ie/og-image-04.jpg' },
        // ],
        site_name: 'CSS Playground',
      }}
    />
  )
}

export default OpenGraph