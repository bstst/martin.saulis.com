export default function StateOfWebDevelopment() {
  return (
    <div>
      <h1>State of Web Development</h1>

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
        component should only be loaded when it's needed. Each component should
        perform one job and do it well. Functions of the component that are not
        needed straight away should also be loaded only when needed.
      </p>

      <p>That's it. This is all what it takes to create a good website.</p>
    </div>
  );
}
