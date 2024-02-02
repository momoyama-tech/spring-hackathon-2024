import React from 'react';
import './No1.css'; // スタイルシートを適宜調整してください

// Image URL or local image path
const imageUrl = './IMG_3754.jpg';

const No2 = () => {
  return (
    <div className="article-page">
      <header className="article-header">
        <img src={imageUrl} alt="Techno Brave" className="article-image" />
        <h1>革命機神テクノブレイブ ～暗黒学院 桃山～</h1>
        <p>RUBICON Makimaki イそっち（けが人救出の姿） DAVIS（助っ人）</p>
      </header>
      <main className="article-content">
        <section>
          <h2>テーマ解釈</h2>
          <p>
            桃山学院を舞台にした学生たちの冒険と挑戦、自由と革命の精神を探求します。ロボットシミュレーションRPGとして、学生たちの日常から抜け出し、非日常の戦いに挑む姿を描きます。
          </p>
        </section>
        <section>
          <h2>企画概要</h2>
          <p>
            学生たちが開発したロボット「テクノブレイブ」を操作し、学院の平和を守るために戦います。戦略的な思考とチームワークが勝利の鍵を握る、深みのあるゲームプレイを提供します。
          </p>
        </section>
        <section>
          <h2>技術構成</h2>
          <p>
            UnityとAI技術を駆使し、リアルタイムでの戦闘システムと、魅力的なキャラクターイラストを実現しました。プレイヤーは自分の戦略に合わせてロボットをカスタマイズできます。
          </p>
        </section>
        <section>
          <h2>まとめ・展望</h2>
          <p>
            テクノブレイブの世界観を深め、プレイヤーがさらに没入できるような内容拡張を計画中です。未来のアップデートで、新たな敵機体やストーリー展開を期待してください。
          </p>
        </section>
      </main>
    </div>
  );
};

export default No2;
