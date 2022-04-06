import Foo from "~/components/Foo";
import { useMatches } from "@remix-run/react/components";

export default function StateOfWebDevelopment() {
  // const d = useMatches();
  // console.log(d);

  return (
    <div>
      <h1>State of Web Development!</h1>

      <Foo />

      <p>
        A simplest website is a <a href="/hello.txt">text file</a> opened in the
        browser.
      </p>

      <p>
        But most websites are more complicated. Thus, we have HTML (Hyper Text
        Markup Language). It allows us to structure our websites, style the
        content, make it responsive and accessible.
      </p>

      <p>
        Browsers retrieve the HTML from the server and display it in a
        meaningful way. But manually creating a new HTML file from scratch every
        time is tedious work.
      </p>

      <p>
        So we use tools that allow us to automate the HTML code generation.
        These tools are frameworks running on various languages like PHP, Ruby,
        Java, .NET, NodeJS etc.
      </p>

      <p>
        The gist of the approach is to split the website structure in to
        reusable components, and then generate the HTML at either build-time or
        run-time.
      </p>

      <p>
        Each component should encapsulate its own logic and style. Each
        component should perform one job and do it well. All code, be it JS,
        HTML, CSS, should contain only the pieces that are needed at that
        particular moment. Everything else should be loaded only when needed.
      </p>

      <p>That's it. This is all what it takes to create a good website.</p>

      <p>
        The web developer ecosystem has been ripening for the past years. There
        are a lot of frameworks that generate quality HTML. And I'm only talking
        about JS based frameworks like Next, Nuxt, SvelteKit, Remix, Gatsby,
        Hugo, Jekyll, Elder etc. Some of them are more optimised for
        static-site-generation, others are great for hybrid SSG-SSR
        applications, others are full blown full-stack application frameworks.
      </p>
    </div>
  );
}
