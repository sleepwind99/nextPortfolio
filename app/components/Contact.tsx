import React from "react";
import PageIndex from "./PageIndex";
import Form from "./Form";

const Contact = () => {
  return (
    <>
      <div className="w-full xl:h-[90vh] bg-light flex justify-center xl:max-h-[120vh]">
        <div className="max-w-[1024px] w-full m-2">
          <PageIndex title="Contact" subTitle="Contact" subClass="mt-2 mb-4" />
          <div className="w-full my-8">
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
