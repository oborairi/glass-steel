export interface SubItem {
  label: string;
  href: string;
}

export interface NavGroup {
  label: string;
  href: string;
  children?: SubItem[];
}

export const navigation: NavGroup[] = [
  {
    label: "Anasayfa",
    href: "/",
  },
  {
    label: "Hakkımızda",
    href: "/hakkimizda",
  },
  {
    label: "Temsilciliklerimiz",
    href: "/temsilciliklerimiz",
  },
  {
    label: "İletişim",
    href: "/iletisim",
  },
];
