export type LoaderValue = typeof VALID_LOADERS[number];

export type ImageConfig = {
  deviceSizes: number[];
  imageSizes: number[];
  loader: LoaderValue;
  path: string;
  domains?: string[];
  disableStaticImages?: boolean;
  minimumCacheTTL?: number;
};

export const VALID_LOADERS = ['default', 'contensis'];

export const imageConfigDefault = {
  deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
  imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  path: '/',
  loader: 'contensis',
  domains: [],
};
