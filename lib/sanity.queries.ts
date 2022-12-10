import { groq } from "next-sanity";

// Work
const workFields = groq`
  name,
  description,
  image,
`;

export const workQuery = groq`
*[_type == "work"] | order(date desc, _updatedAt desc) {
  ${workFields}
}`;

// Illustration
const illustrationFields = groq`
  name,
  illustration,
`;

export const illustrationQuery = groq`
*[_type == "illustration"] | order(date desc, _updatedAt desc) {
  ${illustrationFields}
}`;

// About
const aboutFields = groq`
  name,
  description,
  image,
`;

export const aboutQuery = groq`
*[_type == "about"] {
  ${aboutFields}
}[0]`;

// Page
const pageFields = groq`
  name,
  title,
  description,
  meta,
`;

export const pageQuery = (page: Page) => groq`
*[_type == "page" && name == "${page}"] {
  ${pageFields}
}[0]`;
