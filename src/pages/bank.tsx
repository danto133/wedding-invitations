"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function Bank() {
  const [activeTab, setActiveTab] = useState<number>(1);

  const copyToClipboard = (event: any) => {
    let str = event.target.innerText.replace(/[^0-9]/g, "");
    navigator.clipboard.writeText(str);
    alert("Copied to clipboard: " + str);
  };
  return (
    <React.Fragment>
      <h1 className="header-t2u">Send us a thousand wish</h1>
      <table className="no-bd-bot no-bg">
        <thead>
          <tr>
            <th>
              <a className="a_demo_four" onClick={() => setActiveTab(1)}>
                Groom
              </a>
            </th>
            <th>
              <a className="a_demo_four" onClick={() => setActiveTab(2)}>
                Bride
              </a>
            </th>
          </tr>
        </thead>
      </table>
      {activeTab === 1 && (
        <div className="tab-content">
          <div>
            <h2>TECHCOMBANK</h2>
            <Image
              width={120}
              height={120}
              src="/assets/images/bank/groom_techcom.JPG"
              alt="TECHCOMBANK"
              style={{ border: "3px solid #fff" }}
            />
            <br />
            <p
              className="account-info fontSerif"
              title="Click to copy bank number to clipboard"
              onClick={copyToClipboard}
            >
              Stk: xxxx xxxx xxxx xx
            </p>
            <p className="fontSerif">Tô Hoa Đan</p>
          </div>

          <div style={{ marginTop: "15px" }}>
            <h2>MOMO</h2>
            <Image
              layout="contain"
              width={120}
              height={120}
              src="/assets/images/bank/groom_momo.JPG"
              alt="momo"
              style={{ border: "3px solid #fff" }}
            />
            <br />
            <p
              className="account-info fontSerif"
              title="Click to copy phone number to clipboard"
              onClick={copyToClipboard}
            >
              Sđt: 0xxxxxxxxx
            </p>
            <p className="fontSerif">Tô Hoa Đan</p>
          </div>
        </div>
      )}
      {activeTab === 2 && (
        <div className="tab-content">
          <div>
            <h2>BIDV</h2>
            <Image
              width={120}
              height={120}
              src="/assets/images/bank/bride_bidv.JPG"
              alt="BIDV"
              style={{ border: "3px solid #fff" }}
            />
            <br />
            <p
              className="account-info fontSerif"
              title="Click to copy bank number to clipboard"
              onClick={copyToClipboard}
            >
              Stk: xxxxxxx
            </p>
            <p className="fontSerif">Trần Thị Mai Hân</p>
          </div>

          <div style={{ marginTop: "15px" }}>
            <h2>MOMO</h2>
            <Image
              layout="contain"
              width={120}
              height={120}
              src="/assets/images/bank/bride_momo.JPG"
              alt="momo"
              style={{ border: "3px solid #fff" }}
            />
            <br />
            <p
              className="account-info fontSerif"
              title="Click to copy phone number to clipboard"
              onClick={copyToClipboard}
            >
              Sđt: 0xxxxxxxx
            </p>
            <p className="fontSerif">Trần Thị Mai Hân</p>
          </div>
        </div>
      )}
    </React.Fragment>
  );
}
