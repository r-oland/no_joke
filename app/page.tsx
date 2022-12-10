/* eslint-disable @next/next/no-img-element */
// Components==============
import { PortableText } from '@portabletext/react';
import { getAbout, getIllustrations, getWork } from 'lib/sanity.client';
import { getSanityImage } from 'lib/sanityImage';
// =========================

export default async function page() {
  const work = await getWork();
  const illustrations = await getIllustrations();
  const about = await getAbout();

  return (
    <div>
      <h1>{work?.[0].name}</h1>
      <div>
        {illustrations.map((ill) => (
          <img
            key={ill.name}
            src={getSanityImage(ill.illustration).width(200).url()}
            alt={ill.illustration.caption}
          />
        ))}
        <p>{about?.name}</p>
        {!!about && <PortableText value={about?.description} />}
      </div>
    </div>
  );
}
