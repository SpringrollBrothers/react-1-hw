import style from "./partner.css";
const OurPartners = () => {
  // TASK - React 1 week 1
  // Create the "Our Crew section"
  // Use the descriptions provided in /app/about_us/README.md
  // Use the pictures from /public/crew
  // Some inspiration ideas found in /data/inspiration_about_us
  return (
    <>
      <p>
        We collaborate with some of the most respected names in the space and
        technology industries to make every journey extraordinary.
      </p>
      <ul className="partner-container">
        <li>
          <img src="/business_partners/alphabet-logo.png" alt="Alphabet Logo" />
        </li>
        <li>
          <img src="/business_partners/amazon_logo.png" alt="Amazon Logo" />
        </li>
        <li>
          <img src="/business_partners/CBC_Logo_White.png" alt="CBC Logo" />
        </li>
        <li>
          <img
            src="/business_partners/Microsoft-Logo-white.png"
            alt="Microsoft Logo"
          />
        </li>
        <li>
          <img src="/business_partners/nyu-logo.png" alt="NYU Logo" />
        </li>
        <li>
          <img src="/business_partners/QueensLogo_white.png" alt="queen Logo" />
        </li>
        <li>
          <img src="/business_partners/samsung-logo.png" alt="samsung Logo" />
        </li>
        <li>
          <img src="/business_partners/sodexo-logo.png" alt="sodex Logo" />
        </li>
      </ul>
    </>
  );
};
