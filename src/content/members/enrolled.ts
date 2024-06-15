import type { Member } from "../../types/member";

enum Grade {
  FacultyMembers = "教員",
  ResearchStudents = "研究生",
  D3 = "D3",
  D2 = "D2",
  D1 = "D1",
  M2 = "M2",
  M1 = "M1",
  B4 = "B4",
  B3 = "B3",
}

type EnrolledMembersType = {
  grade: Grade;
  color?: string;
  members: Member[];
};

export const enrolledMembers: EnrolledMembersType[] = [
  {
    grade: Grade.FacultyMembers,
    color: "#000",
    members: [
      {
        name: "真鍋　宏幸",
        altName: "Hiroyuki Manabe",
        role: "芝浦工業大学 工学部 情報工学科 教授",
        link: "http://pai.ise.shibaura-it.ac.jp/manabe.html",
        image: "/member/manabe.webp",
      },
    ],
  },
  {
    grade: Grade.M2,
    color: "#ad0000",
    members: [
      {
        name: "TOMOHITO SUZUKI",
        altName: "TOMOHITO SUZUKI",
        image: "/member/suzuki.webp",
      },
      { name: "SHO BABA", altName: "SHO BABA" },
      { name: "TATSUYA KAWASAKI", altName: "TATSUYA KAWASAKI" },
      { name: "KOSEI TANAKA", altName: "KOSEI TANAKA" },
      {
        name: "RYOTO NOHARA",
        altName: "RYOTO NOHARA",
        image: "/member/nohara.webp",
      },
      {
        name: "TSUBASA OTAKI",
        altName: "TSUBASA OTAKI",
        image: "/member/otaki.webp",
      },
      { name: "REO SHIMODA", altName: "REO SHIMODA" },
      { name: "Zheng Yi", altName: "Zheng Yi" },
      { name: "TOGA ABE", altName: "TOGA ABE", image: "/member/abe.webp" },
    ],
  },
  {
    grade: Grade.M1,
    color: "#dd9933",
    members: [
      { name: "EIICHIRO SAKURAI", altName: "EIICHIRO SAKURAI" },
      {
        name: "KAZUHIRO TAKEDA",
        altName: "KAZUHIRO TAKEDA",
        image: "/member/takeda.webp",
      },
      { name: "NAOKI KUNIEDA", altName: "NAOKI KUNIEDA" },
      {
        name: "ATSUYA TSUCHIKAWA",
        altName: "ATSUYA TSUCHIKAWA",
        image: "/member/tsuchikawa.webp",
      },
      {
        name: "SHOGO YAGETA",
        altName: "SHOGO YAGETA",
        image: "/member/yageta.webp",
      },
      { name: "YU SHUKYO", altName: "YU SHUKYO" },
    ],
  },
  {
    grade: Grade.B4,
    color: "#16a34a",
    members: [
      { name: "YUYA OKU", altName: "YUYA OKU" },
      { name: "DAIJIRO JORAKU", altName: "DAIJIRO JORAKU" },
      { name: "岡崎　廉", altName: "岡崎　廉" },
      { name: "NAOKI YOSHIOKA", altName: "NAOKI YOSHIOKA" },
      {
        name: "SHINICHI ISHIHARA",
        altName: "SHINICHI ISHIHARA",
        image: "/member/ishihara.webp",
      },
      { name: "MASANARI TAMAKI", altName: "MASANARI TAMAKI" },
      { name: "西野　奨真", altName: "西野　奨真" },
      {
        name: "YUKI FUKAI",
        altName: "YUKI FUKAI",
        image: "/member/fukai.webp",
      },
      { name: "YUDAI HIYAMA", altName: "YUDAI HIYAMA" },
      { name: "TASUKU KAZAMI", altName: "TASUKU KAZAMI" },
      {
        name: "CHIHAYA KOBAYASHI",
        altName: "CHIHAYA KOBAYASHI",
        image: "/member/kobayashi.webp",
      },
    ],
  },
  {
    grade: Grade.ResearchStudents,
    color: "#737373",
    members: [{ name: "RYU　SUIGEN", altName: "RYU　SUIGEN" }],
  },
];
