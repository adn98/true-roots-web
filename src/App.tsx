import { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "@/layouts/MainLayout";

const Home = lazy(() => import("@/pages/Home").then((m) => ({ default: m.Home })));
const Products = lazy(() =>
  import("@/pages/Products").then((m) => ({ default: m.Products }))
);
const ProductDetail = lazy(() =>
  import("@/pages/ProductDetail").then((m) => ({ default: m.ProductDetail }))
);
const Cart = lazy(() => import("@/pages/Cart").then((m) => ({ default: m.Cart })));
const Services = lazy(() =>
  import("@/pages/Services").then((m) => ({ default: m.Services }))
);
const OurStory = lazy(() =>
  import("@/pages/OurStory").then((m) => ({ default: m.OurStory }))
);
const Checkout = lazy(() =>
  import("@/pages/Checkout").then((m) => ({ default: m.Checkout }))
);
const OrderSuccess = lazy(() =>
  import("@/pages/OrderSuccess").then((m) => ({ default: m.OrderSuccess }))
);
const Contact = lazy(() =>
  import("@/pages/Contact").then((m) => ({ default: m.Contact }))
);
const NotFound = lazy(() =>
  import("@/pages/NotFound").then((m) => ({ default: m.NotFound }))
);

function PageFallback() {
  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-olive/30 border-t-olive"
        role="status"
        aria-label="Loading"
      />
    </div>
  );
}

export function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageFallback />}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/services" element={<Services />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-success" element={<OrderSuccess />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
