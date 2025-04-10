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
    graduatedYear: 2024,
    group: [
      {
        curriculum: Curriculum.MASTER,
        members: [
          {
            name: "鈴木　智仁",
            study: "フラックスレスはんだを用いた銀ナノインク・導電転写箔配線に対するはんだ付け部品実装手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "馬場　章",
            study: "VRHMDを臥位で利用することを想定した視野外情報の立体オーバーレイ提示手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "川崎　竜也",
            study: "LensTouch: スマートグラスのレンズ面を使用した入力手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "田中　航生",
            study: "エクサゲームのための部位に特化した準備運動用エクサゲーム",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "野原　僚人",
            study: "ウェアラブルキーボードと仮想キーボードを組み合わせたHMDでのマルチモーダルな文字入力手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "大瀧　翼",
            study: "爪の先端に対する力とタッチを組み合わせた入力を可能とするネイル装着型デバイス",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "下田　怜央",
            study: "FreelForce: 任意のタイミングで使用可能なリール型力覚提示デバイス",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "鄭　熠",
            study: "ジム利用者向けウェイトトレーニングにおける重量と回数の記録システム",
            careerPath: CareerPath.EMPLOYMENT,
          }
        ]
      },
      {
        curriculum: Curriculum.BACHELOR,
        members: [
          {
            name: "風見　翼",
            study: "ユーザに対象を視認させないためのAR環境向け視線誘導手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "上樂　大治朗",
            study: "外箱と内容物に合わせた梱包材製作手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "岡崎　廉",
            study: "加速度センサを用いたヘルメットへのタップ入力手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "吉岡　直輝",
            study: "SealingLid: 傾斜壁を倒してふたとして用いる3D印刷手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "屋　雄弥",
            study: "複数のホイールを用いたメガネ型デバイス向け入力手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "石原　慎一",
            study: "柔軟なスクリーンを利用した直接触れられるボリュメトリックディスプレイ",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "玉木　将成",
            study: "測距センサアレイを用いて複数の指位置を推定する手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "深井　悠稀",
            study: "分割印刷とPPPを用いた3D印刷におけるフィラメント削減手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "檜山　侑大",
            study: "耳たぶの柔らかさを利用した入力手法",
            careerPath: CareerPath.EMPLOYMENT,
          }
        ]
      }
    ]
  },
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
  {
    graduatedYear: 2022,
    group: [
      {
        curriculum: Curriculum.MASTER,
        members: [
          {
            name: "上田　裕貴",
            study:
              "AR グラスを用いた実世界への視線誘導効果とその注意力への影響",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "鈴木　拓海",
            study: "静電容量画像を用いた筆型パッシブスタイラスの角度推定",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "TANTIWORACHOT Chaiyapat",
            study:
              "Application, Implementation and the Emerging Importance of Slow Technology in the Fast-paced World",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "花田　晶彦",
            study:
              "AR グラスとスマートフォンを併用した映像拡張手法と映像コンテンツの関係",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "辺見　優天",
            study:
              "3D プリンタによるホットスタンプ多層回路における最適化のための検討",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "兼平　大輔",
            careerPath: CareerPath.WITHDRAWAL,
          },
        ],
      },
      {
        curriculum: Curriculum.BACHELOR,
        members: [
          {
            name: "鈴木　智仁",
            study: "導電転写箔と通常のはんだによる電子部品実装手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "馬場　章",
            study: "擬人化した指とコントローラを用いたVRアバタの四肢操作",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "内田　友哉",
            study: "XRにおける画面占有が少ない横並び50音キーボード",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "川崎　竜也",
            study: "スマートグラスのレンズ面を使った文字入力",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "鈴木　拓実",
            study:
              "足音を使った移動距離を変化させるリダイレクテッドウォーキング",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "成松　廉",
            study: "固定したtoioを用いてタイルを移動させる手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "田中　航生",
            study: "運動の促進を目的としたSASSENの改良",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "上島　芽久",
            study:
              "三人称視点で提示されたアバタに対する線を用いた身体化感覚生起手法",
            careerPath: CareerPath.OTHER_UNIVERSITY,
          },
          {
            name: "野原　僚人",
            study: "HMKの拡張によるタイピングの効率化",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "大瀧　翼",
            study: "爪の先端を用いたジェスチャ入力を可能とする付け爪型デバイス",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "佐藤　悠司",
            study: "HADOプレイ動機に繋がる視聴用視点切替映像",
            careerPath: CareerPath.EMPLOYMENT,
          },
        ],
      },
    ],
  },
  {
    graduatedYear: 2021,
    group: [
      {
        curriculum: Curriculum.MASTER,
        members: [
          {
            name: "今井　悠平",
            study: "3D プリンタと転写箔を用いた電子基板の製作手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
        ],
      },
      {
        curriculum: Curriculum.BACHELOR,
        members: [
          {
            name: "藤野　貴裕",
            study: "HMDを用いた半田付け作業の効率化",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "阿部　広河",
            study:
              "寝ながらVRHMDを使用した場合における快適な文字入力手法の提案",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "阿部　冬雅",
            study: "VRで複雑な操作を行うための舌による入力補助",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "井澤　明信",
            study: "複数人環境を実現するARグラスを用いた1人サッカー練習",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "植田　建斗",
            study: "方向提示を目的とした熱刺激を用いた首輪型デバイス",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "小川　拓実",
            study:
              "HMDを用いたティーバッティングによるバトミントンの練習システム",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "兼井　あかり",
            study: "大学体育のためのコミュニケーションを促すオンラインスポーツ",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "兼平　大輔",
            study: "透明でシート状な静電容量方式タッチパッドの簡便な作成手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "陸　路",
            study: "HMD装着中にスマートフォンを片手で操作する手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "Wahyu Hutama",
            study: "HMK習得速度向上のためのキートップの改良",
            careerPath: CareerPath.EMPLOYMENT,
          },
        ],
      },
    ],
  },
  {
    graduatedYear: 2020,
    group: [
      {
        curriculum: Curriculum.BACHELOR,
        members: [
          {
            name: "上田　裕貴",
            study: "左右に異なるレンズを用いたHMDの視野角拡張",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "高𣘺　杏奈",
            study: "オンライン授業で注意を促すぬいぐるみアバタ",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "辺見　優天",
            study: "両手の指の接触を利用した日本語入力手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "黒田　秦成",
            study: "ぼかしを用いたVR空間内瞬き促進手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "後藤　新",
            study: "電線を用いたドローンの効率的な移動手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "上杉　嶺",
            study: "モーションキャプチャを用いたロックダンスの停止練習の補助",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "星野　詩織",
            study: "AR Touch : ARグラスのレンズ面を用いた入力手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "吉田　浩人",
            study: "静電容量タッチセンサを用いたタッチタイピング習得支援手法",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "花田　晶彦",
            study:
              "手の甲に配置したBackhand display -円滑な複数デバイスの切り替え効果及び入力手法の拡張-",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "原島　輝",
            study: "HMK : VRテキスト入力用ヘッドマウントキーボード",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "寺島　拓海",
            study:
              "パラメトリックスピーカによるマスク装着時のコミュニケーションの補助と拡張",
            careerPath: CareerPath.EMPLOYMENT,
          },
        ],
      },
    ],
  },
  {
    graduatedYear: 2019,
    group: [
      {
        curriculum: Curriculum.BACHELOR,
        members: [
          {
            name: "今井　悠平",
            study: "3Dプリンタと転写箔を用いた両面基盤の製作手法",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "岩井　祐樹",
            study: "Backhand display: 手の甲に配置した入出力デバイス",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "田中　智泰",
            study: "スマートフォンカメラとピンホールを用いた超接近型多次元入力",
            careerPath: CareerPath.GRADUATE,
          },
          {
            name: "橋本　秀喜",
            study: "腹部に配置した上向きカメラによるジェスチャ認識",
            careerPath: CareerPath.EMPLOYMENT,
          },
          {
            name: "藤塚　綾",
            study: "VR空間における高速移動手法の比較",
            careerPath: CareerPath.EMPLOYMENT,
          },
        ],
      },
    ],
  },
];
