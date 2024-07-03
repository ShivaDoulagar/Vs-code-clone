import React from "react";
import "./footer.css";

const footer = () => {
  return (
    <footer>
      <div className=" justify-center align-center">
        <div>
          <h2 className="flex align-center justify-center">Licence and Privacy Terms</h2>
        </div>
        <div className="footerpar">
          <p className="footerpara">
            By downloading and using Visual Studio Code, you agree to the
            license terms and privacy statement. VS Code automatically sends
            telemetry data and crash dumps to help us improve the product. If
            you would prefer not to have this data sent please go see How to
            Disable Crash Reporting to learn how to disable it. Third party
            licenses for the CLI can be found here.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default footer;
