import ClipLoader from "react-spinners/ClipLoader";
const Spinners = ({ loading }) => {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  return (
    <>
      <ClipLoader
        color="#4338ca"
        loading={loading}
        size={150}
        cssOverride={override}
      />
    </>
  );
};
export default Spinners;
