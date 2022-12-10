type SanityImage = {
  _type: "image";
  asset: {
    _type: "reference";
    _ref: string;
  };
  caption?: string;
};

type SanityPortableText = {
  _type: "block";
  _key: string;
  children: any[];
};
