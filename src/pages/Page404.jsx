import React from "react";
import NoTasks from "../components/NoTasks/NoTasks";
import { IMAGES } from "../utils/constants";

const Page404 = () => {
  return (
    <NoTasks
      src={IMAGES.error}
      title="404 Error"
      subtitle="We could not find this page"
    />
  );
};

export default Page404;
