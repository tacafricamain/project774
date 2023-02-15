type ButtonProps = {
  text: string;
  reverse?: boolean;
};

export default function Button(props: ButtonProps) {
  return (
    <button
      type="button"
      className={`text-white focus:ring-4 focus:outline-none
                                font-medium rounded-md text-sm px-8 py-3
                                text-center mr-2
                                ${
                                  props.reverse &&
                                  "bg-transparent text-mainGreen border border-mainGreen"
                                }
                                ${
                                  props.reverse == undefined &&
                                  "bg-accentGreen text-white"
                                }
                                `}
    >
      {props.text}
    </button>
  );
}
