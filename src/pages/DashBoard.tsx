import { useEffect } from "react";

const DashBoard: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "../../public/script/widget.js";
    script.async = true;
    script.type = "text/babel";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      id="wg-api-football-fixtures"
      data-host="v3.football.api-sports.io"
      data-refresh="60"
      data-date="2022-02-11"
      data-key="3002b54e0bec9db0822517189f3726e2"
      data-theme=""
      data-show-errors="false"
      className="api_football_loader"
    ></div>
  );
};

export default DashBoard;
