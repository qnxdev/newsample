import { ORG_EMAIL, ORG_LOGO, ORG_NAME } from "../lib/constants";

export default function Footer() {
  return (
    <div className="footer">
      <h2>
        <img src={ORG_LOGO} width="30px" alt="" />
        {ORG_NAME}
      </h2>
      Contact Us at {ORG_EMAIL}
    </div>
  );
}
