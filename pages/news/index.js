// our-domain.com/news
import Link from 'next/link'
import { Fragment } from "react";

function NewsPage() {
  return (
    <Fragment>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-is-a-great-frame-work">
            NextJS Is A Great Framework
          </Link>
        </li>
        <li>
          <a href="">Something Else</a>
        </li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
