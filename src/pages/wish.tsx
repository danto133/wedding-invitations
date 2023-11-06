"use client";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import SlickWish from "../components/slick-wish";
import WishDto from "@/interfaces/WishProps";

export default function Wish() {
  const [data, setData] = useState<WishDto[] | undefined>();
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const payload = {
      name: event.target.name.value,
      content: event.target.message.value,
    };
    if (payload.name === "" || payload.content === "") {
      console.log("Can not leave empty input!");
      return false;
    }
    // @ts-ignore
    document.getElementById("awish-form").reset();

    const JSONdata = JSON.stringify(payload);
    const endpoint = "/api/wish";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    await fetch(endpoint, options);
    fetchData();
  };

  useEffect(() => {
    setLoading(true);
    if (!data) {
      fetchData();
    }
  }, []);

  const fetchData = () => {
    fetch("api/wish")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  };

  return (
    <>
      <h2 className="header-t2u">Send us a wish</h2>
      <form id="awish-form" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="name"
            className="shadow"
            placeholder="Name"
            maxLength={40}
            style={{ padding: "12px", boxSizing: "border-box" }}
          />
        </p>
        <p>
          <textarea
            name="message"
            className="shadow"
            placeholder="Send us a wish"
            style={{ padding: "12px", boxSizing: "border-box" }}
            rows={5}
          ></textarea>
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="submit" value="Send" className="btn-shadow" />
        </div>
      </form>
      <div style={{ clear: "both" }}></div>
      <hr />
      {isLoading && <Loading />}
      {!isLoading && data && <SlickWish wishes={data} />}
    </>
  );
}
