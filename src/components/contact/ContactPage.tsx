import Layout from "../layout/Layout";

const ContactPage = () => {
  return (
    <Layout title="contact">
      <div
        className="box-border flex w-3/4 text-lg justify-center"
        style={{ height: "50vh" }}
      >
        <div className="contact-form w-2/3 h-full">
          <h1 className="text-2xl mb-10">CONTACT</h1>
          <div className="mb-5">
            <label className="block">Item:</label>
            <input className="border border-black w-4/5"></input>
          </div>
          <div className="mb-5">
            <label className="block">Name:</label>
            <input className="border border-black w-4/5"></input>
          </div>
          <div className="mb-5">
            <label className="block">Email:</label>
            <input className="border border-black w-4/5"></input>
          </div>
          <div className="mb-5">
            <label className="block">Message:</label>
            <textarea
              className="border border-black w-4/5"
              style={{ height: "160px" }}
            ></textarea>
          </div>
        </div>
        <div className="contact-details">
          <a className="block mb-2 text-xl" href="mailto:info@nopallets.com">
            info@nopallets.com
          </a>
          <a
            className="block mb-2 text-xl"
            href="https://www.instagram.com/no.pallets/"
          >
            @ n o . p a l l e t s
          </a>
          <span className="text-xl">( + 4 9 ) 0176 85 69 27 85</span>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
