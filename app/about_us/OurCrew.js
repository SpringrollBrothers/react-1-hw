import style from "./crew.css";
const OurCrew = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p>
        Our crew is the heart and soul of Galactica. We are a diverse team of
        seasoned space explorers, engineers, and visionaries who are united by a
        common goal: to make space travel accessible and exciting for all.
      </p>
      <div className="crew-container">
        <li>
          <img src="/crew/image-anousheh-ansari.png" />
          <p>
            Captain Sarah Vega: A former NASA astronaut with over 15 years of
            experience, Captain Vega leads our missions with unparalleled
            expertise and a passion for space exploration.
          </p>
        </li>
        <li>
          <img src="/crew/image-victor-glover.png" />
          <p>
            Chief Engineer Hana Lee: With his extensive background in aerospace
            engineering, Hana Lee is responsible for the state-of-the-art
            technology that powers our spacecraft. His innovation ensures that
            our travelers are always in safe hands.
          </p>
        </li>
        <li>
          <img src="/crew/image-mark-shuttleworth.png" />
          <p>
            Dr. Leo Redding: Our chief astrophysicist, Dr. Redding, is a
            renowned scientist who has contributed to major space discoveries.
            He ensures that every journey is as educational as it is
            exhilarating.
          </p>
        </li>
        <li>
          <img src="/crew/image-douglas-hurley.png" />
          <p>
            Mission Specialist Alex Santos: As a mission specialist, Alex's job
            is to ensure that every aspect of the journey runs smoothly. With a
            background in both science and adventure tourism, Alex is the
            perfect guide for our space travelers.
          </p>
        </li>
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Aldrin_Apollo_11_cropped.jpg/800px-Aldrin_Apollo_11_cropped.jpg" />
          <p>
            Crew Member Maya Patel: Maya brings a unique blend of technical
            skills and customer service experience to the team. She's always
            ready to assist with any needs and to make sure every traveler has
            an unforgettable experience.
          </p>
        </li>
      </div>
    </>
  );
};
export default OurCrew;
