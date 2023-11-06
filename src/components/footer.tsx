import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer>
      <span className="ribbon-outer">
        <span className="ribbon-inner">
          <p>
            <Link href="https://www.facebook.com/Drsanji950" target="_blank" rel="noopener noreferrer">
              <span className="footer-name">Hoa Đan</span>
            </Link>
            <span className="footer-name">
              <Image src="/assets/images/20-love-heart-outline.gif" alt="heart" width={20} height={20} />
            </span>
            <Link href="https://www.facebook.com/han.lia.98" target="_blank" rel="noopener noreferrer">
              <span className="footer-name">Mai Hân</span>
            </Link>
          </p>
        </span>
        <span className="left-tail"></span>
        <span className="right-tail"></span>
      </span>
    </footer>
  );
}
