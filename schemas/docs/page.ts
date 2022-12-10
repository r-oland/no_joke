import { defineField, defineType } from "sanity";
import { SearchIcon as icon } from "@sanity/icons";

const pages: Page[] = ["home", "work", "about"];

export default defineType({
  name: "page",
  title: "Page (SEO)",
  type: "document",
  icon,
  fields: [
    defineField({
      name: "name",
      title: "Page",
      type: "string",
      options: {
        list: pages,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      description:
        "Title of the page. It's shown in the browser tab and as a Google result.",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      description:
        "a brief description of your page. It is also frequently displayed alongside the store name on search engine results.",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "meta",
      description:
        "Keywords that describe the content on your homepage. This field is strictly optional, as keywords have been deprecated by all major search engines.",
      title: "Meta tags",
      type: "string",
    }),
  ],
  preview: {
    select: { title: "name", media: "image" },
  },
});
