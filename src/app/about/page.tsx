export default function About() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-normal mb-6">About Me</h2>
      <div className="space-y-6 text-base leading-relaxed">
        <p>林利生太（はやし りゅうた）</p>
        <p>兵庫県出身。高知大学理学部で遺伝子工学を専攻。大学在学中に休学し、高知県大豊町でシェアハウスを立ち上げた経験を持つ。</p>
        <p>その後、NPO法人ヒトマキの事務局長として若者支援に携わる。カウンセラーやコーチとして3,000人以上の若者のキャリア支援を行い、中学校で柔道部のコーチや体育の授業を担当した経験も持つ。</p>
        <p>現在は、高知県土佐町で整体師兼トレーナーとして「健康スタジオ百歳製造所」を運営。「健康寿命100歳」を目指し、整体、運動指導、食事、睡眠など、様々な角度から顧客の健康づくりをサポートしている。</p>
        <p>自身の経験から、心身の健康が人生に与える影響の大きさを痛感。特に、AIを活用することで、トレーナーやセラピストがより本質的な業務に集中できる環境を創出したいという強い想いを持つ。</p>

        <h3 className="text-2xl font-bold mt-8 mb-4">Qualifications & Education</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>チェンマイ大学医学部 筋骨格解剖学修了 (2022, 2023)</li>
          <li>健康経営アドバイザー</li>
          <li>R-Conditioning Coach</li>
          <li>Performance Creator BASIC</li>
          <li>Ong&apos;s Thai Massage School ヘッド＆ネックコース修了</li>
          <li>日本消防庁認定 応急手当普及員</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Sports Background</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>柔道 (小学校〜社会人)</li>
          <li>バスケットボール (中学・大学)</li>
        </ul>

        <h3 className="text-2xl font-bold mt-8 mb-4">Hobbies</h3>
        <ul className="list-disc list-inside space-y-2">
          <li>ランニング</li>
          <li>ギター</li>
          <li>読書</li>
        </ul>
      </div>
    </section>
  );
}
