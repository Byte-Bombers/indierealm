import About from "./components/routes/about/about.component";
import Shop from "./components/routes/shop/shop.component";
import Authentication from "./components/routes/authentication/authentication.component";
import Home from "./components/routes/home/home.component";
import Checkout from "./components/routes/checkout/checkout.component";
import Navigation from "./components/routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import PaymentForm from "./components/routes/payment-form/payment-form.component";
import Success from "./components/routes/success/success.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout">
          <Route index element={<Checkout />} />
          <Route path="payment">
            <Route index element={<PaymentForm />} />
            <Route path="success" element={<Success />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
