import "../styles/index.css";

const featuredBook = {
  id: 20,
  title: "The Alchemist",
  author: "Paulo Coelho",
  imageUrl: "https://images-na.ssl-images-amazon.com/images/I/71aFt4+OTOL.jpg",
  rating: 4.7,
  description:
    "The Alchemist is a timeless tale about following one's dreams and listening to the heart. Paulo Coelho masterfully weaves a story of adventure, destiny, and self-discovery. Santiago, the protagonist, embarks on a quest that leads him through trials and triumphs, ultimately uncovering the deeper truths of life. The novel’s themes of perseverance, intuition, and the pursuit of personal legend make it an inspiring read. It has touched millions around the world, encouraging readers to chase their own dreams fearlessly. The writing is simple yet profound, making it accessible and deeply impactful. This book reminds us that the journey is just as important as the destination.",
};

export default function Home() {
  return (
    <div
      className="home text-center text-light min-vh-100"
      style={{
        background: "linear-gradient(to bottom, var(--navy), var(--charcoal))",
      }}
    >
      <main className="container py-5">
        <section className="py-4">
          <h1 className="display-4 header-font">Explore new worlds</h1>
          <p className="lead body-font">
            From epic stories to self-improvement, there are audiobooks for
            everyone.
          </p>

          <div className="row justify-content-center">
            {[
              "All Categories",
              "Personal Growth",
              "Love & Relationships",
              "Mystery & Suspense",
              "Fiction & Classics",
              "Life Stories & Memoirs",
              "Mind & Body Wellness",
              "Fantasy & Sci-Fi Adventures",
              "Faith & Philosophy",
              "Entrepreneurship & Finance",
              "World Events & Culture",
              "Young Listeners",
            ].map((category) => (
              <div key={category} className="col-md-4 col-sm-6 mb-4 d-flex">
                <div
                  className="card flex-fill p-4 rounded-4 shadow-sm text-center category-font"
                  style={{
                    backgroundColor: "var(--navy)",
                    color: "var(--cream)",
                    cursor: "pointer",
                  }}
                >
                  <div className="card-body d-flex align-items-center justify-content-center">
                    <span className="card-title h5 m-0">{category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <div className="my-5"></div> {/* Spacing before Book of the Week */}
        {/* Book of the Week Section */}
        <section className="text-center mb-5">
          <h2 className="text-uppercase fw-bold mb-4 header-font">
            Book of the Week
          </h2>
          <div className="row align-items-center g-4 flex-lg-row flex-column-reverse">
            <div className="col-lg-6 text-center">
              <img
                src={featuredBook.imageUrl}
                alt={featuredBook.title}
                className="img-fluid rounded shadow"
                style={{ maxWidth: "400px" }}
              />
            </div>
            <div
              className="col-lg-6 text-start body-font"
              style={{ color: "var(--cream)" }}
            >
              <h3 className="fw-bold text-lg-start text-center">
                {featuredBook.title}
              </h3>
              <p className="lead text-lg-start text-center">
                By {featuredBook.author}
              </p>
              <p className="lead text-lg-start text-center">
                Rating: {featuredBook.rating} ⭐
              </p>
              <p className="mt-3 text-lg-start text-center">
                {featuredBook.description}
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
