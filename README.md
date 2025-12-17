# 真鍋研究室 HP

このリポジトリは、 https://pai.eng.shibaura-it.ac.jp/ のソースコードです。
何かあったら Slack の 卒業生チャンネルで AL21127 宛に連絡してください。（卒業済みですが対処します）

## フレームワーク・技術スタック

- Node.js
- TypeScript
- [Astro](https://astro.build/)
- [Panda CSS](https://panda-css.com/)

## 環境構築

ホームページの更新をするためにはまず環境構築が必要です。

詳しくは[環境構築](./environment.md)を参照してください。

## 更新した記事を公開する方法

GitHubの`main`ブランチが更新されると、GitHub Actionsによって自動的にビルドが行われ、公開されます。
適切なブランチを切り、変更をコミットし、プッシュし、プルリクエストを作成、マージすることで記事を更新することができます。
またおすすめはしませんが、`main`ブランチに直接コミットすることも可能です。

## ブログ（活動報告）の更新本方法

記事は[マークダウン形式](https://qiita.com/tbpgr/items/989c6badefff69377da7)で記述します。
`src/content/reports` 以下に `.mdx` ファイルを追加することで、ブログを更新することができます。
また、画像を追加する場合は `src/content/reports/images` 以下に画像を追加し、`.mdx` ファイル内で読み込むことができます。

### ブログのフォーマット

```markdown
---
title: "記事のタイトル"
description: "記事の概要"
pubDate: "2024-06-07T12:00:00.000Z"　// 公開日時 日付はISO 8601形式で記述すること
tags: ["学会発表", "学生報告", "研究成果"] // タグ(任意)
heroImage: "./images/chi2024/1.jpg" // サムネイル画像(任意)
updateDate: "2024-06-07T12:00:00.000Z" // 更新日時(任意)

---

ここに記事の内容をマークダウン形式で記述します。

// 画像の読み込みは以下のように行います
// 通常の画像読み込みよりも、最適化された画像を読み込むことができます

import Image1 from "./images/event/1.jpg"

<Image src={Image1} alt="event" />

```

### 画像の読み込みについて

画像は通常のマークダウン記法ではなく、MDX形式で行ってください。以下に手順を示します。

1. 画像を `src/content/reports/images` 以下に配置します。基本的には、記事のタイトルのフォルダを作成し、その中に画像を配置すると良いでしょう。
  1. 例: `src/content/reports/images/chi2024/1.jpg`
1. 画像を読み込むために、`.mdx` ファイル内で画像をインポートします。
  1. 例: `import Image1 from "./images/chi2024/1.jpg"`
1. 画像を表示するために、`<Image src={Image1} alt="event" />` のように記述します。
  1. `src` には、インポートした画像を指定します。
  1. import文からは1行以上間隔を空けないとエラーが出ることがあります。

## メンバーの更新方法

メンバーは `src/content/members` 以下の2つのTypeScriptファイルで管理されています。

### 現在所属中のメンバー

`src/content/members/enrolled.ts` には、現在所属中のメンバーが記述されています。

```typescript
export const enrolledMembers = [
  {
    grade: "学年or役職",
    color: "背景色",
    members: [ // 学年ごとに、この配列にメンバーを追加してください
      {
        name: "真鍋　宏幸",
        altName: "Hiroyuki Manabe",
        role: "芝浦工業大学 工学部 教授",
        link: "https://pai.eng.shibaura-it.ac.jp/profile/",
        image: "/member/manabe.webp",
      },
    ],
  },
  // 他のメンバー
];
```

### 卒業生メンバー

`src/content/members/graduates.ts` には、卒業生メンバーが記述されています。

```typescript
enum CareerPath { // 進路
  GRADUATE = "内部進学",
  EMPLOYMENT = "就職",
  OTHER_UNIVERSITY = "他大進学",
  WITHDRAWAL = "中退",
}

export const graduatedMembers: GraduatedMembersType[] = [
  {
    graduatedYear: 2023, // 卒業年
    group: [
      {
        curriculum: Curriculum.MASTER, // 学位
        members: [
          {
            name: "名前",
            study: "研究内容",
            careerPath: CareerPath.EMPLOYMENT, // 進路: 就職
          },
          {
            name: "名前",
            study:
              "研究内容",
            careerPath: CareerPath.GRADUATE, // 進路: 内部進学
          },
          // 他のメンバー
        ],
      },
      {
        curriculum: Curriculum.BACHELOR, // 学位
        members: [
          // 他のメンバー
        ],
      },
    ],
  },
  // 他の年度の卒業生
];
```

## 研究内容・研究成果の更新方法

研究内容・研究成果は `src/pages/study.mdx` および `src/content/result.tsx` の2つのファイルで管理されています。
マークダウンを記述することで更新を行えます。

## 真部先生のプロフィールの更新方法

真部先生のプロフィールは `src/pages/profile` 内のファイルで管理されています。
- `src/pages/profile/index.astro` : 「経歴ほか」をastro形式で記述。HTMLタグを使うことができます。
- `src/pages/profile/research.mdx` : 「主な研究」をMDX形式で記述。マークダウンおよびHTMLタグを使うことができます。
- `src/pages/profile/publication.mdx` : 「研究業績」をMDX形式で記述。マークダウンおよびHTMLタグを使うことができます。

##  Commands

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
