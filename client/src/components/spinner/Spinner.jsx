import "./spinner.scss";

import { Oval } from "react-loader-spinner";

const Spinner = () => {
  return (
    <div className="spinner">
      <Oval height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
