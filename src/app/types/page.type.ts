export type PageType = {
  banner_menu: string[];
  banner_title: string[];
  bloc_1: Block1Type;
  bloc_2: Block2Type;
  bloc_2_2: BlockD2Type;
  bloc_3: Block3Type;
  bloc_4: Block4Type;
  bloc_5: Block5Type;
  bloc_6: Block6Type;
  carte_point: [
    {
      activities: string[];
      address: string;
      coordinates: {
        latitude: string;
        longitude: string;
      };
      email: string;
      fax: string;
      free_call: string;
      marker_information: string[];
      name: string;
      phone: string;
      website: string;
    },
  ];
  footer: {
    address: {
      location: string;
      name: string;
      phone: string;
    };
    links: [
      {
        name: string;
        url: string;
      },
    ];
  };
  head_menu: string[];
  id: string;
  language: string;
};

type BlockType = {
  title: string;
  subtitle: string;
};

type BlockTypeWithCase<T> = BlockType & {
  cases: T[];
};

type CaseType = {
  category: string;
  description: string;
  tagline: string;
};

export type CaseTypeWithCta = CaseType & {
  cta: string;
};

type PictureType = {
  description: string;
  title: string;
};

type ReviewType = {
  author: string;
  date: string;
  review: string;
};

export type Block1Type = BlockTypeWithCase<CaseTypeWithCta>;

export type Block2Type = BlockTypeWithCase<string>;

export type BlockD2Type = BlockType & {
  btn_1: string[];
  btn_2: string[];
  btn_3: string;
  btn_4: string[];
  btn_5: string;
  btn_6: string;
};

export type Block3Type = BlockTypeWithCase<CaseType>;

export type Block4Type = BlockType & {
  pictos: PictureType[];
  text: string;
  text_title: string;
};

export type Block5Type = BlockType & {
  footer: string;
  reviews: ReviewType[];
  text: string;
};

export type Block6Type = BlockType & {
  button: string;
  text: string;
};
