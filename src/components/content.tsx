import { useAppContext } from "@/context/appContext";
import Guest from "@/interfaces/Guest";
import { NextPage } from "next";
import { useEffect } from "react";

interface contentProps {
  data: Guest;
}
const Content: NextPage<contentProps> = ({ data }: contentProps) => {
  const { setGuest } = useAppContext();
  useEffect(() => {
    setGuest(data); // Update app context
  }, [data]);

  if (!data) return <></>;

  return (
    <>
      <p style={{ textAlign: "center" }}>
        Hai đứa đã đi một hành trình dài. Hôm nay, tại đây, rất vinh dự được mời
        mọi người đến chung vui bữa tiệc nhỏ.
      </p>
      <hr />
      <table className="no-bd-bot no-bg">
        <thead>
          <tr>
            <th>Nhà trai</th>
            <th>Nhà gái</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>
              <span className="d-block">Ông: </span>Tô Quí Lợi
            </td>
            <td style={{ textAlign: "center" }}>
              <span className="d-block">Ông: </span>Trần Đắc Sĩ
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>
              <span className="d-block">Bà: </span>Triệu Kim Ky
            </td>
            <td style={{ textAlign: "center" }}>
              <span className="d-block">Bà: </span>Mai Thị Tuyết
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>
              <span className="d-block">A2/5E1 Đường số 1, Xã Bình Hưng Huyện Bình Chánh, Thành phố Hồ Chí Minh</span>
            </td>
            <td style={{ textAlign: "center" }}>
              <span className="d-block">140 Đường Đặng Thúc Liêng, Phường 4, Quận 8, Thành phố Hồ Chí Minh</span>
            </td>
          </tr>
        </tbody>
      </table>

      <h2 className="gh2" style={{ textTransform: "uppercase" }}>
        Trân trọng báo tin <br /> lễ thành hôn <br />của con chúng tôi
      </h2>

      <table className="no-bg no-bd-bot">
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }} className="fwhisper fsize-155">
              Tô Hoa Đan
            </td>
            <td style={{ textAlign: "center" }} className="fwhisper fsize-155">
              Trần Thị Mai Hân
            </td>
          </tr>
          <tr>
            <td style={{ textAlign: "center" }}>Trưởng Nam</td>
            <td style={{ textAlign: "center" }}>Út nữ</td>
          </tr>
        </tbody>
      </table>
      {/* <h2 className="gh2">Tiệc cưới được tổ chức vào lúc {data.time} tại:</h2> */}
      <h2 className="gh2">
        Tiệc cưới được tổ chức tại:
        <br />
        <span>Nhà hàng tiệc cưới</span>
      </h2>

      <h4 className="wedding-location mt-2">&quot;{data.location}&quot;</h4>

      <div style={{ textAlign: "center", marginTop: 12 }}>
        <span className="d-block" style={{ fontFamily: "Playball", textAlign: "center", fontSize: '10px', margin: 0 }}>
          {data.prefixAddress}
        </span>
      </div>
      <div style={{ textAlign: "center", marginBottom: 12 }}>
        <span className="d-block" style={{ fontFamily: "Playball", textAlign: "center", fontSize: '10px', margin: 0 }}>
          {data.rootAddress}
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold',  marginTop: 16  }}>
        <p style={{ fontFamily: "Playball", color: "#544943", margin: 0, textAlign: 'center' }}>
          VÀO LÚC {data.time}
          <br />
          {data.day}
        </p>

        <div className="divider" style={{ border: '0.25px dashed #cd596b', height: 58, margin: '0 12px', transform: 'skewX(-15deg)' }} />

        <p style={{ fontSize: 48, margin: 0, color: "#cd596b" }}>{data.wedingDate.slice(0, 2)}</p>

        <div className="divider" style={{ border: '0.25px dashed #cd596b', height: 58, margin: '0 12px', transform: 'skewX(-15deg)' }} />

        <p style={{ margin: 0, textAlign: 'center', color: "#cd596b",  }}>
          THÁNG {data.wedingDate.slice(3, 5)}
          <br />
          {data.wedingDate.slice(6)}
        </p>
      </div>

      <h6 className="gh6 mt-3">
        Kính mời: <span className="wedding-location" style={{ fontFamily: "inherit" }}>{data.guestName || "Bạn"}</span>
      </h6>

      <p style={{ textAlign: "center" }}>
        Đến dự bữa tiệc thân mật, sự hiện diện của quý khách
        <br /> là niềm vinh hạnh cho
        gia đình chúng tôi
      </p>
      {/* <span className="d-block" style={{ textAlign: "center" }}>
        Đón Khách 18:00 - Khai Tiệc 19:00
      </span> */}
    </>
  );
};

export default Content;
