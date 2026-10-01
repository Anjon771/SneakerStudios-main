import { useState } from "react";
import {
  CustomerReview,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";
import Nav from "./components/Nav2";
import { CartDrawer, ProductModal } from "./components";
import { products } from "./constants";
import useLenis from "./hooks/useLenis";

const App = () => {
  useLenis();

  const [cartItems, setCartItems] = useState([
    {
      ...products[0],
      size: "US 9.5",
      quantity: 1,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [inspectedProduct, setInspectedProduct] = useState(null);
  const [modalInitialTab, setModalInitialTab] = useState("details");
  const [promoCode, setPromoCode] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? "" : prev));
    }, 3200);
  };

  const handleAddToCart = (product, size = "US 9") => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.id === product.id && item.size === size
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        return updated;
      }
      return [
        ...prev,
        {
          ...product,
          size,
          quantity: 1,
        },
      ];
    });
    showToast(`Added ${product.name} (${size}) to Shopping Bag`);
  };

  const handleUpdateQty = (id, size, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id, size);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id && item.size === size
          ? { ...item, quantity: newQty }
          : item
      )
    );
  };

  const handleRemoveItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "ARCHIVE20") {
      setDiscountApplied(true);
      showToast("20% Archive Privilege code ARCHIVE20 applied");
    } else {
      showToast("Use code ARCHIVE20 for 20% off your rotation");
    }
  };

  const handleClaimOffer = () => {
    setPromoCode("ARCHIVE20");
    setDiscountApplied(true);
    setIsCartOpen(true);
    showToast("Code ARCHIVE20 activated in your Shopping Bag");
  };

  const handleInspectProduct = (product, tab = "details") => {
    setModalInitialTab(tab);
    setInspectedProduct(product);
  };

  const handleOpenSizeGuide = () => {
    setModalInitialTab("sizing");
    setInspectedProduct(products[0]);
  };

  const totalCartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <main className="relative min-h-screen bg-[#F8F8F6] text-[#111113]">
      <Nav
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={handleOpenSizeGuide}
      />

      {/* Action Confirmation Banner */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-40 bg-[#111113] text-white px-4 py-3 rounded-xl shadow-xl border border-zinc-700 flex items-center gap-3 text-xs font-medium fade-in">
          <span>{toastMessage}</span>
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="underline font-semibold text-[#E63926] hover:text-white whitespace-nowrap"
          >
            View Bag
          </button>
        </div>
      )}

      {/* Hero Storefront Campaign */}
      <section className="border-b border-zinc-200/80">
        <Hero
          onAddToCart={handleAddToCart}
          onInspectProduct={(prod) => handleInspectProduct(prod, "details")}
        />
      </section>

      {/* Featured Collection Catalog */}
      <section className="padding border-b border-zinc-200/80">
        <PopularProducts
          onAddToCart={handleAddToCart}
          onInspectProduct={(prod) => handleInspectProduct(prod, "details")}
        />
      </section>

      {/* Craftsmanship & Material Architecture */}
      <section className="padding border-b border-zinc-200/80 bg-white">
        <SuperQuality
          onAddToCart={handleAddToCart}
          onInspectProduct={(prod) => handleInspectProduct(prod, "details")}
        />
      </section>

      {/* Service Standards & Seasonal Offer */}
      <section className="padding border-b border-zinc-200/80 space-y-16">
        <Services />
        <SpecialOffer
          onClaimOffer={handleClaimOffer}
          onOpenSizeGuide={handleOpenSizeGuide}
        />
      </section>

      {/* Verified Athlete Telemetry & Reviews */}
      <section className="bg-[#F1F1EE] padding border-b border-zinc-200/80">
        <CustomerReview />
      </section>

      {/* Priority Drop Registration */}
      <section className="padding">
        <Subscribe />
      </section>

      {/* Dark Architectural Footer */}
      <section className="bg-[#111113] padding-x padding-t pb-10">
        <Footer onOpenSizeGuide={handleOpenSizeGuide} />
      </section>

      {/* Slide-Over Cart & Checkout Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQty={handleUpdateQty}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        promoCode={promoCode}
        setPromoCode={setPromoCode}
        discountApplied={discountApplied}
        onApplyPromo={handleApplyPromo}
      />

      {/* Contiguous Product Detail & Size Conversion Modal */}
      {inspectedProduct && (
        <ProductModal
          product={inspectedProduct}
          initialTab={modalInitialTab}
          onClose={() => setInspectedProduct(null)}
          onAddToCart={handleAddToCart}
        />
      )}
    </main>
  );
};

export default App;
