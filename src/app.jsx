const collections = [
  {
    title: 'Váy lụa cổ điển',
    image:
      'https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?auto=format&fit=crop&w=1200&q=80',
    desc: 'Đường cắt mềm mại, tôn nét nữ tính với hơi thở Paris cổ điển.'
  },
  {
    title: 'Áo khoác tweed',
    image:
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80',
    desc: 'Thiết kế thanh lịch cho những buổi hẹn chiều thu đầy cảm hứng.'
  },
  {
    title: 'Phong cách phố xưa',
    image:
      'https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?auto=format&fit=crop&w=1200&q=80',
    desc: 'Lấy cảm hứng từ những năm 70s, tối giản nhưng đầy cuốn hút.'
  },
  {
    title: 'Set dạo phố vintage',
    image:
      'https://images.unsplash.com/photo-1464863979621-258859e62245?auto=format&fit=crop&w=1200&q=80',
    desc: 'Phối màu ấm áp, hoàn hảo cho phong cách nữ tính hiện đại.'
  },
  {
    title: 'Đầm hoa mùa xuân',
    image:
      'https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=1200&q=80',
    desc: 'Mềm nhẹ, bay bổng và lãng mạn cho mọi khoảnh khắc trong ngày.'
  },
  {
    title: 'Nét đẹp tối giản',
    image:
      'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?auto=format&fit=crop&w=1200&q=80',
    desc: 'Thiết kế tối giản tôn dáng, giữ vẹn nguyên tinh thần vintage.'
  }
]

const testimonials = [
  '“Hương khiến mình cảm thấy tự tin và dịu dàng theo cách rất riêng.”',
  '“Chất liệu đẹp, phom dáng chuẩn và lên ảnh cực kỳ cuốn hút.”',
  '“Một thương hiệu nữ tính mà vẫn rất thời thượng.”'
]

function App() {
  return (
    <div className="min-h-screen">
      <header className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1800&q=80')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative mx-auto flex max-w-6xl flex-col px-6 py-24 text-white md:py-36">
          <p className="mb-5 w-fit rounded-full border border-white/50 px-4 py-2 text-xs uppercase tracking-[0.3em]">
            Brand Hương
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
            Vintage cho nàng hiện đại
          </h1>
          <p className="mt-6 max-w-xl text-base text-white/90 md:text-lg">
            Hương mang tinh thần cổ điển vào từng thiết kế thời trang nữ, tạo nên vẻ đẹp thanh lịch,
            mềm mại và đầy cảm hứng.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#bo-suu-tap" className="rounded-full bg-rose px-6 py-3 font-medium text-white transition hover:bg-[#c27e71]">
              Khám phá BST
            </a>
            <a href="#lien-he" className="rounded-full border border-white/80 px-6 py-3 font-medium text-white transition hover:bg-white/15">
              Liên hệ tư vấn
            </a>
          </div>
        </div>
      </header>

      <section id="bo-suu-tap" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-sm uppercase tracking-[0.25em] text-olive">Bộ sưu tập nổi bật</p>
            <h2 className="text-3xl font-semibold md:text-4xl">Hành trình vẻ đẹp nữ tính</h2>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collections.map((item) => (
            <article key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-lg shadow-cocoa/10">
              <img src={item.image} alt={item.title} className="h-80 w-full object-cover" />
              <div className="space-y-3 p-5">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-sm leading-relaxed text-cocoa/80">{item.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-cocoa px-6 py-14 text-white md:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote key={item} className="rounded-2xl border border-white/20 bg-white/10 p-6 text-sm leading-relaxed">
              {item}
            </blockquote>
          ))}
        </div>
      </section>

      <section id="lien-he" className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="rounded-3xl bg-gradient-to-r from-rose to-cocoa px-8 py-12 text-white md:px-14">
          <p className="text-sm uppercase tracking-[0.25em] text-white/80">Hương Vintage</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">Thời trang dành riêng cho nàng</h2>
          <p className="mt-4 max-w-2xl text-white/90">
            Theo dõi hành trình thời trang nữ vintage của Hương và cập nhật các bộ sưu tập mới mỗi tháng.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a className="rounded-full bg-white px-6 py-3 font-semibold text-cocoa" href="mailto:hello@huongvintage.vn">
              hello@huongvintage.vn
            </a>
            <a className="rounded-full border border-white px-6 py-3 font-semibold text-white" href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)
