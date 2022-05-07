import React from "react";

const Step4 = (props) => {
  if (props.currentStep !== 4) {
    return null;
  }

  return (
    <>
      <div className="grid justify-items-center">
        <div className="bg-slate-400 relative box-border h-32 w-64 px-2 rounded-md">
          {props.state.title}
          <br></br>
          {props.state.date} @ {props.state.time}
          <br></br>
          {props.state.address}
          <br></br>
          {props.state.description}
          <button type='button' name='currentStep' value={1} onClick={props.handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 absolute bottom-1.5 right-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>

        <div className="bg-slate-200 box-border h-32 w-64 px-2 relative overflow-auto rounded-md my-2">
          <ul className="grid grid-cols-2 gap-1 py-2">
            {props.state.guests.map((people, index) => (
              <li
                key={index}
                className="px-4 py-2 border-2 border-slate-500 text-sm text-right rounded-md px-2 mb-2 bg-white active:bg-gray-400 hover:cursor-pointer flex justify-between"
              >
                {people.name}
                <button
                  onClick={() => {
                    props.handleDeletePerson({ people });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 top-1/2"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>
          <button type='button' name='currentStep' value={2} onClick={props.handleChange}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute bottom-1.5 right-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>

        <div className="bg-slate-50 box-border relative h-32 w-64 px-2 rounded-md overflow-auto py-2 my-2">
          <ul className="grid grid-cols-2 gap-1 space-between overflow-x-auto ">
            {props.state.items.map((item, index) => (
              <li
                key={index}
                className="overflow-hidden px-1 py-1 border-2 border-slate-500 text-xs rounded-md mb-1 bg-white active:bg-gray-400 hover:cursor-pointer flex justify-between"
              >
                {item}
                <button
                  onClick={() => {
                    props.handleDeleteItem({ item });
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-3 h-3 top-1/2"
                    fill="none"
                    viewBox="0 0 20 20"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          <button onClick={props.previous}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 absolute bottom-1.5 right-1.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Step4;

