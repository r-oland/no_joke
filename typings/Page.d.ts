type Page = "home" | "work" | "about";

type PageEntity = {
  name: Page;
  title: string;
  description?: string;
  meta?: string;
};
