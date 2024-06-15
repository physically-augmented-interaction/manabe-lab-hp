export interface Member {
  name: string;
  altName?: string;
  role?: string;
  link?: string;
  color?: string;
  image?: string;
  study?: string;
}

export interface GraduatedMember extends Member {
  careerPath: string;
}
