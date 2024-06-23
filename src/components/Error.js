import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div className="flex justify-center gap-28 h-screen items-center">
      <div className="grid justify-center align-middle items-center ">
        <div className="font-mono text-red-500 text-5xl">
          {err.status} - error
        </div>
        <div className="font-mono text-4xl mt-6">PAGE NOT FOUND</div>
        <Link to={"/"}>
          <button className="p-2 mt-8 mx-20 px-5 rounded-lg text-white bg-red-500 hover:bg-red-700">
            Back To Home
          </button>
        </Link>
      </div>
      <div>
        <img
          className="w-96"
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1920.jpg?size=626&ext=jpg&ga=GA1.1.1451435111.1705928925&semt=ais_user"
        ></img>
      </div>
    </div>
  );
};
export default Error;
