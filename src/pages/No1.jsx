import React from 'react';
import './No1.css'; // スタイルシートを適宜調整してください

// 画像URLやローカルの画像パス
const imageUrl = "/no1_2.png";

const No1 = () => {
  return (
    <div className="article-page">
      <header className="article-header">
        <img src={imageUrl} alt="Music Atelier" className="article-image"/>
        <h1>「Music Atelier」- 音楽制作をもっと身近に</h1>
        <p>FH、TA、Oによる革新的なプロジェクト</p>
      </header>
      <main className="article-content">
        <section>
          <h2>テーマ解釈について</h2>
          <p>
            「大学生だからできること」をテーマに、私たちは時間を利用して趣味を深め、創作活動に挑戦する重要性を探求しました。その結果、ゲーム感覚で音楽を製作できる「Music Atelier」を開発することにしました。
          </p>
        </section>
        <section>
          <h2>作ったゲームの概要</h2>
          <p>
            「Music Atelier」は、音楽制作の部活を立ち上げた大学生が主人公の物語です。ユーザーは依頼形式で音楽を制作し、部活の評判を上げることを目指します。評判が上がると、使用できる楽器が増え、より豊かな音楽制作が可能になります。
          </p>
        </section>
        <section>
          <h2>こだわりのポイント</h2>
          <p>
            私たちは、DTMソフトウェアの複雑さを維持しつつ、初心者でも簡単に扱えるようにデザインしました。音階や音の長さを制限することで、ユーザーがメロディー作成に集中できる環境を提供します。
          </p>
        </section>
        <section>
          <h2>実装の達成度</h2>
          <p>
            【出来たこと】音楽制作画面の実装が完了し、ユーザーは自分でタイミングを指定して音を鳴らせるようになりました。バックミュージックが変わってもBPMに対応できる設計になっています。
          </p>
          <p>
            【出来なかったこと】現在、ストーリーモードとゲームクリアの評価システムは未実装です。また、フリーモードや音楽ファイルの保存機能も今後の課題として残っています。
          </p>
        </section>
      </main>
    </div>
  );
}

export default No1;

