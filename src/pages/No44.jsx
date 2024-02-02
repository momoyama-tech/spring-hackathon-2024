import React from 'react';
import './No1.css'; // スタイルシートを適宜調整してください

// Image URL or local image path
const imageUrl = './aaa.png';

const No4 = () => {
  return (
    <div className="article-page">
      <header className="article-header">
        <img src={imageUrl} alt="Thesis Writing Challenges" className="article-image" />
        <h1>卒論制作の限界☆挑戦</h1>
        <p>チームメンバー：櫻井、やす、山雲、AYATO</p>
      </header>
      <main className="article-content">
        <section>
          <h2>企画の概要</h2>
          <p>
            卒論制作の難しさをマルチタスクゲームとして表現します。体力、メンタル、時間のゲージを管理しながら卒論を完成させることを目指します。ゲームを通じて、大学生が卒論制作で直面する挑戦を体験できます。
          </p>
        </section>
        <section>
          <h2>技術構成</h2>
          <p>
            Unityを使った開発に加え、教授の動画はLive2Dで実現しました。これにより、リアルな教授とのやり取りが可能となり、より没入感のあるゲームプレイを提供します。
          </p>
        </section>
        <section>
          <h2>ゲームの特徴</h2>
          <p>
            卒論制作に必要なスキルのバランスを取りながら、限界まで自分を追い込む体験をゲーム化しました。プレイヤーはリアルタイムで判断を下し、効率的な時間管理を行う必要があります。
          </p>
        </section>
      </main>
    </div>
  );
};

export default No4;
