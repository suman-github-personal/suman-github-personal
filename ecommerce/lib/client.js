import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
    projectId: 's9d923ul',
    dataset: 'production',
    apiVersion: '2022-04-20',
    useCdn: true,
    token: process.env.NEXT_SANITY_PUBLIC_TOKEN
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
