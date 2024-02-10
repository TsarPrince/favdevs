import type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
} from "sanity-codegen";

export type {
  SanityReference,
  SanityKeyedReference,
  SanityAsset,
  SanityImage,
  SanityFile,
  SanityGeoPoint,
  SanityBlock,
  SanityDocument,
  SanityImageCrop,
  SanityImageHotspot,
  SanityKeyed,
  SanityImageAsset,
  SanityImageMetadata,
  SanityImageDimensions,
  SanityImagePalette,
  SanityImagePaletteSwatch,
};

/**
 * Category
 *
 *
 */
export interface Category extends SanityDocument {
  _type: "category";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Color — `string`
   *
   * Color of the category
   */
  color?: "green" | "blue" | "purple" | "orange";

  /**
   * Description — `text`
   *
   *
   */
  description?: string;
}

/**
 * Settings
 *
 *
 */
export interface Settings extends SanityDocument {
  _type: "settings";

  /**
   * Site title — `string`
   *
   *
   */
  title?: string;

  /**
   * URL — `url`
   *
   * The main site url. Used to create canonical url
   */
  url?: string;

  /**
   * Copyright Name — `string`
   *
   * Enter company name to appear in footer after ©
   */
  copyright?: string;

  /**
   * Main logo — `image`
   *
   * Upload your main logo here. SVG preferred.
   */
  logo?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Alternate logo (optional) — `image`
   *
   * Upload alternate logo here. it can be light / dark variation
   */
  logoalt?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Support Email — `string`
   *
   *
   */
  email?: string;

  /**
   * Support Phone — `string`
   *
   *
   */
  phone?: string;

  /**
   * Web3Forms Access Key — `string`
   *
   * Enter Access key obtained from web3forms.com. It is required to make the form work.
   */
  w3ckey?: string;

  /**
   * Social Links — `array`
   *
   * Enter your Social Media URLs
   */
  social?: Array<
    SanityKeyed<{
      /**
       * Choose Social Media — `string`
       *
       *
       */
      media?: "twitter" | "facebook" | "instagram" | "linkedin" | "youtube";

      /**
       * Full Profile URL — `url`
       *
       *
       */
      url?: string;
    }>
  >;

  /**
   * Meta Description — `text`
   *
   * Enter SEO Meta Description
   */
  description?: string;

  /**
   * Open Graph Image — `image`
   *
   * Image for sharing previews on Facebook, Twitter etc.
   */
  openGraphImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;
  };
}

/**
 * Success Stories
 *
 *
 */
export interface SuccessStories extends SanityDocument {
  _type: "successStories";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };

  /**
   * Heading — `string`
   *
   *
   */
  heading?: string;

  /**
   * Description — `string`
   *
   *
   */
  description?: string;

  /**
   * About — `string`
   *
   *
   */
  about?: string;

  /**
   * Main image — `image`
   *
   *
   */
  mainImage?: {
    _type: "image";
    asset: SanityReference<SanityImageAsset>;
    crop?: SanityImageCrop;
    hotspot?: SanityImageHotspot;

    /**
     * Alternative text — `string`
     *
     * Important for SEO and accessiblity.
     */
    alt?: string;
  };

  /**
   * Services Used — `array`
   *
   *
   */
  services?: Array<SanityKeyedReference<Service>>;

  /**
   * Body — `blockContent`
   *
   *
   */
  body?: BlockContent;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Service
 *
 *
 */
export interface Service extends SanityDocument {
  _type: "service";

  /**
   * Title — `string`
   *
   *
   */
  title?: string;

  /**
   * Slug — `slug`
   *
   *
   */
  slug?: { _type: "slug"; current: string };
}

export type BlockContent = Array<
  | SanityKeyed<SanityBlock>
  | SanityKeyed<{
      _type: "image";
      asset: SanityReference<SanityImageAsset>;
      crop?: SanityImageCrop;
      hotspot?: SanityImageHotspot;
    }>
  | SanityKeyed<Code>
  | SanityKeyed<{
      _type: "embed";
      /**
       * url — `url`
       *
       * Enter the URL to Embed 
(eg: https://youtube.com/embed/xxx or https://open.spotify.com/embed/track/xxxx)
       */
      url?: string;

      /**
       * height — `number`
       *
       * Enter Required Height for this Embed. Leave it blank for 16:9 ratio.
       */
      height?: number;
    }>
  | SanityKeyed<{
      _type: "tables";
      /**
       * Add Table — `table`
       *
       * The first row will be treated as the header. If you want to skip, just leave the first row empty.
       */
      table?: Table;
    }>
>;

export type Documents = Category | Settings | SuccessStories | Service;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Code = any;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type Table = any;
