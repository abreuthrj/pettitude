import axios from "axios";
import { Header, Subject } from "components";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    axios.get("/api/users").then(
      (res) => {
        console.log(res.data);
      },
      (err) => {
        console.log(err);
      }
    );
  }, []);

  return (
    <>
      <Header />

      <div className="h-[600px] bg-green-500 py-10 text-white">
        <div className="mb-60 text-center max-w-xl mx-auto">
          <h1 className=" text-5xl font-bold">We care about your pet</h1>

          <p className="my-10 text-xl">
            That is why pettitude will help you to improve your little friend
            {"'"}s life quality
          </p>
        </div>

        <div className="flex">
          <Subject type="fitness" title="Activities" />
          <Subject type="food" title="Food" />
          <Subject type="health" title="Healthiness" />
        </div>
      </div>
    </>
  );
}
