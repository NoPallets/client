import Layout from "../layout/Layout";
import Image from "next/image";

const AboutPage = () => {
  return (
    <Layout title="About">
      <div className="flex items-center flex-col lg:flex-row">
        <Image
          className="w-1/2"
          src={"/nopalletsAboutImage.png"}
          width={900}
          height={700}
          objectFit="contain"
        />
        <div className="w-3/4 lg:w-1/2 text-md lg:text-lg">
          <p>
            NoPallets is a platform for vintage interior design, home goods, and
            art. Our e-showroom is driven by the goal of making timeless design
            known and accessible to the youth. Everything we feature is
            personally curated and includes all types of items we like from all
            price ranges. We are open to offers, questions, hate mail, and love
            letters.
          </p>
          <br />
          <p>
            Our selection can be found exclusively on NoPallets. You won’t find
            our pieces on pretentious, commission-driven websites like Pamono
            and 1st Dibs.
          </p>
          <br />

          <p>
            Appointments and local pick-ups available in Berlin, Germany.
            Everywhere else, we ship.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
