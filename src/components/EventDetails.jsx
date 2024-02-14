import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import './EventDetails.css';

const EventHeader = () => (
  <Card className="mb-3">
    <Card.Body>
      <Card.Title>春合宿マニュアル_2024</Card.Title>
      <Card.Text>
        <strong>期間:</strong> 2024年2月22日(木)〜2024年2月24日<br />
        <strong>開催場所:</strong> 桃山学院大学
      </Card.Text>
    </Card.Body>
  </Card>
);

const Schedule = () => (
  <Card className="mb-3">
    <Card.Header>スケジュール</Card.Header>
    <ListGroup variant="flush">
      {/* 2月23日のスケジュール */}
      <ListGroup.Item><strong>2月23日（金）</strong></ListGroup.Item>
      <ListGroup.Item>9:30 - 大きい教室（1-205）で開場<br/>（受付、名簿確認、お金徴収）</ListGroup.Item>
      <ListGroup.Item>10:00 - 集合完了、イベント開始、イベント説明、アイデアソンチュートリアル、自己紹介</ListGroup.Item>
      <ListGroup.Item>11:00 - 案発表、ロボ団集合</ListGroup.Item>
      <ListGroup.Item>12:30 - 休憩、弁当とるタイム、バッファ</ListGroup.Item>
      <ListGroup.Item>13:00 - チーム決め、チーム企画決め、メンター配属先決定、稼働時間の相談、企画発表資料作り</ListGroup.Item>
      <ListGroup.Item>16:00 - 企画発表、ピザ投票終了</ListGroup.Item>
      <ListGroup.Item>17:00 - 合宿棟に移動、ピザ注文、18時半受け取り</ListGroup.Item>
      <ListGroup.Item>18:30 - 開発開始</ListGroup.Item>
      <ListGroup.Item>19:00 - 各自お風呂、ピザパーティ開始</ListGroup.Item>
      <ListGroup.Item>21:00 - ピザパーティ終了、22時に一日のみの参加者帰宅</ListGroup.Item>
      <ListGroup.Item>0:00 - 消灯時間（仮）、魔材注入</ListGroup.Item>

      {/* 2月24日のスケジュール */}
      <ListGroup.Item><strong>2月24日（土）</strong></ListGroup.Item>
      <ListGroup.Item>8:00 - ラジオ第四体操</ListGroup.Item>
      <ListGroup.Item>10:00 - 片付け、大きい教室（1-205）・小さい教室移動（1-206,207,208,209,210）</ListGroup.Item>
      <ListGroup.Item>14:30 - 開発終了、成果発表</ListGroup.Item>
      <ListGroup.Item>16:00 - メンター陣の話し合い、審査結果発表、表彰式</ListGroup.Item>
      <ListGroup.Item>イベント終了、部長終了の挨拶、打ち上げ</ListGroup.Item>
    </ListGroup>
  </Card>
);


const Fees = () => (
  <Card className="mb-3">
    <Card.Header>参加費</Card.Header>
    <Card.Body>
      <p>桃山学院大学 生徒: 2000円 (22日のみ), 2500円</p>
      <p>桃山学院大学 教職員: 2500円</p>
      <p>他校 生徒: 3000円</p>
      <p>社会人: 3500円</p>
    </Card.Body>
  </Card>
);

const Preparation = () => (
  <Card className="mb-3">
    <Card.Header>用意するもの</Card.Header>
    <ListGroup variant="flush">
      <ListGroup.Item>気持ち</ListGroup.Item>
      <ListGroup.Item>パソコン</ListGroup.Item>
      <ListGroup.Item>着替え</ListGroup.Item>
      <ListGroup.Item>お風呂セット（シャンプー、バスタオル、ドライヤーなど）</ListGroup.Item>
    </ListGroup>
  </Card>
);
const Notes = () => (
  <Card className="mb-3">
    <Card.Header>注意</Card.Header>
    <Card.Body>
      <p>公序良俗に反しない範囲で作品を作りましょう。</p>
    </Card.Body>
  </Card>
);

const EventDetails = () => (
  <Container>
    <Row className="justify-content-md-center">
      <Col xs={12} md={8}>
        <EventHeader />
        <Schedule />
        <Fees />
        <Preparation />
        <Notes />
      </Col>
    </Row>
  </Container>
);

export default EventDetails;