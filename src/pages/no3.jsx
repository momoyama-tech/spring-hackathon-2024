import React from 'react';
import './No1.css'; // スタイルシートを適宜調整してください

// Image URL or local image path
const imageUrl = '/no3_a.png';

const CollegeTimePass = () => {
  return (
    <div className="article-page">
      <header className="article-header">
        <img src={imageUrl} alt="College Life Entertainment" className="article-image" />
        <h1>大学生の暇つぶし</h1>
        <p>チーム：ひまつぶしZ トシ HY TK</p>
      </header>
      <main className="article-content">
        <section>
          <h2>テーマ解釈</h2>
          <p>
            大学生活の自由時間を最大限に活用し、「パチンコ」という娯楽をテーマに選びました。これは、多様な娯楽が楽しめる大学生活の象徴です。
          </p>
        </section>
        <section>
          <h2>企画概要</h2>
          <p>
            「パチンコを打ちに行くために教授へ言い訳をして授業を休む」をコンセプトにしたゲーム。ChatGPTを活用して、教授への言い訳やその応答をリアルタイムで生成し、プレイヤーはその場を上手く切り抜けなければなりません。
          </p>
        </section>
        <section>
          <h2>技術構成</h2>
          <p>
            UnityとChatGPTを組み合わせて開発しました。この技術構成により、毎回異なるシナリオを体験できるゲームを提供しています。
          </p>
        </section>
        <section>
          <h2>ゲームの面白さ</h2>
          <p>
            教授の応答はChatGPTによって生成されるため、プレイヤーはまるで本当に教授とやり取りをしているかのような体験ができます。これにより、ゲームにリアリティと新鮮さが生まれます。
          </p>
        </section>
      </main>
    </div>
  );
};

export default CollegeTimePass;
