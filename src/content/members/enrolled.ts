import type { Member } from "../../types/member";

enum Grade {
  FacultyMembers = "教員",
  ResearchStudents = "研究生",
  InternationalStudents = "留学生（Research Exchange Program）",
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
        role: "芝浦工業大学 工学部 教授",
        link: "https://pai.eng.shibaura-it.ac.jp/profile/",
        image: "/member/manabe.webp",
      },
    ],
  },
  {
    grade: Grade.M2,
    color: "#dd9933",
    members: [
      {
        name: "ATSUYA TSUCHIKAWA",
        altName: "ATSUYA TSUCHIKAWA",
        image: "/member/tsuchikawa.webp",
      },
      { name: "EIICHIRO SAKURAI", altName: "EIICHIRO SAKURAI" },
      { name: "NAOKI KUNIEDA", altName: "NAOKI KUNIEDA" },
      {
        name: "KAZUHIRO TAKEDA",
        altName: "KAZUHIRO TAKEDA",
        image: "/member/takeda.webp",
      },
      {
        name: "SHOGO YAGETA",
        altName: "SHOGO YAGETA",
        image: "/member/yageta.webp",
      },
      { name: "YU SHUKYO", altName: "YU SHUKYO" },
      { name: "TOGA ABE", altName: "TOGA ABE", image: "/member/abe.webp" },
    ],
  },
  {
    grade: Grade.M1,
    color: "#16a34a",
    members: [
      { name: "DAIJIRO JORAKU", altName: "DAIJIRO JORAKU" },
      { name: "NAOKI YOSHIOKA", altName: "NAOKI YOSHIOKA" },
      { name: "YUYA OKU", altName: "YUYA OKU" },
      {
        name: "SHINICHI ISHIHARA",
        altName: "SHINICHI ISHIHARA",
        image: "/member/ishihara.webp",
      },
      { name: "MASANARI TAMAKI", altName: "MASANARI TAMAKI" },
      {
        name: "YUKI FUKAI",
        altName: "YUKI FUKAI",
        image: "/member/fukai.webp",
      },
      { name: "RYU SUIGEN", altName: "RYU SUIGEN" },
      { name: "SHIBUTA RENA", altName: "SHIBUTA RENA" }
    ],
  },
  {
    grade: Grade.B4,
    color: "#ad0000",
    members: [
      { name: "佐藤 翼", altName: "佐藤 翼" },
      {
        name: "YOTA MAKINO",
        altName: "YOTA MAKINO",
        image: "/member/makino.webp",
      },
      { name: "Shogo Nagashima", altName: "Shogo Nagashima" },
      { name: "JIN OKII", altName: "JIN OKII" },
      { name: "HONOKA INADA", altName: "HONOKA INADA" },
      {
        name: "YUMA AIUCHI",
        altName: "YUMA AIUCHI",
        image: "/member/aiuchi.webp",
      },
      { name: "KOUSHIN FUKUDA", altName: "KOUSHIN FUKUDA" },
      { name: "RYOMA OKI", altName: "RYOMA OKI" },
      { name: "森岡 つおい", altName: "森岡 つおい" },
      { name: "渡邉 智暁", altName: "渡邉 智暁" },
      {
        name: "CHIHAYA KOBAYASHI",
        altName: "CHIHAYA KOBAYASHI",
        image: "/member/kobayashi.webp",
      },
      { name: "西野　奨真", altName: "西野　奨真" },
    ],
  },
  {
    grade: Grade.InternationalStudents,
    color: "#737373",
    members: [
      { name: "DAVID AIGNER", altName: "DAVID AIGNER" },
    ],
  },
];
