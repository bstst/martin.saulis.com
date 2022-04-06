/** @jsx h */
/// <reference no-default-lib="true"/>
/// <reference lib="dom" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { serve } from "https://deno.land/std@0.133.0/http/server.ts";
import { router } from "https://crux.land/router@0.0.11";
import { h, ssr } from "https://crux.land/nanossr@0.0.4";

function App({ children }) {
  return (
    <div class="min-h-screen">
      <NavBar />
      {children}
    </div>
  );
}

function NavBar() {
  return <div>
    <a href="/" class="m-4">/</a>
    <a href="/foo" class="m-4">foo</a>
    <a href="/bar" class="m-4">bar</a>
  </div>
}

function Landing() {
  return <div>/</div>
}

function Foo() {
  return <div>Foo</div>
}

function Bar() {
  return <div>Bar</div>
}

function NotFound() {
  return <div>404</div>
}

const render = (component) => ssr(() => <App>{component}</App>);

serve(router(
  {
    "/": () => render(<Landing />),
    "/foo": () => render(<Foo />),
    "/bar": () => render(<Bar />),
  },
  () => render(<NotFound />),
));