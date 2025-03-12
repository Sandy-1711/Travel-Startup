"use client"; 

import { useRouter } from "next/navigation"; 
import Head from "next/head";

const About = () => {
  const router = useRouter(); 

  return (
    <>
      <Head>
        <title>About Us - Teerthayatrik</title>
        <meta
          name="description"
          content="Teerthayatrik offers curated pilgrimage experiences, ensuring a smooth, enriching, and spiritually fulfilling journey."
        />
        <meta
          name="keywords"
          content="pilgrimage, religious tourism, spiritual travel, holy sites, Teerthayatrik"
        />
        <meta name="author" content="Teerthayatrik" />
      </Head>

      {/* ✅ Hero Section */}
      <section className="relative bg-gradient-to-r from-red-600 to-yellow-500 text-white text-center py-20 px-4">
        <div className="absolute inset-0 bg-black opacity-40 mt-5"></div>
        <div className="relative z-10 max-w-3xl mx-auto mt-10">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight drop-shadow-lg">
            Embark on a Sacred Journey with Teerthayatrik
          </h1>
          <p className="text-base sm:text-lg mt-3 opacity-90">
            Experience a seamless pilgrimage where faith, culture, and comfort come together.
          </p>
        </div>
      </section>

      {/* ✅ About Section */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Who We Are
          </h2>
          <p className="text-sm sm:text-base text-gray-700 max-w-2xl mx-auto">
            Teerthayatrik is committed to making spiritual travel <strong>meaningful, comfortable, and hassle-free</strong>. Our carefully crafted pilgrimage packages ensure you focus on devotion while we handle the logistics.
          </p>
        </div>

        {/* ✅ Features */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "🌍",
              title: "Effortless Pilgrimage",
              text: "We provide end-to-end services, from travel bookings to guided tours, ensuring a stress-free experience.",
            },
            {
              icon: "🏨",
              title: "Comfortable Stays",
              text: "Enjoy serene and reliable accommodations that cater to your spiritual needs and comfort.",
            },
            {
              icon: "🛕",
              title: "Spiritual Guidance",
              text: "Gain deep insights into the sacred significance of every destination with our knowledgeable guides.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-6 rounded-lg transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                {feature.icon} {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ✅ Mission & Vision */}
      <section className="py-16 px-4 bg-gradient-to-r from-yellow-400 to-red-600 text-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold">
            Our Mission & Vision
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-8">
            {/* Mission */}
            <div className="bg-white text-gray-900 p-6 rounded-lg shadow-md hover:scale-105 transition flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                🎯 Our Mission
              </h3>
              <p className="text-sm sm:text-base">
                We strive to make spiritual travel accessible, enriching, and deeply fulfilling for all devotees.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gray-900 text-white p-6 rounded-lg shadow-md hover:scale-105 transition flex-1">
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                👁️ Our Vision
              </h3>
              <p className="text-sm sm:text-base">
                We envision a world where spiritual seekers can journey with peace of mind, convenience, and deep faith.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ Core Values */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Our Core Values
          </h2>

          <div className="mt-10 flex flex-wrap justify-center gap-6">
            {[
              {
                title: "🙏 Devotion",
                description: "Faith and spirituality guide our services and experiences.",
              },
              {
                title: "✨ Trust",
                description: "We ensure reliability, safety, and transparency in all our offerings.",
              },
              {
                title: "🌍 Inclusivity",
                description: "Welcoming devotees from all backgrounds with open arms.",
              },
              {
                title: "🚀 Excellence",
                description: "Blending traditional pilgrimages with modern-day convenience.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white shadow-md p-4 rounded-lg w-48 transition-transform transform hover:scale-105 hover:bg-yellow-100"
              >
                <h3 className="text-lg font-semibold text-gray-900">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-700 mt-1">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="bg-gradient-to-r from-yellow-400 to-red-600 text-white py-12 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold">
          Start Your Spiritual Journey Today
        </h2>
        <p className="text-sm sm:text-base mt-2 max-w-2xl mx-auto opacity-90">
          Let us handle the details while you focus on spiritual fulfillment.
        </p>
        <button
          onClick={() => router.push("/tours")} 
          className="mt-4 bg-white text-red-600 font-bold px-6 py-2 rounded-lg text-sm sm:text-base shadow-md hover:bg-gray-200 transition"
        >
          View Pilgrimage Packages
        </button>
      </section>
    </>
  );
};

export default About;
