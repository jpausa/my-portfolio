
export type Domain = "www" | "alumni" | "exed" | "intranet";

export interface ContentfulContentType {
  id?: string;
  name?: string;
  contentTypeId?: string;
}

export interface ContentfulEntryQuery {
  [key: string]: string | number;
}

// export interface ContentfulEntry {
//   contentTypeId: string;
//   fields: FieldsType;
//   sys: EntrySys;
// }

export interface ContentfulAsset {
  title?: string;
  description?: string;
  file?: {
    url?: string;
    fileName?: string;
    contentType?: string;
  };
}

// export interface ContentfulTextBlock {
//   name?: string;
//   title?: MlRichTextProps;
//   body?: MlRichTextProps;
// }

// export interface Site {
//   baseUrl?: string;
//   domain?: Domain;
//   header?: OrSiteHeaderProps;
//   footer?: OrSiteFooterProps;
//   dataRegion?: string;
// }

// export interface Page {
//   title?: string;
//   metaTitle?: string;
//   metaDescription?: string;
//   opengraphDescription?: string;
//   noIndex?: boolean;
//   noFollow?: boolean;
//   canonicalLink?: string;
//   site?: Site;
//   parentPage?: Page;
//   slug?: string;
//   fullSlug?: string;
//   dataRegion?: string;
//   template?: TmFlexProps;
// }
