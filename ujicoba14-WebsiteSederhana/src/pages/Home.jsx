import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <>
      <section className="section">
        <h1 className="section-title">Selamat datang di website saya</h1>
        <p className="section-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quis
          ratione eius recusandae eaque aliquid vel! Aut, animi sequi!
          Blanditiis quasi eos nostrum autem reprehenderit quia itaque. Facere,
          esse sit. Consectetur voluptatum magni excepturi, asperiores dolore
          aliquid qui ratione placeat distinctio earum vel optio accusamus id
          quod saepe illum quae?
        </p>
      </section>
    </>
  );
}
