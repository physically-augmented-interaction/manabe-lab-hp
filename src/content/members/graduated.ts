import type { GraduatedMember } from "../../types/member";

enum Curriculum {
  DOCTOR = "博士課程",
  MASTER = "修士課程",
  BACHELOR = "学部卒",
}

enum CareerPath {
  GRADUATE = "内部進学",
  EMPLOYMENT = "就職",
  OTHER_UNIVERSITY = "他大進学",
  WITHDRAWAL = "中退",
}

type GraduatedMembersType = {
  graduatedYear: number;
  group: {
    curriculum: Curriculum;
    members: GraduatedMember[];
  }[];
};

export const graduatedMembers: GraduatedMembersType[] = [
  {
    graduatedYear: 2023,
    group: [
      {
        curriculum: Curriculum.MASTER,
        members: [
          {
            name: "田中　智泰",
            study: "スマートフォンを用いたタッチディスプレイを備えた光学マウス",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "Eldiaz Salman Koeshandika",
            study:
              "Virtual Reality User Experience while Lying Down: Comparison Between Sitting and Standing, and Experience in Different Virtual Heights",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "阿部　広河",
            study: "視線とVRコントローラを併用したポインティング手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "兼井　あかり",
            study:
              "パンデミック禍における大学体育のための反転学習向けエクサゲーム",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "楊　瑞明",
            study: "異なる姿勢におけるVRと現実環境での英単語暗記学習の比較",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "外舘　美幸",
            careerPath: CareerPath.WITHDRAWAL,
          },
        ],
      },
      {
        curriculum: Curriculum.BACHELOR,
        members: [
          {
            name: "土川　敦也",
            study: "頭部装着型タッチパッドを用いたAR/VR向け入力手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "櫻井　瑛一朗",
            study:
              "Flushner: 段差を設けたオブジェクトを挿入し面一と高速化を実現する3Dプリント手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "名倉　誠人",
            study: "エンターテイメント性を高める将棋盤上の駒への演出付与",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "荒川　塁唯",
            study: "上下の首振りに影響されずディスプレイ面の鉛直を維持するHMD",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "目黒　風流人",
            study: "プレイヤー視点を追加したHADO試合動画のリアルタイム生成",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "國枝　直希",
            study:
              "VR環境下における身体背面部へのタップ操作による入力領域拡張手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "仲村　友杜",
            study: "剣撃再現のためのUnityにおける連続的衝突判定の評価",
            careerPath: CareerPath.OTHER_UNIVERSITY,
          },
          {
            name: "武田　和大",
            study:
              "SMART MOVIE: ARグラスとスマホを併用した大画面かつ任意の場所を高品質に視聴可能な映像提示手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "中田　裕紀",
            study: "SlopeShift: 坂道を利用したロボットの3次元空間移動手法",
            careerPath: CareerPath.OTHER_UNIVERSITY,
          },
        ],
      },
    ],
  },
];
