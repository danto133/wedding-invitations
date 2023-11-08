"use client";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
import SlickWish from "../components/slick-wish";
import { GuestBody } from "@/interfaces/Guest";

export default function Invite() {
  const [data, setData] = useState<GuestBody[] | undefined>();
  const [isLoading, setLoading] = useState(false);
  const [isValid, setValid] = useState(false);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const payload = {
      slug: event.target.slug.value,
      name: event.target.name.value,
    };
    if (payload.name === "" || payload.slug === "") {
      alert("Can not leave empty input!");
      return false;
    }
    // @ts-ignore
    document.getElementById("awish-form").reset();

    const JSONdata = JSON.stringify(payload);
    const endpoint = "/api/guesses";
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

  const checkUser = async (event: any) => {
    event.preventDefault();
    const code = event.target.code.value;
    if (code === "" || !code) {
      alert("Can not leave empty input!");
      return false;
    }
    if (["danto13397", "maihantran581997"].includes(code)) {
      setValid(true);
      sessionStorage.setItem('invited', "true")
    } else {
      alert("Try again !!");
      return false;
    }
    // @ts-ignore
    document.getElementById("code-form").reset();
  };

  const copyLink = (slug: string) => {
    const link = `${window.location.origin}/guest/${slug}`
    navigator.clipboard.writeText(link);
    alert("Copied to clipboard: " + link);
  };

  useEffect(() => {
    const invited = sessionStorage.getItem("invited")
    if (invited) {
      setValid(true);
    }
    if (!data) {
      setLoading(true);
      fetchData();
    }
  }, []);



  const fetchData = () => {
    fetch("api/guesses")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      }).finally(() => {
        setLoading(false);
      });
  };

  if (!isValid) {
    return (
      <>
        <h2 className="header-t2u">Enter your code</h2>

        <form id="code-form" onSubmit={checkUser}>
          <p>
            <input
              type="text"
              name="code"
              className="shadow"
              placeholder="Code"
              maxLength={40}
              style={{ padding: "12px", boxSizing: "border-box" }}
            />
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <input type="submit" value="Submit" className="btn-shadow" />
          </div>
        </form>
      </>
    );
  }

  return (
    <>
      <h2 className="header-t2u">Invite</h2>
      <form id="awish-form" onSubmit={handleSubmit}>
        <p>
          <input
            type="text"
            name="slug"
            className="shadow"
            placeholder="Slug"
            maxLength={40}
            style={{ padding: "12px", boxSizing: "border-box" }}
          />
        </p>
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
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input type="submit" value="Invite" className="btn-shadow" />
        </div>
      </form>
      <div style={{ clear: "both" }}></div>
      <hr />
      {isLoading && <Loading />}
      {!isLoading && data && data?.length > 0 && data.map((item, index) => (
        <div key={index} style={{ display: "flex", justifyContent: "space-between", marginTop: 12 }}>
          <span>{index + 1}. {item.name}</span>
          <div style={{ width: 'auto' }}>
            <button type="button" className="btn btn-sm btn-shadow" style={{ width: "auto", padding: "4px 12px", cursor: "pointer" }} onClick={() => copyLink(item.slug)}>
              <span>
                Copy Link
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
