import Nav from "../components/Nav";


function Info(){
return (
    <>
    <section className="tm-section">
        <Nav />
      <div className="tm-content-container">
        <figure className="mb-0">
          <img src="/assets/img/img-1.jpg" alt="Image" className="img-fluid tm-img" />
        </figure>
        <div className="tm-content">
          <h2 className="tm-page-title">Verticard Simple CSS Template</h2>
          <p className="mb-4">
            Curabitur ac est dapibus, ultricies diam non, vestibulum odio. Sed
            ac nunc lacinia, maximus nisi non, efficitur lacus, Donec efficitur
            at dui non molestie.
          </p>
          <p>
            Verticard is provided by TemplateMo site for 100% free download. You can use it absolutely free for any website. Template re-distribution is NOT allowed on any kind of download website. Thank you.
          </p>
        </div>
      </div>
    </section>
    </>
)
}

export default Info;