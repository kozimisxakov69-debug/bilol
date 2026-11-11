import database from './db.json'

const formatPrice = new Intl.NumberFormat('ru-RU')

export const App = () => (
  <main className="min-h-screen bg-gray-50 px-6 py-10">
    <h1 className="mb-8 text-3xl font-bold text-gray-900">Товары</h1>
    <div className=" gap-6   flex flex-wrap justify-center   ">
      {database.cards.map((card) => (
        <article
          key={card.id}
          className="overflow-hidden rounded-xl bg-white shadow-sm w-[300px]"
        >
          <img
            className="h-52 w-full object-cover"
            src={card.img}
            alt={card.title}
          />
          <div className="p-5">
            <h2 className="text-xl font-semibold text-gray-900">{card.title}</h2>
            <p className="mt-2 text-gray-600">{card.desc}</p>
            <p className="mt-4 font-bold text-gray-900">
              {formatPrice.format(card.price)} ₽
            </p>
          </div>
        </article>
      ))}
    </div>
  </main>
)
