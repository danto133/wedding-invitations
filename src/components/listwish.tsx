import WishProps from "@/interfaces/WishProps";
import { NextPage } from "next";

const ListWish: NextPage<WishProps[]> = (props: WishProps[]) => {
  if (props) {
    return (
      <>
        {props.map((wish, index) => (
          <blockquote key={index}>
            {wish.name}:
            <div className="language-js highlighter-rouge">
              <div className="highlight">
                <pre className="highlight">
                  <code>{wish.content}</code>
                </pre>
              </div>
            </div>
          </blockquote>
        ))}
      </>
    );
  } else {
    return (
      <>
        <p>Empty</p>
      </>
    );
  }
};
export default ListWish;
