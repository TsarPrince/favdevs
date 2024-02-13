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
 * Landing Page
 *
 *
 */
export interface LandingPage extends SanityDocument {
  _type: "landingPage";

  /**
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Title — `string`
     *
     *
     */
    title?: string;

    /**
     * Description — `string`
     *
     *
     */
    description?: string;

    /**
     * Image — `image`
     *
     *
     */
    image?: {
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
     * Primary Button — `reference`
     *
     *
     */
    primaryButton?: SanityReference<Button>;

    /**
     * Secondary Button — `reference`
     *
     *
     */
    secondaryButton?: SanityReference<Button>;
  };

  /**
   * Features — `array`
   *
   *
   */
  features?: Array<
    SanityKeyed<{
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
       * Image — `image`
       *
       *
       */
      image?: {
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
       * Type — `string`
       *
       *
       */
      type?: "ctaButton" | "list" | "metrics";

      /**
       * Button — `reference`
       *
       *
       */
      button?: SanityReference<Button>;

      /**
       * List — `array`
       *
       *
       */
      list?: Array<SanityKeyed<string>>;

      /**
       * Metrics — `array`
       *
       *
       */
      metrics?: Array<
        SanityKeyed<{
          /**
           * Key — `string`
           *
           *
           */
          key?: string;

          /**
           * Value — `number`
           *
           *
           */
          value?: number;

          /**
           * Symbol — `string`
           *
           *
           */
          symbol?: string;
        }>
      >;
    }>
  >;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
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
 * Marketing Solutions
 *
 *
 */
export interface MarketingSolutions extends SanityDocument {
  _type: "marketingSolutions";

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
   * Header — `object`
   *
   *
   */
  header?: {
    _type: "header";
    /**
     * Description — `string`
     *
     *
     */
    description?: string;

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
     * Button — `reference`
     *
     *
     */
    button?: SanityReference<Button>;
  };

  /**
   * Features — `array`
   *
   *
   */
  features?: Array<
    SanityKeyed<{
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
       * Image — `image`
       *
       *
       */
      image?: {
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
       * Type — `string`
       *
       *
       */
      type?: "ctaButton" | "list" | "metrics";

      /**
       * Button — `reference`
       *
       *
       */
      button?: SanityReference<Button>;

      /**
       * List — `array`
       *
       *
       */
      list?: Array<SanityKeyed<string>>;

      /**
       * Metrics — `object`
       *
       *
       */
      metrics?: {
        _type: "metrics";
        /**
         * Key — `string`
         *
         *
         */
        key?: string;

        /**
         * Value — `number`
         *
         *
         */
        value?: number;

        /**
         * Symbol — `string`
         *
         *
         */
        symbol?: string;
      };
    }>
  >;

  /**
   * Published at — `datetime`
   *
   *
   */
  publishedAt?: string;
}

/**
 * Button
 *
 *
 */
export interface Button extends SanityDocument {
  _type: "button";

  /**
   * Text — `string`
   *
   *
   */
  text?: string;

  /**
   * Path — `string`
   *
   *
   */
  path?: string;
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

export type Documents =
  | Settings
  | LandingPage
  | SuccessStories
  | MarketingSolutions
  | Button
  | Service;

/**
 * This interface is a stub. It was referenced in your sanity schema but
 * the definition was not actually found. Future versions of
 * sanity-codegen will let you type this explicity.
 */
type BlockContent = any;
