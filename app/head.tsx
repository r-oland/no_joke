import { getPage } from "lib/sanity.client";

export default async function Head() {
  const page = await getPage("home");

  return (
    <>
      <title>{page?.title}</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta name="description" content={page?.description} />
      <meta name="keywords" content={page?.meta} />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
