export type FeatureIcon =
  | "tax"
  | "business"
  | "permits"
  | "support"
  | "expert"
  | "efficient"
  | "tailored"
  | "trusted";

export type FeatureItem = {
  title: string;
  description: string;
  icon: FeatureIcon;
};
