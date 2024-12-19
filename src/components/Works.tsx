import 'bootstrap/dist/css/bootstrap.min.css';

const works = [
    {
        id: 1,
        title: 'Forskor Restaurant',
        description: 'Forskor Restaurant is a F&B-Casual Dining outlet located in the heart of the Bangalore city. ',
        image: '/img/forskor-intro.png'
    },
    {
        id: 2,
        title: 'Astra Medicare',
        description: 'Astra MediCare in Kozhikode is one of the leading businesses in the Dermatologists. Also known for Dermatologists,...',
        image: '/img/astra.png'
    },
    {
        id: 3,
        title: 'CoSpace',
        description: "CoSpace is more than just a coworking platform; it's your one-stop destination for finding and booking the perfect...",
        image: '/img/cospace.png'
    },
    // {
    //     id: 4,
    //     title: 'Work Name',
    //     description: 'A web designer and developer with experience in MERN stack and Python, proficient in',
    //     image: '/img/work4.png'
    // },
    // {
    //     id: 5,
    //     title: 'Work Name',
    //     description: 'A web designer and developer with experience in MERN stack and Python, proficient in',
    //     image: '/img/work5.png'
    // },
    // {
    //     id: 6,
    //     title: 'Work Name',
    //     description: 'A web designer and developer with experience in MERN stack and Python, proficient in',
    //     image: '/img/work6.png'
    // }
];

export default function Works() {
    return (
        <section className="works-section">
            <div className="">
                <h4 className="mb-3 text-center">My Works</h4> <br />
                <div className="row p-0 works-grid">
                    {works.map((work) => (
                        <div key={work.id} className="col-12 col-lg-4">
                            <article className="work-item">
                                <div className="work-image-wrapper">
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="work-image"
                                    />
                                </div>
                                <h3 className="work-title">{work.title}</h3>
                                <p className="work-description">{work.description}</p>
                            </article>
                        </div>
                    ))}
                </div>
            </div> <br />
            <center>
                <button className="banner-btn">See More</button>
            </center>
        </section>
    );
}