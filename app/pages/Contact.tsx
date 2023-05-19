import React from "react";
import PageIndex from "../components/PageIndex";
import Form from "../components/Form";

const Contact = () => {
  return (
    <>
      <div
        className="w-full bg-light flex justify-center xl:max-h-[120vh]"
        id="Contact"
      >
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
