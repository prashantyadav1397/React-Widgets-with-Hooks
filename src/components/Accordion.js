import React from "react";

const Accordion = ({ items }) => {
  const faqItems = items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div
          className="title active"
          onClick={() => {
            console.log("item clicked", index);
          }}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className="content active">
          <p>{item.content}</p>
        </div>
      </React.Fragment>
    );
  });

  console.log(faqItems[2]);

  return (
    <div className="ui styled accordion">
      <h2> {faqItems}</h2>
    </div>
  );
};

export default Accordion;
