export default function Contact() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-normal mb-6">Contact</h2>
      <p className="mb-8 text-base leading-relaxed">お問い合わせは以下のフォームよりお願いいたします。</p>
      <form className="space-y-6 w-full max-w-lg">
        <div>
          <label htmlFor="name" className="block text-base font-normal text-gray-700">お名前</label>
          <input type="text" id="name" name="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black" />
        </div>
        <div>
          <label htmlFor="email" className="block text-base font-normal text-gray-700">メールアドレス</label>
          <input type="email" id="email" name="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black" />
        </div>
        <div>
          <label htmlFor="message" className="block text-base font-normal text-gray-700">お問い合わせ内容</label>
          <textarea id="message" name="message" rows={5} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-sm shadow-sm focus:ring-black focus:border-black"></textarea>
        </div>
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-base font-normal rounded-sm text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black">
          送信
        </button>
      </form>
    </section>
  );
}
