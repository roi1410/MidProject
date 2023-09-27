import React from 'react';

function AboutUs() {
  return (
    <section id="about-us" className="bg-white py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">About Our University</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        
          <div>
            <p className="text-gray-600">
              Welcome to Our University, a place of academic excellence and
              innovation. Established in [Year], Our University has a rich
              history of providing quality education and fostering intellectual
              growth.
            </p>
            <p className="mt-4 text-gray-600">
              Our dedicated faculty members are committed to helping students
              achieve their academic and personal goals. With state-of-the-art
              facilities and a diverse community of students, we offer a
              nurturing environment where students can thrive.
            </p>
            <p className="mt-4 text-gray-600">
              Explore our programs, meet our faculty, and discover the
              opportunities that await you at Our University. We look forward
              to helping you reach your potential and achieve your dreams.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
