export type FeatureIcon =
  | "setup"
  | "payroll"
  | "hr"
  | "compliance"
  | "expert"
  | "efficient"
  | "tailored"
  | "trusted";

export type FeatureItem = {
  title: string;
  description: string;
  icon: FeatureIcon;
};
