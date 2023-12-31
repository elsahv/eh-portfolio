import { ReactNode } from "react";
import { PortableTextBlock } from "sanity";

export type Project = {
  description: ReactNode;
  _id: string;
  createdAt: Date;
  name: string;
  slug: string;
  image: string;
  url: string;
  githublink: string;
  body: PortableTextBlock[];
}